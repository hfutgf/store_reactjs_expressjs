import Admin from "./src/pages/Admin";
import Auth from "./src/pages/Auth";
import Basket from "./src/pages/Basket";
import Device from "./src/pages/Device";
import Shop from "./src/pages/Shop";
import {
  AMDIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/constants";

export const authRoutes = [
  {
    path: AMDIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: Device,
  },
];
