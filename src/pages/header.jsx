

import { Header as AntHeader } from 'antd/es/layout/layout'
import { Avatar, Button, Card, Modal, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

import { ROUTE_PATHS } from '../router'
import { useAuth } from '../hooks/use-auth'
import Navigator from '../components/ui/navigator'
import Logo from '../assets/logo.jpg'
import { DeleteOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useContext, useState } from 'react'
import { CartContext } from '../context/cart-context'
import Meta from 'antd/es/card/Meta'

export default function Header(isLoginPage) {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext)
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
        {/* <img src={Flag} alt="Flag" /> */}

        <Navigator />
      </div>
      {isLoginPage ? (
        <div className="flex items-center gap-2">
          <Button onClick={() => setIsCartModalVisible(!isCartModalVisible)}>
            <Typography.Text className=''><ShoppingCartOutlined /></Typography.Text>
          </Button>
          <div className="flex flex-col">
            {/* <Typography.Text className="text-white">{user?.data.fullName}</Typography.Text> */}
            <Typography.Text className="text-black cursor-pointer" onClick={() => logoutMutation.mutate()}>
              Log out
            </Typography.Text>
          </div>
        </div>
      ) : <div className="flex items-center gap-2">
        <div className="flex flex-col">
          {/* <Typography.Text className="text-white">{user?.data.fullName}</Typography.Text> */}
          <Typography.Text className="text-black cursor-pointer" onClick={() => logoutMutation.mutate()}>
            Log in
          </Typography.Text>
        </div>
      </div>}
      <Modal
        title="Your Cart"
        visible={isCartModalVisible}
        onCancel={() => setIsCartModalVisible(false)}
        footer={[
          <div className='p-8 flex justify-center gap-8'>
            <Typography.Text >Total items: {totalItems}</Typography.Text>
            <Typography.Text>Total price: {totalPrice}$</Typography.Text>
          </div>,
          <Button key="back" onClick={() => { }}>
            Continue Shopping
          </Button>,
          <Button key="submit" type="primary" onClick={() => { }} disabled={totalItems === 0}>
            Purchase
          </Button>,
        ]}
      >
        {cartItems.map(item => (
          <div className='flex w-full justify-around items-center p-4'>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item?.image} />}
            >
              <Meta title={item.name} description="www.instagram.com" />
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
