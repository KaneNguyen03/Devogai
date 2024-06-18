import orderApi from "@/services/order"
import { useQuery } from "@tanstack/react-query"
import { useMutation, useQueryClient } from "react-query"

export const useGetOrders = (param) => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => orderApi.getOrders(param),
  })
}

export const useGetOrderDetails = (param) => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => orderApi.getOrders(param),
  })
}

export const useUpdateOrders = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (data) => orderApi.updateOrder(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('orders')
      },
    }
  )
}