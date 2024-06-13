import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Header from '../pages/header'
import Footer from '../pages/footer'
import IdleTimerWrapProvider from '../context/idle-timer-provider'

export default function LoginLayout({ children }) {
  return (
    <IdleTimerWrapProvider>
      <Layout className="min-h-screen bg-gray-100">
        <Header isLoginPage={true} />
        <Layout className="mt-1">
          <Content className="flex flex-col justify-center h-full content-center items-center">{children}</Content>
        </Layout>
        <Footer />
      </Layout>
    </IdleTimerWrapProvider>
  )
}
