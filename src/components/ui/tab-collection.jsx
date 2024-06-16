import { Button, Card, Carousel, Select, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/cart-context'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
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
        queryFn: () => productApi.getProduct()
    })
    const { data, isLoading } = dataProduct

    let mappingItemProduct = []

    if (isLoading) return <Loading />
    let dataTag = []
    switch (tag) {
        case 1: {
            dataTag = [{
                id: 1,
                name: "Áo thun 1",
                price: "100.000",
                image: ["https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"]
            },
            {
                id: 2,
                name: "Bandana 1",
                price: "200.000",
                image: ["https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"]
            },]
            mappingItemProduct[0] = data?.data.data[0]
            mappingItemProduct[1] = data?.data.data[1]
            break
        }
        case 2: {
            dataTag = [{
                id: 3,
                name: "Túi tote",
                price: "300.000",
                image: ["https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"]
            },
            {
                id: 4,
                name: "Bandana 2",
                price: "400.000",
                image: ["https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"]
            },]
            mappingItemProduct[0] = data?.data.data[2]
            mappingItemProduct[1] = data?.data.data[3]
            break
        }
        case 3: {
            dataTag = [{
                id: 5,
                name: "Áo thun 2",
                price: "500.000",
                image: ["https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"]
            },
            {
                id: 6,
                name: "tất",
                price: "100.000",
                image: ["https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a",
                    "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"]
            },]
            mappingItemProduct[0] = data?.data.data[4]
            mappingItemProduct[1] = data?.data.data[5]
            break
        }
    }
    return (
        <div>
            <div className='flex justify-center leading-10 p-8'>
                <Typography.Title level={3}>{"Collection " + tag}</Typography.Title>
            </div>
            <Carousel autoplay autoplaySpeed={8000} arrows infinite={true}>
                <div className='m-0 h-min text-white leading-4 text-lg text-center bg-gray-300'>
                    <div key={mappingItemProduct[0]?.id} className='flex px-16 py-8 h-[90%]'>
                        <Carousel arrows infinite={true} className='h-full w-[400px]'>
                            {dataTag[0]?.image.map((item, index) =>
                                <div className='px-4 h-full text-white leading-4 text-lg text-center bg-gray-300 w-[460px]' key={index}>
                                    <Card
                                        hoverable
                                        className='w-full h-full'
                                        cover={<img alt="collection" src={item} />}
                                        onClick={() => navigate(`/product/${dataTag[0].id}`)}
                                    >
                                        {errors[item.id] && <Typography.Text>{errors[item.id]}</Typography.Text>}
                                    </Card>
                                </div>
                            )}
                        </Carousel>
                        <div className='flex flex-col space-y-4 w-full items-center h-min'>
                            <Card
                                hoverable
                                className='h-min'
                                cover={<img alt="example" src={mappingItemProduct[0]?.imageUrl} className='object-contain h-40' />}
                            >
                                <Meta title={mappingItemProduct[0]?.name} description={mappingItemProduct[0]?.description} />
                                <Typography.Title level={4} className='text-green-500'>${mappingItemProduct[0]?.price}</Typography.Title>
                                <Select defaultValue="Select size" className='mt-2 w-40' onChange={(value) => setSelectedSizes(prev => ({ ...prev, [mappingItemProduct[0]?.id]: value }))}>
                                    <Option value="S">S</Option>
                                    <Option value="M">M</Option>
                                    <Option value="L">L</Option>
                                </Select>
                            </Card>
                            {errors[mappingItemProduct[0]?.id] && <Typography.Text>{errors[mappingItemProduct[0]?.id]}</Typography.Text>}
                            <Button type="primary" onClick={() => {
                                if (!selectedSizes[mappingItemProduct[0]?.id]) {
                                    setErrors(prev => ({ ...prev, [mappingItemProduct[0]?.id]: `Please select a size for ${mappingItemProduct[0]?.name} before adding to cart` }))
                                    return
                                }
                                addToCart({ ...mappingItemProduct[0], size: selectedSizes[mappingItemProduct[0]?.id] }); setErrors(prev => ({ ...prev, [mappingItemProduct[0]?.id]: null }))
                            }} className='mt-2 w-28'>Add to cart</Button>
                        </div>
                    </div>
                </div>
                <div className='m-0 h-min text-white leading-4 text-lg text-center bg-gray-300'>
                    <div key={mappingItemProduct[1]?.id} className='flex px-16 py-8 h-[90%]'>
                        <Carousel arrows infinite={true} className='h-full w-[400px]'>
                            {dataTag[1]?.image.map((item, index) =>
                                <div className='px-4 h-full text-white leading-4 text-lg text-center bg-gray-300 w-[460px]' key={index}>
                                    <Card
                                        hoverable
                                        className='w-full h-full'
                                        cover={<img alt="collection" src={item} />}
                                        onClick={() => navigate(`/product/${dataTag[0].id}`)}
                                    >
                                        <Meta title={item} description="www.instagram.com" />
                                    </Card>
                                </div>
                            )}
                        </Carousel>
                        <div className='flex flex-col space-y-4 w-full items-center h-min'>
                            <Card
                                hoverable
                                className='h-min'
                                cover={<img alt="example" src={mappingItemProduct[1]?.imageUrl} className='object-contain h-40' />}
                            >
                                <Meta title={mappingItemProduct[1]?.name} description={mappingItemProduct[1]?.description} />
                                <Typography.Title level={4} className='text-green-500'>${mappingItemProduct[1]?.price}</Typography.Title>
                                <Select defaultValue="Select size" className='mt-2 w-40' onChange={(value) => setSelectedSizes(prev => ({ ...prev, [mappingItemProduct[1]?.id]: value }))}>
                                    <Option value="S">S</Option>
                                    <Option value="M">M</Option>
                                    <Option value="L">L</Option>
                                </Select>
                            </Card>
                            {errors[mappingItemProduct[1]?.id] && <Typography.Text>{errors[mappingItemProduct[1]?.id]}</Typography.Text>}
                            <Button type="primary" onClick={() => {
                                if (!selectedSizes[mappingItemProduct[1]?.id]) {
                                    setErrors(prev => ({ ...prev, [mappingItemProduct[1]?.id]: `Please select a size for ${mappingItemProduct[1]?.name} before adding to cart` }))
                                    return
                                }
                                addToCart({ ...mappingItemProduct[1], size: selectedSizes[mappingItemProduct[1]?.id] }); setErrors(prev => ({ ...prev, [mappingItemProduct[1]?.id]: null }))
                            }} className='mt-2 w-28'>Add to cart</Button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div >
    )
}

export default TabCollection
