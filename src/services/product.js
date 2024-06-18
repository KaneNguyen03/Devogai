import apiInstance from "@/lib/axios"

const getProduct = async () => {
  try {
    const data = await apiInstance.get(import.meta.env.VITE_PRODUCT_API)
    return data
  } catch (error) {
    throw new Error
  }
}
const getProductById = async (id) => {
  try {
    const data = await apiInstance.get(
      `${import.meta.env.VITE_PRODUCT_API}/${id}`
    )
    return data
  } catch (error) {
    throw new Error
  }
}

const updateProduct = async (data) => {
  try {
    const response = await apiInstance.put(
      `${import.meta.env.VITE_PRODUCT_API}/${data.id}`,
      data
    )
    return response
  } catch (error) {
    throw new Error
  }
}

const productApi = {
  getProduct,
  getProductById,
  updateProduct
}

export default productApi
