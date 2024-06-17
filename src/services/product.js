import apiInstance from "@/lib/axios"

const getProduct = async () => {
  try {
    const data = await apiInstance.get(import.meta.env.VITE_GET_PRODUCT_API)
    return data
  } catch {}
}
const getProductById = async (id) => {
  try {
    const data = await apiInstance.get(
      `${import.meta.env.VITE_GET_PRODUCT_API}/${id}`
    )
    return data
  } catch {}
}

const productApi = {
  getProduct,
  getProductById
}

export default productApi
