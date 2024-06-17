import apiInstance from "@/lib/axios"

const getOrders = async () => {
  try {
    const data = await apiInstance.get(import.meta.env.VITE_ORDER_API)
    return data
  } catch {}
}

const createOrder = async (data) => {
  try {
    const response = await apiInstance.post(
      import.meta.env.VITE_ORDER_API,
      data
    )
    return response
  } catch {}
}

const orderApi = {
  getOrders,
  createOrder,
}

export default orderApi
