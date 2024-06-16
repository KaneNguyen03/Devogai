
import IdleTimerWrapProvider from '@/context/idle-timer-provider'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Footer from '../pages/footer'
import HeaderAdmin from '../components/ui/header-admin'
import AdminNavigator from '../components/ui/admin-navigator'

export default function AdminLayout({ children }) {
    return (
        <IdleTimerWrapProvider>
            <Layout className="min-h-screen">
                <HeaderAdmin />
                <Layout>
                    <div className="bg-foreground">
                        <AdminNavigator />
                    </div>
                    <Content className="flex flex-col container mx-auto">{children}</Content>
                </Layout>
                <Footer />
            </Layout>
        </IdleTimerWrapProvider>
    )
}
