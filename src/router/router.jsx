import { Route, Routes } from 'react-router-dom'
import PublicRoute from '../auth/public-route'
import { routes } from '.'

export default function Router() {
  return (
    <Routes>
      {routes.map((route) => {
        const Page = route.component
        const Layout = route.layout

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PublicRoute>
                <Layout>
                  <Page />
                </Layout>
              </PublicRoute>
            }
          />
        )
      })}
    </Routes>
  )
}