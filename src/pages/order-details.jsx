import React from 'react'
import SectionHeader from '../components/ui/section-header'
import TableData from '../components/ui/table'

const OrderDetails = () => {
    const { data, isLoading } = useGetUsers()
    return (
        <div>
            <SectionHeader title="User Management" />
            <div className=''>
                <TableData
                    // columns={VIEW_USER_COLS}
                    data={data?.data}
                    scrollX={1200}
                    scrollY={1000}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default OrderDetails
