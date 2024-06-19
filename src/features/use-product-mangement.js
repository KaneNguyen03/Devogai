import { queryClient } from "@/constants"
import productApi from "@/services/product"
import { useQuery } from "@tanstack/react-query"
import { notification } from "antd"
import { useMutation } from "react-query"

export const useGetProducts = (param) => {
  return useQuery({
    queryKey: ["products", param],
    queryFn: () => productApi.getProduct(param),
    enabled: true
  })
}

export const useUpdateProduct = (setLoading, setIsModalVisible) => {
  return useMutation(
    (data) => productApi.updateProduct(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products"])
        setIsModalVisible(false)
      },
      onError: (error) => {
        notification.error({ message: "Failed to update product" })
      },
      onSettled: () => {
        setLoading(false)
      },
    }
  )
}
