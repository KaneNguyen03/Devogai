import IdleTimerWrapProvider from '@/context/idle-timer-provider'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Footer from '../pages/footer'
import Header from '../pages/header'
import BackgroundImage from '../assets/background.png'

export default function DefaultLayout({ children }) {
  return (
    <IdleTimerWrapProvider>
      <Layout className="" >
        <Header isLoginPage={false} />
        <Layout style={{ backgroundImage: `url(${BackgroundImage})`, backgroundRepeat: '', backgroundSize: 'cover', objectFit: 'contain' }}>
          <Content className="flex flex-col container mx-auto bg-cover" >{children}</Content>
        </Layout>
        <Footer />
      </Layout>
    </IdleTimerWrapProvider>
  )
}