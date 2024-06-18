import { useState } from 'react'
import SectionHeader from '../components/ui/section-header'
import TableData from '../components/ui/table'
import { VIEW_ORDER_COLS } from '../constants/menu-data'
import { useGetOrders } from '../features/use-order-management'
import { EditOutlined } from '@ant-design/icons'
import EditOrderModal from '../components/ui/EditOrderModal'

const OrderManagement = () => {
    const { data, isLoading } = useGetOrders({ page_index: 1, page_size: 99999 })
    const [selectedOrder, setSelectedOrder] = useState(null) // State to store selected order
    const [isModalVisible, setIsModalVisible] = useState(false) // State for modal visibility

    // Function to handle edit action
    const handleEdit = (record) => {
        setSelectedOrder(record) // Set the selected order to edit
        setIsModalVisible(true) // Show the modal
    }

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
                order={selectedOrder} // Pass the selected order to the modal
            />
        </div>
    )
}

export default OrderManagement
