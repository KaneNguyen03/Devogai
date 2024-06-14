import { Button, Card, Carousel, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cart-context'

const TabCategory = ({ tag }) => {
    const navigate = useNavigate()
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
    let dataTag = []
    let directUrl = ""
    switch (tag) {
        case "New Arrivals": {
            dataTag = [{
                id: 1,
                name: "Áo thun",
                price: "100.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            },
            {
                id: 2,
                name: "Áo sơ mi",
                price: "200.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            },
            {
                id: 3,
                name: "Áo khoác",
                price: "300.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            },
            {
                id: 4,
                name: "Quần jeans",
                price: "400.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            },
            {
                id: 5,
                name: "Quần kaki",
                price: "500.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            },
            {
                id: 6,
                name: "Quần âu",
                price: "600.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            },
            {
                id: 7,
                name: "Quần âu 7",
                price: "600.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            },
            {
                id: 8,
                name: "Quần âu 8",
                price: "600.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            },
            {
                id: 9,
                name: "Quần âu 8",
                price: "600.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            }, {
                id: 10,
                name: "Quần âu 8",
                price: "600.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            },
            ]
            directUrl = "/home"
            break
        }
        case "T Shirts": {
            dataTag = [{
                id: 9,
                name: "T-shirts 1",
                price: "600.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            }]
            directUrl = "/t-shirts"
            break
        }
        case "Shirts": {
            dataTag = [{
                id: 7,
                name: "Shirts 789",
                price: "600.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            }]
            directUrl = "/shirts"
            break
        }
        case "Pants": {
            dataTag = [{
                id: 78,
                name: "Pants 789",
                price: "600.000",
                image: "https://cf.shopee.vn/file/6f4b8b1f1b1a6c2f3c6b3a4b5c9b9e9a"
            }]
            directUrl = "/pants"
            break
        }
    }


    return (
        <div>
            <div className='flex justify-center leading-10 p-8'>
                <Typography.Title level={3}>{tag}</Typography.Title>
            </div>
            <Carousel autoplay autoplaySpeed={8000} arrows infinite={true}>
                <div className='m-0 h-96 text-white leading-4 text-lg text-center bg-green-500'>
                    <div className='grid grid-cols-4 grid-rows-2 gap-4 px-8 py-4 mt-4'>
                        {dataTag.slice(0, 8).map(item => {
                            return (
                                <div className='flex flex-col items-center'>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={item?.image} />}
                                        onClick={() => navigate(`/product/${item.id}`)}
                                    >
                                        <Meta title={item.name} description="www.instagram.com" />
                                    </Card>
                                    <Button onClick={() => addToCart(item)} className='mt-2'>Add to cart</Button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='m-0 h-96 text-white leading-4 text-lg text-center bg-green-500'>
                    <div className='grid grid-cols-4 grid-rows-2 gap-4 px-8 py-4 mt-4'>
                        {dataTag.slice(8, 16).map(item => {
                            return (
                                <div className='flex flex-col items-center'>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={item?.url} />}
                                    >
                                        <Meta title={item.name} description="www.instagram.com" />
                                    </Card>
                                    <Button onClick={() => {
                                        addToCart(item)
                                    }} className='mt-2'>Add to cart</Button>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </Carousel>
            <div className='flex justify-center leading-10 p-8'>
                {tag === "New Arrivals" ? <></> : <Button onClick={() => navigate(`${directUrl}`)}>See more</Button>}
            </div>
        </div>
    )
}

export default TabCategory
