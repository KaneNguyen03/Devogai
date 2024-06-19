import { EditOutlined } from '@ant-design/icons'
import { message } from 'antd'
import { useState } from 'react'
import EditOrderModal from '../components/ui/EditOrderModal'
import Loading from '../components/ui/loading'
import SectionHeader from '../components/ui/section-header'
import TableData from '../components/ui/table'
import { queryClient } from '../constants'
import { VIEW_ORDER_COLS } from '../constants/menu-data'
import { useGetOrders, useUpdateOrders } from '../features/use-order-management'

const OrderManagement = () => {
    const { data, isLoading } = useGetOrders({ page_index: 1, page_size: 99999 })
    const [selectedOrder, setSelectedOrder] = useState(null) // State to store selected order
    const [isModalVisible, setIsModalVisible] = useState(false) // State for modal visibility


    const updateOrderMutation = useUpdateOrders(setIsModalVisible)
    // Function to handle edit action
    const handleEdit = (record) => {
        setSelectedOrder(record) // Set the selected order to edit
        setIsModalVisible(true) // Show the modal
    }

    const handleSave = async (formData) => {
        try {
            updateOrderMutation.mutate(formData)
            queryClient.invalidateQueries(["orders"], { page_index: 1, page_size: 99 })
        } catch (error) {
            console.error('Update failed:', error)
            message.error('Failed to update order')
        }
    }

    if (isLoading)
        return <Loading />

    // Function to close the modal
    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <div>
            <SectionHeader title="Order Management" />
            <div>
                <TableData
                    columns={[
                        ...VIEW_ORDER_COLS,
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
                    data={data?.data}
                    scrollX={1200}
                    scrollY={1000}
                    isLoading={isLoading}
                />
            </div>

            {/* Render the modal component */}
            <EditOrderModal
                visible={isModalVisible}
                onCancel={handleCancel}
                onSave={handleSave}
                order={selectedOrder} // Pass the selected order to the modal
            />
        </div>
    )
}

export default OrderManagement
