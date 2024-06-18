import ConfigAntdTheme from '@/lib/antd/config-theme'
import Meta from 'antd/es/card/Meta'

import { DefaultButtonStyle } from '../lib/antd/antd-styles'
import { LoadingOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, ConfigProvider, Form, Input, Spin, Typography } from 'antd'
import { useAuth } from '../hooks/use-auth'
import { ERROR_MESSAGES } from '../constants'

export default function Login() {
  const { signInMutation } = useAuth()

  const onSubmitForm = (values) => {
    signInMutation.mutate(values)
  }

  return (
    <div className="">
      <div className="px-10 pt-4 pb-4 mb-4">
        <ConfigProvider>
          <Card
            bordered={false}
            className=" w-[600px] shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 90px 0 rgba(0, 0, 0, 0.1)] px-8 py-12"
          >
            <Meta className="text-center mb-8 text-md" />
            <Typography.Title className="text-center p-2">Dévogai Shop</Typography.Title>
            <Form onFinish={(values) => onSubmitForm(values)} className="px-20 py-4">
              <div className="relative my-4 mt-7 mb-7">
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: ERROR_MESSAGES.EM30 },
                    { min: 3, message: ERROR_MESSAGES.EM31 }
                  ]}
                >
                  <Input size="large" prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
              </div>
              <div className="relative my-4 mt-7 mb-7">
                <Form.Item name="password" rules={[{ required: true, message: ERROR_MESSAGES.EM32 }]}>
                  <Input.Password size="large" prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
              </div>
              <ConfigAntdTheme theme={DefaultButtonStyle}>
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="w-full"
                  disabled={signInMutation.isPending}
                >
                  {signInMutation.isPending ? (
                    <Spin indicator={<LoadingOutlined className="text-white" spin />} />
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </ConfigAntdTheme>
            </Form>
            <Typography.Paragraph className="text-center">
              If you don’t have the account, please contact {' '}
              <a href="" style={{ textDecoration: 'underline' }}>
                admin
              </a>
            </Typography.Paragraph>
          </Card>
        </ConfigProvider>
      </div>
    </div>

  )
}
