import { useQuery } from '@tanstack/react-query'
import { Button, Card, Carousel, Select, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cart-context'
import productApi from '../../services/product'
import Loading from './loading'
import Shirt1 from "../../assets/T-shirt_1.png"
import Shirt2 from "../../assets/T-shirt_2.png"
import Shirt3 from "../../assets/T-shirt_3.png"
import Shirt4 from "../../assets/T-shirt_4.png"
import Shirt5 from "../../assets/T-shirt_5.png"
import Shirt6 from "../../assets/T-shirt_6.png"
import Badana1 from "../../assets/Bandana_1.png"
import Badana2 from "../../assets/Bandana_2.png"
import Sock1 from "../../assets/Socks_1.png"
import Sock2 from "../../assets/Socks_2.png"
import Sock3 from "../../assets/Socks_3.png"
import Tote1 from "../../assets/tote_1.png"
import Tote2 from "../../assets/tote_2.png"
import Tote3 from "../../assets/tote_3.png"

const { Option } = Select

const TabCollection = ({ tag }) => {
    const navigate = useNavigate()
    const [selectedSizes, setSelectedSizes] = useState({})
    const [selectedDesigns, setSelectedDesigns] = useState({})
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
                name: "Shirt collection 1",
                size: 4,
                image: [{
                    url: Shirt1,
                    tag: "Design 1",
                },
                {
                    url: Shirt2,
                    tag: "Design 2",

                },
                {
                    url: Shirt3,
                    tag: "Design 3",

                }]
            },
            {
                id: 2,
                name: "Bandana collection 1",
                size: 1,
                image: [{
                    url: Badana1,
                    tag: "Design 1",
                }],

            },]
            mappingItemProduct[0] = data?.data.data[0]
            mappingItemProduct[1] = data?.data.data[1]
            break
        }
        case 2: {
            dataTag = [{
                id: 3,
                name: "Túi tote",
                size: 1,
                image: [{
                    url: Tote1,
                    tag: "Design 1",
                },
                {
                    url: Tote2,
                    tag: "Design 2",

                },
                {
                    url: Tote3,
                    tag: "Design 3",

                }]
            },
            {
                id: 4,
                name: "Bandana collection 2",
                size: 1,
                image: [{
                    url: Badana2,
                    tag: "Design 1",
                }]
            },]
            mappingItemProduct[0] = data?.data.data[2]
            mappingItemProduct[1] = data?.data.data[3]
            break
        }
        case 3: {
            dataTag = [{
                id: 5,
                name: "Shirt collection 2",
                size: 4,
                image: [{
                    url: Shirt4,
                    tag: "Design 1",
                },
                {
                    url: Shirt5,
                    tag: "Design 2",

                },
                {
                    url: Shirt6,
                    tag: "Design 3",

                }]
            },
            {
                id: 6,
                name: "Socks",
                size: 1,
                image: [{
                    url: Sock1,
                    tag: "Design 1",
                },
                {
                    url: Sock2,
                    tag: "Design 2",

                },
                {
                    url: Sock3,
                    tag: "Design 3",

                }]
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
                <div className='m-0 h-min text-white leading-4 text-lg text-center '>
                    <div key={mappingItemProduct[0]?.id} className='flex px-16 py-8 h-[90%] justify-center items-center gap-40'>
                        <Carousel arrows infinite={true} className='h-full w-[360px]'>
                            {dataTag[0]?.image.map((item, index) =>
                                <div className='px-4 h-full text-white leading-4 text-lg text-center w-[460px]' key={index}>
                                    <Card
                                        hoverable
                                        className='w-full h-full'
                                        cover={<img alt="collection" src={item.url} className='object-contain h-60' />}
                                    // onClick={() => navigate(`/product/${dataTag[0].id}`)}
                                    >
                                        <Meta title={item.tag} description={item.tag} />
                                    </Card>
                                </div>
                            )}
                        </Carousel>
                        <div className='flex flex-col space-y-4 items-center h-min'>
                            <Card
                                hoverable
                                className='h-min'
                                cover={<img alt="example" src={mappingItemProduct[0]?.imageUrl} className='object-contain h-40' />}
                            >
                                <Meta title={mappingItemProduct[0]?.name} description={mappingItemProduct[0]?.description} />
                                <Typography.Title level={4} className='text-green-500'>${mappingItemProduct[0]?.price}</Typography.Title>
                                <div className='flex gap-4'>
                                    <Select
                                        defaultValue="Size"
                                        className='mt-2 w-20'
                                        onChange={(value) => setSelectedSizes(prev => ({ ...prev, [mappingItemProduct[0]?.id]: value }))}
                                    >
                                        {Array.from({ length: dataTag[0].size }, (_, i) => (
                                            dataTag[0].size === 1 ? (
                                                <Select.Option key={i} value="Free">
                                                    Free
                                                </Select.Option>
                                            ) : (
                                                <Select.Option key={i} value={['S', 'M', 'L', 'XL'][i]}>
                                                    {['S', 'M', 'L', 'XL'][i]}
                                                </Select.Option>
                                            )
                                        ))}F
                                    </Select>
                                    <Select defaultValue="Design" className='mt-2 w-36' onClick={(e) => e.stopPropagation()} onChange={(value) => setSelectedDesigns(prev => ({ ...prev, [mappingItemProduct[0]?.id]: value }))}>
                                        {dataTag[0]?.image.map((item, index) => (
                                            <Select.Option key={index} value={item.tag}>{item.tag}</Select.Option>
                                        ))}
                                    </Select>
                                </div>
                            </Card>
                            {errors[mappingItemProduct[0]?.id] && <Typography.Text>{errors[mappingItemProduct[0]?.id]}</Typography.Text>}
                            <Button type="primary" onClick={() => {
                                if (!selectedSizes[mappingItemProduct[0]?.id]) {
                                    setErrors(prev => ({ ...prev, [mappingItemProduct[0]?.id]: `Please select a size for ${mappingItemProduct[0]?.name} before adding to cart` }))
                                    return
                                }
                                if (!selectedDesigns[mappingItemProduct[0]?.id]) {
                                    setErrors(prev => ({ ...prev, [mappingItemProduct[0]?.id]: `Please select a design for ${mappingItemProduct[0]?.name} before adding to cart` }))
                                    return
                                }

                                addToCart({
                                    ...mappingItemProduct[0],
                                    size: selectedSizes[mappingItemProduct[0]?.id],
                                    design: selectedDesigns[mappingItemProduct[0]?.id]
                                })
                                setErrors(prev => ({ ...prev, [mappingItemProduct[0]?.id]: null }))
                            }} className='mt-2 w-28'>Add to cart</Button>
                        </div>
                    </div>
                </div>
                <div className='m-0 h-min text-white leading-4 text-lg text-center '>
                    <div key={mappingItemProduct[1]?.id} className='flex px-16 py-8 h-[90%] gap-40 justify-center items-center'>
                        <Carousel arrows infinite={true} className='h-full w-[360px]'>
                            {dataTag[1]?.image.map((item, index) =>
                                <div className='px-4 h-full text-white leading-4 text-lg text-center w-[460px]' key={index}>
                                    <Card
                                        hoverable
                                        className='w-full h-full'
                                        cover={<img alt="collection" src={item.url} className='object-contain h-60' />}
                                    // onClick={() => navigate(`/product/${dataTag[0].id}`)}
                                    >
                                        <Meta title={item.tag} description={item.tag} />
                                    </Card>
                                </div>
                            )}
                        </Carousel>
                        <div className='flex flex-col space-y-4 items-center h-min'>
                            <Card
                                hoverable
                                className='h-min'
                                cover={<img alt="example" src={mappingItemProduct[1]?.imageUrl} className='object-contain h-40' />}
                            >
                                <Meta title={mappingItemProduct[1]?.name} description={mappingItemProduct[1]?.description} />
                                <Typography.Title level={4} className='text-green-500'>${mappingItemProduct[1]?.price}</Typography.Title>
                                <div className='flex gap-4'>
                                    <Select
                                        defaultValue="Size"
                                        className='mt-2 w-20'
                                        onChange={(value) => setSelectedSizes(prev => ({ ...prev, [mappingItemProduct[1]?.id]: value }))}
                                    >
                                        {Array.from({ length: dataTag[1].size }, (_, i) => (
                                            dataTag[1].size === 1 ? (
                                                <Select.Option key={i} value="Free">
                                                    Free
                                                </Select.Option>
                                            ) : (
                                                <Select.Option key={i} value={['S', 'M', 'L', 'XL'][i]}>
                                                    {['S', 'M', 'L', 'XL'][i]}
                                                </Select.Option>
                                            )
                                        ))}
                                    </Select>
                                    <Select defaultValue="Design" className='mt-2 w-36' onClick={(e) => e.stopPropagation()} onChange={(value) => setSelectedDesigns(prev => ({ ...prev, [mappingItemProduct[1]?.id]: value }))}>
                                        {dataTag[1]?.image.map((item, index) => (
                                            <Select.Option key={index} value={item.tag}>{item.tag}</Select.Option>
                                        ))}
                                    </Select>
                                </div>
                            </Card>
                            {errors[mappingItemProduct[1]?.id] && <Typography.Text>{errors[mappingItemProduct[1]?.id]}</Typography.Text>}
                            <Button type="primary" onClick={() => {
                                if (!selectedSizes[mappingItemProduct[1]?.id]) {
                                    setErrors(prev => ({ ...prev, [mappingItemProduct[1]?.id]: `Please select a size for ${mappingItemProduct[1]?.name} before adding to cart` }))
                                    return
                                }
                                if (!selectedDesigns[mappingItemProduct[1]?.id]) {
                                    setErrors(prev => ({ ...prev, [mappingItemProduct[0]?.id]: `Please select a design for ${mappingItemProduct[0]?.name} before adding to cart` }))
                                    return
                                }
                                addToCart({
                                    ...mappingItemProduct[1],
                                    size: selectedSizes[mappingItemProduct[1]?.id],
                                    design: selectedDesigns[mappingItemProduct[1]?.id]
                                })
                                setErrors(prev => ({ ...prev, [mappingItemProduct[1]?.id]: null }))
                            }} className='mt-2 w-28'>Add to cart</Button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div >
    )
}

export default TabCollection
