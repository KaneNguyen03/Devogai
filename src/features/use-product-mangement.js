import productApi from "@/services/product"
import { useQuery } from "@tanstack/react-query"

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => productApi.getProduct(),
  })
}
