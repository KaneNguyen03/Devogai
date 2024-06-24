import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Modal, message } from 'antd'
import { useState } from 'react'
import EditOrderModal from '../components/ui/EditOrderModal'
import Loading from '../components/ui/loading'
import SectionHeader from '../components/ui/section-header'
import TableData from '../components/ui/table'
import { queryClient } from '../constants'
import { VIEW_ORDER_COLS } from '../constants/menu-data'
import { useDeleteOrder, useGetOrders, useUpdateOrders } from '../features/use-order-management'

const OrderManagement = () => {
    const { data, isLoading } = useGetOrders({ page_index: 1, page_size: 99999 })
    const [selectedOrder, setSelectedOrder] = useState(null) // State to store selected order
    const [isModalVisible, setIsModalVisible] = useState(false) // State for modal visibility
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false) // State for delete modal visibility
    const [orderToDelete, setOrderToDelete] = useState(null) // State to store order to delete

    const deleteOrderMutation = useDeleteOrder(setIsDeleteModalVisible) // Replace with your delete mutation
    // Function to handle delete action
    const handleDelete = (record) => {
        setOrderToDelete(record) // Set the order to delete
        setIsDeleteModalVisible(true) // Show the delete modal
    }

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

    const confirmDelete = async () => {
        try {
            deleteOrderMutation.mutate(orderToDelete.id)
            queryClient.invalidateQueries(["orders"], { page_index: 1, page_size: 99 })
        } catch (error) {
            console.error('Delete failed:', error)
            message.error('Failed to delete order')
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
                                  <div className='flex'>
                                    <div onClick={() => handleEdit(record)} style={{ cursor: 'pointer', color: 'blue' }}>
                                        <EditOutlined /> Edit
                                    </div>
                                    <div onClick={() => handleDelete(record)} style={{ cursor: 'pointer', color: 'red' }}>
                                        <DeleteOutlined /> Delete
                                    </div>
                                    </div>
                                ) : (
                                    <div style={{ color: 'gray' }}>
                                        <EditOutlined /> Edit
                                    </div>
                                )
                            ),
                        },
                    ]}
                    data={data?.data?.filter(x => x?.deleted == false)}
                    scrollX={1200}
                    scrollY={1000}
                    isLoading={isLoading}
                />
            </div>
            <EditOrderModal
                visible={isModalVisible}
                onCancel={handleCancel}
                onSave={handleSave}
                order={selectedOrder} // Pass the selected order to the modal
            />
               <Modal
                title="Confirm Delete"
                open={isDeleteModalVisible}
                 onOk={confirmDelete}
                onCancel={() => setIsDeleteModalVisible(false)}
            >
                <p>Are you sure you want to delete this order?</p>
            </Modal>
        </div>
    )
}

export default OrderManagement
