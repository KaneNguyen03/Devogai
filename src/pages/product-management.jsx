import { EditOutlined } from '@ant-design/icons'
import { useState } from 'react'
import EditProductModal from '../components/ui/EditProductModal'
import SectionHeader from '../components/ui/section-header'
import TableData from '../components/ui/table'
import { VIEW_PRODUCT_COLS } from '../constants/menu-data'
import { useGetProducts, useUpdateProduct } from '../features/use-product-mangement'
import { message } from 'antd'
import { queryClient } from "../constants/index"
import Loading from '../components/ui/loading'

const ProductManagement = () => {
    const { data, isLoading } = useGetProducts({ page_index: 1, page_size: 99 })
    const [selectedProduct, setSelectedProduct] = useState(null) // State to store selected product
    const [isModalVisible, setIsModalVisible] = useState(false) // State for modal visibility
    const [loading, setLoading] = useState(false)

    const updateProductMutation = useUpdateProduct(setLoading, setIsModalVisible)

    // Function to handle edit action
    const handleEdit = (record) => {
        setSelectedProduct(record) // Set the selected product to edit
        setIsModalVisible(true) // Show the modal
    }

    // Function to close the modal
    const handleCancel = () => {
        setIsModalVisible(false)
    }


    const handleSave = async (formData) => {
        try {
            setLoading(true)
            updateProductMutation.mutate(formData)
            queryClient.invalidateQueries(["products"], { page_index: 1, page_size: 99 })
        } catch (error) {
            console.error('Update failed:', error)
            message.error('Failed to update product')
        } finally {
            setLoading(false)
        }
    }

    if (isLoading || loading)
        return <Loading />

    return (
        <div>
            <SectionHeader title="Product Management" />
            <div className=''>
                <TableData
                    columns={[
                        ...VIEW_PRODUCT_COLS,
                        {
                            title: 'Action',
                            key: 'operation',
                            width: 60,
                            align: 'center',
                            render: (record) => (
                                record.status !== 'Completed' ? (
                                    <div onClick={() => handleEdit(record)} style={{ cursor: 'pointer', color: 'blue' }}>
                                        <EditOutlined /> Edit
                                    </div>
                                ) : (
                                    <div style={{ color: 'gray' }}>
                                        <EditOutlined /> Edit
                                    </div>
                                )
                            ),
                        },
                    ]}
                    data={data?.data?.data}
                    scrollX={1200}
                    scrollY={1000}
                    isLoading={isLoading}
                />
                <EditProductModal
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    onSave={handleSave}
                    product={selectedProduct} 
                />
            </div>
        </div>
    )
}

export default ProductManagement
