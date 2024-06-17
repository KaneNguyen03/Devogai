import React from 'react'
import { VIEW_PRODUCT_COLS } from '../constants/menu-data'
import SectionHeader from '../components/ui/section-header'
import TableData from '../components/ui/table'

const ProductManagement = () => {
    return (
        <div>
            <SectionHeader title="Product Management" />
            <div className=''>
                <TableData
                    columns={VIEW_PRODUCT_COLS}
                    data={[]}
                    scrollX={1200}
                    scrollY={1000}
                // isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default ProductManagement
