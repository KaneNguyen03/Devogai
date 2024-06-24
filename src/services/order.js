import apiInstance from "@/lib/axios"

const getOrders = async (param) => {
  try {
    const { page_index, page_size } = param
    const queryParams = `?page_index=${page_index}&page_size=${page_size}`
    const data = await apiInstance.get(import.meta.env.VITE_ORDER_API + queryParams)
    return data.data
  } catch (error) {
    throw new Error
  }
}

const createOrder = async (data) => {
  try {
    const response = await apiInstance.post(
      import.meta.env.VITE_ORDER_API,
      data
    )
    return response
  } catch (error) {
    throw new Error
  }
}

const updateOrder = async (data) => {
  try {
    const response = await apiInstance.put(
      `${import.meta.env.VITE_ORDER_API}/${data.id}`,
      data
    )
    return response
  } catch (error) {
    throw new Error
  }
}

const gerOrderDetails = async (data) => {
  try {
    const response = await apiInstance.get(
      `orders/${data}/order-detail`,
      data
    )
    return response?.data
  } catch (error) {
    throw new Error
  }
}

const orderApi = {
  getOrders,
  createOrder,
  updateOrder,
  gerOrderDetails
}

export default orderApi
