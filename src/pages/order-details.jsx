import { useParams } from 'react-router-dom'
import SectionHeader from '../components/ui/section-header'
import TableData from '../components/ui/table'
import { VIEW_ORDER_DETAIL_COLS } from '../constants/menu-data'
import { useGetOrderDetails } from '../features/use-order-management'
import { useGetProducts } from '../features/use-product-mangement'

const OrderDetails = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetOrderDetails(id)
    // Fetch all products
    const { data: products } = useGetProducts({ page_index: 1, page_size: 99 })
    // Create a map of product IDs to product names
    const productNameMap = products?.data.data?.reduce((map, product) => ({ ...map, [product.id]: product.name }), {})

    // Modify the columns to display the product name
    const columns = VIEW_ORDER_DETAIL_COLS.map(column => column.key === 'productId'
        ? { ...column, render: (productId) => productNameMap[productId] || 'Loading...' }
        : column
    )
    return (
        <div>
            <SectionHeader title="Order Details" />
            <div className=''>
                <TableData
                    columns={columns}
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
