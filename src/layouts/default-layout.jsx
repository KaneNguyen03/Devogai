
import Navigator from '../components/ui/navigator'
import IdleTimerWrapProvider from '@/context/idle-timer-provider'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Header from '../pages/header'
import Footer from '../pages/footer'

export default function DefaultLayout({ children }) {
  return (
    <IdleTimerWrapProvider>
      <Layout className="">
        <Header isLoginPage={false} />
        <Layout>
          <Content className="flex flex-col">{children}</Content>
        </Layout>
        <Footer />
      </Layout>
    </IdleTimerWrapProvider>
  )
}
