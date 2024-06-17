import authApi from "@/services/auth"
import { useQuery } from "@tanstack/react-query"

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => authApi.getUsers(),
  })
}
