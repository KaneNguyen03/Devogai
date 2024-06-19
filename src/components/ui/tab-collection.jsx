import { useQuery } from '@tanstack/react-query'
import { Button, Card, Carousel, Select, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cart-context'
import productApi from '../../services/product'
import Loading from './loading'

const { Option } = Select

const TabCollection = ({ tag }) => {
    const navigate = useNavigate()
    const [selectedSizes, setSelectedSizes] = useState({})
    const [errors, setErrors] = useState({})
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
    const dataProduct = useQuery({
        queryKey: ['products/1', 1],
        queryFn: () => productApi.getProduct({ page_index: 1, page_size: 99 })
    })
    const { data, isLoading } = dataProduct

    const mappingItemProduct = data?.data.data.filter(product => product.category === tag)
    if (isLoading) return <Loading />

    return (
        <div>
            <div className='flex justify-center leading-10 p-8 text-red-500'>
                <Typography.Title level={3} style={{ color: '#ff7f7f' }}>{tag}</Typography.Title>
            </div>

            <div className='m-0 h-min text-white leading-4 text-lg text-center'>
                <div className={"grid grid-cols-3 px-8 py-4 mt-4 " + (mappingItemProduct?.some(item => item.category === "T-shirt" || item.category === "Bandana") ? "grid-rows-2" : "")}>
                    {mappingItemProduct?.map((item) => (
                        <div key={item.id} className='flex flex-col items-center justify-between p-4'>
                            <Card
                                hoverable
                                className='h-min'
                                cover={<img alt="example" src={item?.imageUrl} className='object-contain h-40' />}
                            >
                                <Meta title={item?.name} description={item?.description} />
                                <Typography.Title level={4} className='text-green-500'>
                                    {item?.price.toLocaleString('de-DE')} vnd
                                </Typography.Title>
                                <div className='flex justify-center'>
                                    <Select
                                        defaultValue="Size"
                                        className='mt-2 w-20'
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={(value) => setSelectedSizes(prev => ({ ...prev, [item.id]: value }))}
                                    >
                                        {Array.from({ length: (item?.category === "T-shirt") ? 4 : 1 }, (_, i) => (
                                            <Select.Option key={i} value={(item?.category === "T-shirt") ? ['S', 'M', 'L', 'XL'][i] : 'Free'}>
                                                {(item?.category === "T-shirt") ? ['S', 'M', 'L', 'XL'][i] : 'Free'}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </div>
                            </Card>
                            {errors[item?.id] && <Typography.Text>{errors[item?.id]}</Typography.Text>}
                            <Button
                                type="primary"
                                onClick={() => {
                                    if (!selectedSizes[item?.id]) {
                                        setErrors(prev => ({ ...prev, [item?.id]: `Please select a size for ${item?.name} before adding to cart` }))
                                        return
                                    }
                                    addToCart({
                                        ...item,
                                        size: selectedSizes[item?.id],
                                    })
                                    setErrors(prev => ({ ...prev, [item?.id]: null }))
                                }}
                                className='mt-2 w-28'
                            >
                                Add to cart
                            </Button>
                        </div>
                    ))}
                </div>
            </div>


        </div >
    )
}

export default TabCollection
