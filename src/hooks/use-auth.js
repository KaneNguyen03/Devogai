import authApi from "@/services/auth"

import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "@/lib/axios"
import { ROUTE_PATHS } from "../router/index"
import { useMutation, useQuery } from "@tanstack/react-query"
import { notification } from "antd"
import { useNavigate } from "react-router-dom"
import { queryClient } from "@/constants"

export const useAuth = () => {
  const navigate = useNavigate()

  const {
    data: user,
    isLoading: loadingInitial,
    error: error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await authApi.getCurrentUser()
      if (!response) {
        localStorage.clear()
        navigate(ROUTE_PATHS)
        return null
      } else return response.data
    },
  })

  const signInMutation = useMutation({
    mutationFn: ({ username, password }) => authApi.signIn(username, password),
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        localStorage.setItem(TOKEN_KEY, data.data.token)
        localStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken)
        queryClient.invalidateQueries({ queryKey: ["user"] })
        if (data.data.account.role === "admin") navigate("/admin")
        else navigate("/")
        notification.success({
          message: data.message,
          description: "You have successfully logged in",
        })
      } else
        notification.error({
          message: data.message,
          description: "Your username or password is incorrect.",
        })
    },
  })

  const logoutMutation = useMutation({
    mutationFn: () => authApi.logOut(),
    onSuccess: () => {
      localStorage.clear()
      window.location.reload()
      navigate("/")
    },
    onError: (error) => {
      notification.error({
        message: error.message,
        description: "Logout Failed!",
      })
    },
  })

  return { user, loadingInitial, error, signInMutation, logoutMutation }
}
