const getOrder = async () => {
  try {
    const data = await apiInstance.get(import.meta.env.VITE_GET_PRODUCT_API)
    return data
  } catch {}
}

const createOrder = async (data) => {
  try {
    const response = await apiInstance.post(
      import.meta.env.VITE_GET_PRODUCT_API,
      data
    )
    return response
  } catch {}
}

const orderApi = {
  getOrder,
  createOrder
}

export default orderApi
