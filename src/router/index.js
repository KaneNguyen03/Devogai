import { AUTHORITIES } from "../constants"
import LoginLayout from "../layouts/login-layout"
import DefauftLayout from "../layouts/default-layout"
import Login from "../pages/login"
import NotFound from "../pages/not-found"
import HomePage from "../pages/home-page"
import ProductDetail from "../pages/product-detail"

export const ROUTE_PATHS = {
  ROOT: "/",
  LOGIN: "/login",
  HOME: "/home",
  PRODUCT: "/product",
}

export const routes = [
  {
    path: ROUTE_PATHS.ROOT,
    name: "home",
    component: HomePage,
    layout: DefauftLayout,
  },
  {
    path: ROUTE_PATHS.HOME,
    name: "home",
    component: HomePage,
    layout: DefauftLayout,
  },
  {
    path: ROUTE_PATHS.LOGIN,
    name: "Login",
    component: Login,
    layout: LoginLayout,
  },
  {
    path: `${ROUTE_PATHS.PRODUCT}/:id`,
    name: "ProductDetail",
    component: ProductDetail,
    layout: DefauftLayout,
  },
  {
    path: `*`,
    name: "Not found",
    component: NotFound,
    private: true,
    roles: [AUTHORITIES.ADMIN, AUTHORITIES.TRAINER],
  },
]
