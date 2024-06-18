import { Button, Card, Carousel, Select, Typography } from 'antd'
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import TabCollection from '../components/ui/tab-collection'
import { useQuery } from 'react-query'
import productApi from '../services/product'
import { CartContext } from '../context/cart-context'

const { Option } = Select

const ProductDetail = () => {
  const [selectedSizes, setSelectedSizes] = useState('S')
  const [errors, setErrors] = useState({})
  const { id } = useParams()

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext)

  const dataProduct = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProductById(id)
  })
  const currentProduct = dataProduct?.data?.data?.data


  const handleChange = (value) => {
    setSelectedSize(value)
  }

  return (
    <div className=''>
      <div className="flex justify-center bg-gray-100 p-4 gap-40">
        <div className='w-[50%] p-8'>
          <Carousel autoplay autoplaySpeed={2500} arrows infinite={true} className='w-full'>
            <div>
              <h3 className="m-0 h-96 text-white leading-4 text-lg text-center bg-gray-300">1</h3>
            </div>
            <div>
              <h3 className="m-0 h-96 text-white leading-4 text-lg text-center bg-gray-700">2</h3>
            </div>
            <div>
              <h3 className="m-0 h-96 text-white leading-4 text-lg text-center bg-red-500">3</h3>
            </div>
            <div>
              <h3 className="m-0 h-96 text-white leading-4 text-lg text-center bg-black">4</h3>
            </div>
          </Carousel>
        </div>
        <Card className="rounded shadow-lg p-6" bordered={false}>
          <Typography.Title>Collection 1</Typography.Title>
          <Card.Meta
            title={<div className="font-bold text-xl p-6">{currentProduct?.name}</div>}
            description={
              <div>
                <p className="text-gray-900 text-xl">
                  Price: <span className="font-bold">{currentProduct?.price} vnd</span>
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
                {errors[currentProduct?.id] && <Typography.Text>{errors[currentProduct?.id]}</Typography.Text>}
                <Button type="primary" className="mt-4"
                  onClick={() => {
                    if (!selectedSizes) {
                      setErrors(prev => ({ ...prev, [currentProduct?.id]: `Please select a size for ${currentProduct?.name} before adding to cart` }))
                      return
                    }
                    addToCart({ ...currentProduct, size: selectedSizes }); setErrors(prev => ({ ...prev, [currentProduct]: null }))
                  }}
                  block>
                  Add to Cart
                </Button>
              </div>
            }
          />
        </Card>
      </div>
      <div>
        <Typography.Title>Description</Typography.Title>
        <Typography.Paragraph>
          {currentProduct?.description}
        </Typography.Paragraph>
      </div>
      <div>
        <Typography.Title>Relative product</Typography.Title>
        <TabCollection tag={"1"} />
      </div>
    </div>
  )
}

export default ProductDetail
