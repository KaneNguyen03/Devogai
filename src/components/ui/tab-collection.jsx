import { Button, Card, Carousel, Select, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import { Option } from 'antd/es/mentions'

const TabCollection = ({ tag }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
    let dataTag = []
    switch (tag) {
        case "Collection 1": {
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

            break
        }
        case "Collection 2": {
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
            break
        }
        case "Collection 3": {
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
                    <div key={dataTag[0].id} className='flex px-16 py-8 h-[90%]'>
                        <Carousel arrows infinite={true} className='h-full w-[600px]'>
                            {dataTag[0].image.map((item, index) =>
                                <div className='px-4 h-full text-white leading-4 text-lg text-center bg-green-500 w-[400px]' key={index}>
                                    <Card
                                        hoverable
                                        className='w-full h-full'
                                        cover={<img alt="collection" src={item} />}
                                    >
                                        <Meta title={item} description="www.instagram.com" />
                                    </Card>
                                </div>
                            )}
                        </Carousel>
                        <div className='flex flex-col space-y-4 w-full items-center'>
                            <Typography.Title level={3}>{dataTag[0].name}</Typography.Title>
                            <Typography.Paragraph>{dataTag[0]?.description ?? "no description"}</Typography.Paragraph>
                            <Typography.Title level={4} className='text-green-500'>${dataTag[0].price}</Typography.Title>
                            <Select defaultValue="Select size" className='mt-2 w-40'>
                                <Option value="S">S</Option>
                                <Option value="M">M</Option>
                                <Option value="L">L</Option>
                            </Select>
                            <Button type="primary" onClick={() => addToCart(dataTag[0])} className='mt-2 w-28'>Add to cart</Button>
                        </div>
                    </div>
                </div>
                <div className='m-0 h-96 text-white leading-4 text-lg text-center bg-green-500'>
                    <div key={dataTag[1].id} className='flex px-16 py-8 h-[90%]'>
                        <Carousel arrows infinite={true} className='h-full w-[600px]'>
                            {dataTag[1].image.map((item, index) =>
                                <div className='px-4 h-full text-white leading-4 text-lg text-center bg-green-500 w-[400px]' key={index}>
                                    <Card
                                        hoverable
                                        className='w-full h-full'
                                        cover={<img alt="collection" src={item} />}
                                    >
                                        <Meta title={item} description="www.instagram.com" />
                                    </Card>
                                </div>
                            )}
                        </Carousel>
                        <div className='flex flex-col space-y-4 w-full items-center'>
                            <Typography.Title level={3}>{dataTag[1].name}</Typography.Title>
                            <Typography.Paragraph>{dataTag[1]?.description ?? "no description"}</Typography.Paragraph>
                            <Typography.Title level={4} className='text-green-500'>${dataTag[0].price}</Typography.Title>
                            <Select defaultValue="Select size" className='mt-2 w-40'>
                                <Option value="S">S</Option>
                                <Option value="M">M</Option>
                                <Option value="L">L</Option>
                            </Select>
                            <Button type="primary" onClick={() => addToCart(dataTag[0])} className='mt-2 w-28'>Add to cart</Button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div >
    )
}

export default TabCollection
