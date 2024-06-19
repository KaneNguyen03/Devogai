import { queryClient } from "@/constants"
import orderApi from "@/services/order"
import { useQuery } from "@tanstack/react-query"
import { useMutation } from "react-query"

export const useGetOrders = (param) => {
  return useQuery({
    queryKey: ["orders", param],
    queryFn: () => orderApi.getOrders(param),
    enabled: true
  })
}

export const useGetOrderDetails = (param) => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => orderApi.getOrders(param),
  })
}

export const useUpdateOrders = (setIsModalVisible) => {
  return useMutation(
    (data) => orderApi.updateOrder(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["orders"], { page_index: 1, page_size: 99 })
        setIsModalVisible(false)
      },
    }
  )
}