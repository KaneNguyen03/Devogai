import { queryClient } from "@/constants"
import productApi from "@/services/product"
import { useQuery } from "@tanstack/react-query"
import { notification } from "antd"
import { useMutation } from "react-query"

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => productApi.getProduct(),
  })
}

export const useUpdateProduct = (setLoading, setIsModalVisible) => {
  return useMutation(
    (data) => productApi.updateProduct(data),
    {
      onSuccess: async () => {
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
