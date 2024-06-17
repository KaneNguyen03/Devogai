import orderApi from "@/services/order"
import { useQuery } from "@tanstack/react-query"

export const useGetOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => orderApi.getOrders(),
  })
}
