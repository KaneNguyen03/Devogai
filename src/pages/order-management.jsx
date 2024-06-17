import React from 'react'
import SectionHeader from '../components/ui/section-header'
import TableData from '../components/ui/table'
import { VIEW_ORDERE_COLS } from '../constants/menu-data'
import { useGetOrders } from '../features/use-order-management'

const OrderManagement = () => {
    const { data, isLoading } = useGetOrders()
    console.log("🚀 Kha ne ~ data:", data)
    return (
        <div>
            <SectionHeader title="Order Management" />
            <div className=''>
                <TableData
                    columns={VIEW_ORDERE_COLS}
                    data={data?.data.data}
                    scrollX={1200}
                    scrollY={1000}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default OrderManagement
