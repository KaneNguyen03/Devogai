

import { Button, Card, Modal, Select, Typography } from 'antd'
import { Header as AntHeader } from 'antd/es/layout/layout'
import { useNavigate } from 'react-router-dom'

import { DeleteOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Meta from 'antd/es/card/Meta'
import { useContext, useState } from 'react'
import Logo from '../assets/logo.jpg'
import Navigator from '../components/ui/navigator'
import { CartContext } from '../context/cart-context'
import { useAuth } from '../hooks/use-auth'

export default function Header(isLoginPage) {
  const { cartItems, removeFromCart, updateQuantity, updateSize, updateDesign } = useContext(CartContext)
  const navigate = useNavigate()
  const { logoutMutation, user } = useAuth()

  const [isCartModalVisible, setIsCartModalVisible] = useState(false)

  // Calculate total number of items and total price
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0)

  return (
    <AntHeader className="d-flex bg-primary flex justify-between items-center bg-white">
      <img src={Logo} alt="Logo" className="w-16" />
      <div className="flex items-center justify-between gap-2 bg-white text-white w-[60%]">
        <Navigator />
      </div>
      {user ? (
        <div className="flex items-center gap-2">
          <Button onClick={() => setIsCartModalVisible(!isCartModalVisible)}>
            <Typography.Text className=''><ShoppingCartOutlined /></Typography.Text>
          </Button>
          <div className="flex flex-col">
            <Typography.Text className="text-black">{user?.username || "Guest"}</Typography.Text>
            <Typography.Text className="text-black cursor-pointer" onClick={() => logoutMutation.mutate()}>
              Log out
            </Typography.Text>
          </div>
        </div>
      ) : <div className="flex items-center gap-2">
        <div className="flex justify-center items-center gap-4">
          {/* <Typography.Text className="text-white">{user?.data.fullName}</Typography.Text> */}
          <Button onClick={() => setIsCartModalVisible(!isCartModalVisible)}>
            <Typography.Text className=''><ShoppingCartOutlined /></Typography.Text>
          </Button>
          <Typography.Text className="text-black cursor-pointer" onClick={() => navigate("/login")}>
            Log in
          </Typography.Text>
        </div>
      </div>}
      <Modal
        title="Your Cart"
        open={isCartModalVisible}
        onCancel={() => setIsCartModalVisible(false)}
        footer={[
          <div className='p-8 flex justify-center gap-8' key="cart-summary">
            <Typography.Text >Total items: {totalItems}</Typography.Text>
            <Typography.Text>Total price: {totalPrice}$</Typography.Text>
          </div>,
          <Button key="back" onClick={() => setIsCartModalVisible(false)}>
            Continue Shopping
          </Button>,
          <Button key="submit" type="primary" onClick={() => { navigate("/purchase"); setIsCartModalVisible(false) }} disabled={totalItems === 0}>
            Purchase
          </Button>,
        ]}
      >
        {cartItems.map(item => (
          <div key={item.id} className='flex w-full justify-around items-center p-4'>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item?.imageUrl} className='h-24 object-contain' />}
            >
              <Meta description={item.description}></Meta>
              <div className='flex gap-4'>
                <Select
                  defaultValue={item.size}
                  className='mt-2 w-40'
                  onChange={(value) => updateSize(item.id, value)}
                >
                  <Option value="S">S</Option>
                  <Option value="M">M</Option>
                  <Option value="L">L</Option>
                  <Option value="XL">XL</Option>
                </Select>
                <Select
                  defaultValue={'Design ' + item.design}
                  className='mt-2 w-40'
                  onChange={(value) => updateDesign(item.id, value)}
                >
                  <Option value="1">Design 1</Option>
                  <Option value="2">Design 2</Option>
                  <Option value="3">Design 3</Option>
                </Select>
              </div>
            </Card>
            <div className='p-4 flex flex-col items-center gap-2'>
              <div>
                <Button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 0}>
                  <MinusOutlined />
                </Button>
                <span className='px-2'>{item.quantity}</span>
                <Button onClick={() => updateQuantity(item.id, 1)}>
                  <PlusOutlined />
                </Button>
              </div>
              <div>
                <Button onClick={() => {
                  Modal.confirm({
                    title: 'Are you sure you want to delete this item?',
                    onOk: () => removeFromCart(item.id),
                  })
                }} className='ml-2'>
                  <DeleteOutlined />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Modal>
    </AntHeader>
  )
}
