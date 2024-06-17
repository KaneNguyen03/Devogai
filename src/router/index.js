import { AUTHORITIES } from "../constants"
import AdminLayout from "../layouts/admin-layout"
import DefauftLayout from "../layouts/default-layout"
import LoginLayout from "../layouts/login-layout"
import Admin from "../pages/admin"
import HomePage from "../pages/home-page"
import Login from "../pages/login"
import NotFound from "../pages/not-found"
import ProductDetail from "../pages/product-detail"
import Purchase from "../pages/purchase"
import SuccessPage from "../pages/success-page"
import UserManagement from "../pages/user-management"
import ProductManagement from "../pages/product-management"
import OrderManagement from "../pages/order-management"

export const ROUTE_PATHS = {
  ROOT: "/",
  LOGIN: "/login",
  HOME: "/home",
  PRODUCT: "/product",
  PURCHASE: "/purchase",
  ADMIN: "/admin",
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
    path: ROUTE_PATHS.PURCHASE,
    name: "purchase",
    component: Purchase,
    layout: DefauftLayout,
  },
  {
    path: `${ROUTE_PATHS.PURCHASE}/success`,
    name: "success",
    component: SuccessPage,
    layout: DefauftLayout,
  },
  {
    path: ROUTE_PATHS.ADMIN,
    name: "admin",
    component: Admin,
    private: true,
    roles: ["admin"],
    layout: AdminLayout,
  },
  {
    path: `${ROUTE_PATHS.ADMIN}/user`,
    name: "user",
    component: UserManagement,
    private: true,
    roles: ["admin"],
    layout: AdminLayout,
  },
  {
    path: `${ROUTE_PATHS.ADMIN}/product`,
    name: "product",
    component: ProductManagement,
    private: true,
    roles: ["admin"],
    layout: AdminLayout,
  },
  {
    path: `${ROUTE_PATHS.ADMIN}/order`,
    name: "order",
    component: OrderManagement,
    private: true,
    roles: ["admin"],
    layout: AdminLayout,
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
