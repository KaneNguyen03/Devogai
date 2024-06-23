import { Button, Card, Carousel, Modal, Select, Typography } from 'antd'
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import TabCollection from '../components/ui/tab-collection'
import { useQuery } from 'react-query'
import productApi from '../services/product'
import { CartContext } from '../context/cart-context'
import Loading from '../components/ui/loading'
import SizeGuide from "../assets/pick-size.png"

const { Option } = Select

const ProductDetail = () => {
  const [selectedSizes, setSelectedSizes] = useState('S')
  const [visible, setVisible] = useState(false)
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [errors, setErrors] = useState({})
  const { id } = useParams()

  const { cartItems, addToCart, removeFromCart, updateQuantity } = useContext(CartContext)

  const dataProduct = useQuery({
    queryKey: ['products', id],
    queryFn: () => productApi.getProductById(id)
  })

  const { status, data } = dataProduct
  const currentProduct = data?.data?.data

  if (status === "loading")
    return <Loading />


  return (
    <div className=''>
      <div className="flex justify-center p-4 ">
        <div className='w-[50%] p-8'>
          <img alt="example" src={currentProduct?.imageUrl} className='object-contain' />
        </div>
        <Card className="rounded shadow-lg p-6" bordered={false}>
          <Typography.Title>{currentProduct?.name}</Typography.Title>
          <Card.Meta
            title={<div className="font-bold text-l py-6">{currentProduct?.description}</div>}
            description={
              <div>
                <p className="text-gray-900 text-xl">
                  Price: <span className="font-bold text-red-500">{currentProduct?.price.toLocaleString('de-DE')} VND</span>
                </p>
                <div className="flex items-center mt-4">
                  <p className="text-gray-700 text-sm mr-3">Select size:</p>
                  <Select defaultValue="S" style={{ width: 120 }} onChange={(value) => setSelectedSizes(value)}>
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <Option key={size} value={size}>
                        {size}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="flex items-center mt-4">
                  <p className="text-gray-700 text-sm mr-3">Quantity:</p>
                  <Select defaultValue={1} style={{ width: 120 }} onChange={(value) => setSelectedQuantity(value)}>
                    {[...Array(10).keys()].map((quantity) => (
                      <Option key={quantity + 1} value={quantity + 1}>
                        {quantity + 1}
                      </Option>
                    ))}
                  </Select>
                </div>
                <Button className='my-4 p-2' onClick={() => setVisible(true)}>Size Guide</Button>
                <Modal
                  title="Choose Size"
                  open={visible}
                  onCancel={() => setVisible(false)}
                  onOk={() => setVisible(false)}
                >
                  <div className='flex items-center justify-center p-4'>
                    <img src={SizeGuide} alt="size" style={{ transform: 'scale(2)' }} className='object-contain rounded-2xl' />
                  </div>
                </Modal>
                {errors[currentProduct?.id] && <Typography.Text>{errors[currentProduct?.id]}</Typography.Text>}
                <Button type="primary" className="mt-4"
                  onClick={() => {
                    if (!selectedSizes) {
                      setErrors(prev => ({ ...prev, [currentProduct?.id]: `Please select a size for ${currentProduct?.name} before adding to cart` }))
                      return
                    }
                    addToCart({ ...currentProduct, size: selectedSizes })
                    updateQuantity(currentProduct?.id, selectedQuantity - 1)
                    setErrors(prev => ({ ...prev, [currentProduct]: null }))
                  }}
                  block>
                  Add to Cart
                </Button>
              </div>
            }
          />
        </Card>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Typography.Title style={{ color: '#72543B' }}>OTHER PRODUCTS</Typography.Title>
        <TabCollection tag={currentProduct?.category} />
      </div>
    </div>
  )
}

export default ProductDetail
