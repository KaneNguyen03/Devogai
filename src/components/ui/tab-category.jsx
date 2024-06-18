import { useQuery } from '@tanstack/react-query'
import { Button, Card, Carousel, Select, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from "../../components/ui/loading"
import { CartContext } from '../../context/cart-context'
import productApi from '../../services/product'

const TabCategory = ({ tag }) => {
    const navigate = useNavigate()
    const [selectedSizes, setSelectedSizes] = useState({})
    const [selectedDesigns, setSelectedDesigns] = useState({})
    const [errors, setErrors] = useState({})
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
    const dataProduct = useQuery({
        queryKey: ['products'],
        queryFn: () => productApi.getProduct()
    })
    const { data, isLoading } = dataProduct
    if (isLoading) return <Loading />

    return (
        <div>
            <div className='flex justify-center leading-10 p-8'>
                <Typography.Title level={3}>{tag}</Typography.Title>
            </div>
            <Carousel autoplay autoplaySpeed={8000} arrows infinite={true}>
                <div className='m-0 h-min text-white leading-4 text-lg text-center opacity-4'>
                    <div className='grid grid-cols-4 grid-rows-2 gap-4 px-8 py-4 mt-4'>
                        {data?.data.data.slice(0, 6).map(item => {
                            return (
                                <div key={item.id} className='flex flex-col items-center'>
                                    <Card
                                        hoverable
                                        style={{ width: 240, height: 360 }}
                                        cover={<img alt="example" src={item?.imageUrl} className='object-contain h-60' />}
                                    >
                                        <Meta title={item.name} description={item.description} />
                                        <div className='flex gap-4'>
                                            <Select defaultValue="Size" className='mt-2 w-20' onClick={(e) => e.stopPropagation()} onChange={(value) => setSelectedSizes(prev => ({ ...prev, [item.id]: value }))}>

                                                {Array.from({
                                                    length: (item?.id === "dd9dd3a7-652b-4a83-8329-da247a972365" || item?.id === "09cb9869-e18e-4131-9840-23590602a0e4") ? 4 : 1
                                                }, (_, i) => (
                                                    <Select.Option key={i} value={(item?.id === "dd9dd3a7-652b-4a83-8329-da247a972365" || item?.id === "09cb9869-e18e-4131-9840-23590602a0e4") ? ['S', 'M', 'L', 'XL'][i] : 'Free'}>
                                                        {(item?.id === "dd9dd3a7-652b-4a83-8329-da247a972365" || item?.id === "09cb9869-e18e-4131-9840-23590602a0e4") ? ['S', 'M', 'L', 'XL'][i] : 'Free'}
                                                    </Select.Option>
                                                ))}

                                            </Select>
                                            <Select defaultValue="Design" className='mt-2 w-36' onClick={(e) => e.stopPropagation()} onChange={(value) => setSelectedDesigns(prev => ({ ...prev, [item.id]: value }))}>
                                                {item?.id === "dd9dd3a7-652b-4a83-8329-da247a972365" || item?.id === "09cb9869-e18e-4131-9840-23590602a0e4" || item?.id === "77aaabfd-9f14-40e4-9c6b-12febd6c6f7c" ? (
                                                    <>
                                                        <Select.Option value="1">Design 1</Select.Option>
                                                        <Select.Option value="2">Design 2</Select.Option>
                                                        <Select.Option value="3">Design 3</Select.Option>
                                                    </>
                                                ) : (
                                                    <Select.Option value="1">Design 1</Select.Option>
                                                )}
                                            </Select>
                                        </div>
                                    </Card>
                                    {errors[item.id] && <Typography.Text>{errors[item.id]}</Typography.Text>}
                                    <Button onClick={() => {
                                        if (!selectedSizes[item.id]) {
                                            setErrors(prev => ({ ...prev, [item.id]: `Please select a size for ${item.name} before adding to cart` }))
                                            return
                                        }
                                        if (!selectedDesigns[item.id]) {
                                            setErrors(prev => ({ ...prev, [item.id]: `Please select a design for ${item.name} before adding to cart` }))
                                            return
                                        }
                                        addToCart({ ...item, size: selectedSizes[item.id], design: selectedDesigns[item.id] })
                                        setErrors(prev => ({ ...prev, [item.id]: null }))
                                    }} className='mt-2'>Add to cart</Button>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </Carousel>
        </div>
    )
}

export default TabCategory
