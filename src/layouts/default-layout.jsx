
import IdleTimerWrapProvider from '@/context/idle-timer-provider'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Footer from '../pages/footer'
import Header from '../pages/header'

export default function DefaultLayout({ children }) {
  return (
    <IdleTimerWrapProvider>
      <Layout className="">
        <Header isLoginPage={false} />
        <Layout>
          <Content className="flex flex-col container mx-auto">{children}</Content>
        </Layout>
        <Footer />
      </Layout>
    </IdleTimerWrapProvider>
  )
}
