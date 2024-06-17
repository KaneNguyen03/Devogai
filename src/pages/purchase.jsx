import { useContext, useState } from "react"
import { CartContext } from "../context/cart-context"
import { Button, Card, Typography, Modal, Form, Input, Radio, Select } from "antd"
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { useAuth } from "../hooks/use-auth"
import orderApi from "../services/order"

const { Item } = Form
const { Meta } = Card

const Purchase = () => {
    const { cartItems, removeFromCart, updateQuantity, updateSize, updateDesign } = useContext(CartContext)
    const { user } = useAuth()
    const [form] = Form.useForm()
    const [paymentMethod, setPaymentMethod] = useState("COD")

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value)
    }


    const onFinish = (values) => {
        const order = {
            name: values.name,
            address: values.address,
            phone: values.phone,
            totalAmount: calculateTotalPrice().toFixed(2).toString()
        }

        const orderDetails = cartItems

        const dataToSubmit = {
            order: order,
            orderDetails: orderDetails
        }

        orderApi.createOrder(dataToSubmit)
        console.log("Received values:", dataToSubmit)
        // Handle form submission logic here (e.g., send data to server)
    }


    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo)
        // Handle form validation or submission failure
    }

    // Placeholder function to calculate total price (example)
    const calculateTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    return (
        <div className="p-12">
            <div className="p-4 ml-12">
                <Typography.Title>Purchase</Typography.Title>
            </div>
            <div className="flex justify-between">
                <div className="w-3/5 pr-4 max-h-screen overflow-y-scroll">
                    <div className="bg-gray-200 p-4">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between items-center mb-4">
                                    <Card
                                        hoverable
                                        className="w-full"
                                        cover={<img alt={item.name} src={item.imageUrl} className="h-40 object-contain" />}
                                    >
                                        <Meta title={item.name} description={`$${item.price}`} />
                                        <div class="flex gap-4">
                                            <Select
                                                defaultValue={item.size || "Size"}
                                                className='mt-2 w-20'
                                                onChange={(value) => updateSize(item.id, value)}
                                            >
                                                <Option value="S">S</Option>
                                                <Option value="M">M</Option>
                                                <Option value="L">L</Option>
                                            </Select>
                                            <Select
                                                defaultValue={'Design ' + item.design}
                                                className='mt-2 w-36'
                                                onChange={(value) => updateDesign(item.id, value)}
                                            >
                                                <Option value="1">Design 1</Option>
                                                <Option value="2">Design 2</Option>
                                                <Option value="3">Design 3</Option>
                                            </Select>
                                        </div>
                                    </Card>
                                    <div className="p-4 flex flex-col items-center justify-center">
                                        <div className="flex items-center gap-2">
                                            <Button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 0}>
                                                <MinusOutlined />
                                            </Button>
                                            <span className="px-2">{item.quantity}</span>
                                            <Button onClick={() => updateQuantity(item.id, 1)}>
                                                <PlusOutlined />
                                            </Button>
                                        </div>
                                        <div className="mt-2">
                                            <Button onClick={() => {
                                                Modal.confirm({
                                                    title: 'Are you sure you want to delete this item?',
                                                    onOk: () => removeFromCart(item.id),
                                                })

                                            }}>
                                                <DeleteOutlined />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-4">Your cart is empty!</div>
                        )}
                    </div>
                </div>
                <div className="w-2/5">
                    <div className="bg-gray-100 p-4">
                        <Typography.Title level={1}>Summary</Typography.Title>
                        <div className="mt-4">

                            <div className="mb-2">
                                <Typography.Text className="text-xl"><strong>Total Items:</strong> {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</Typography.Text>
                            </div>
                            <div className="mb-2">
                                <Typography.Text className="text-xl"><strong>Total Price:</strong> ${calculateTotalPrice().toFixed(2)}</Typography.Text>
                            </div>
                        </div>
                        <Form
                            form={form}
                            name="purchaseForm"
                            initialValues={user ? { name: user.name, address: user.address, phone: user.phone } : null}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout="vertical"
                        >
                            <Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: "Please input your name!" }]}
                            >
                                <Input />
                            </Item>
                            <Item
                                label="Address"
                                name="address"
                                rules={[{ required: true, message: "Please input your address!" }]}
                            >
                                <Input />
                            </Item>
                            <Item
                                label="Phone"
                                name="phone"
                                rules={[{ required: true, message: "Please input your phone number!" }]}
                            >
                                <Input />
                            </Item>
                            <Item label="Payment Method">
                                <Radio.Group onChange={handlePaymentMethodChange} value={paymentMethod}>
                                    <Radio value="COD">Cash on Delivery</Radio>
                                    {/* <Radio value="Vnpay">Vnpay</Radio> */}
                                </Radio.Group>
                            </Item>
                            <Item wrapperCol={{ offset: 0, span: 24 }}>
                                <Button type="primary" htmlType="submit" block disabled={cartItems.length <= 0}>
                                    Submit
                                </Button>
                            </Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase
