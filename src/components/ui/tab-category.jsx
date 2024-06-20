import { useQuery } from '@tanstack/react-query'
import { Button, Card, Select, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from "../../components/ui/loading"
import { CartContext } from '../../context/cart-context'
import productApi from '../../services/product'

const TabCategory = ({ tag }) => {
    const navigate = useNavigate()
    const [selectedSizes, setSelectedSizes] = useState({})
    const [errors, setErrors] = useState({})
    const { addToCart } = useContext(CartContext)
    const dataProduct = useQuery({
        queryKey: ['products'],
        queryFn: () => productApi.getProduct({ page_index: 1, page_size: 99 })
    })
    const { data, isLoading } = dataProduct

    const groupedData = data?.data.data.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = []
        }
        if (acc[item.category].length < 2) {
            acc[item.category].push(item)
        }
        return acc
    }, {})

    const result = groupedData ? Object.values(groupedData).flat() : ""

    if (isLoading) return <Loading />

    return (
        <div>
            <div className='flex justify-center leading-10 p-8'>
                <Typography.Title level={1} style={{ color: '#72543B' }}>{tag.toString().toUpperCase()}</Typography.Title>
            </div>
            <div className='m-0 h-min text-white leading-4 text-lg text-center opacity-4'>
                <div className='grid grid-cols-4 grid-rows-2 gap-4 px-8 py-4 mt-4'>
                    {result?.map(item => {
                        return (
                            <div key={item.id} className='flex flex-col items-center'>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src={item?.imageUrl} className='object-contain' />}
                                    onClick={() => navigate(`/product/${item.id}`)}
                                >
                                    <Meta title={item.name} description={item.description} />
                                    <Typography.Title level={4} style={{ color: '#ff7f7f' }}>
                                        {item?.price.toLocaleString('de-DE')} VND
                                    </Typography.Title>
                                    <div className='flex justify-center'>
                                        <Select defaultValue="Size" className='mt-2 w-20' onClick={(e) => e.stopPropagation()} onChange={(value) => setSelectedSizes(prev => ({ ...prev, [item.id]: value }))}>

                                            {Array.from({
                                                length: (item?.category === "T-shirt") ? 4 : 1
                                            }, (_, i) => (
                                                <Select.Option key={i} value={(item?.category === "T-shirt") ? ['S', 'M', 'L', 'XL'][i] : 'Free'}>
                                                    {(item?.category === "T-shirt") ? ['S', 'M', 'L', 'XL'][i] : 'Free'}
                                                </Select.Option>
                                            ))}
                                        </Select>

                                    </div>
                                </Card>
                                {errors[item.id] && <Typography.Text>{errors[item.id]}</Typography.Text>}
                                <Button onClick={() => {
                                    if (!selectedSizes[item.id]) {
                                        setErrors(prev => ({ ...prev, [item.id]: `Please select a size for ${item.name} before adding to cart` }))
                                        return
                                    }

                                    addToCart({ ...item, size: selectedSizes[item.id] })
                                    setErrors(prev => ({ ...prev, [item.id]: null }))
                                }} className='mt-2'>Add to cart
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TabCategory
