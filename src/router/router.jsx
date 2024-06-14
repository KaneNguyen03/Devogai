
import { Route, Routes } from 'react-router-dom'
import PublicRoute from '../auth/public-route'
import PrivateRoute from '../auth/private-route'
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
              route.private ? ( // Check if the route is private
                <PrivateRoute roles={route.roles}>
                  {Layout ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <div>
                      <Page />
                    </div>
                  )}
                </PrivateRoute>
              ) :
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
