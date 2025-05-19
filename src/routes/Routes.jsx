import { Navigate } from "react-router-dom";
import { lazy } from "react";
import AppLayout from "../ui/AppLayout";
import ProtectedRoute from "../features/authentication/ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const Categories = lazy(() => import("../pages/Categories"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Brands = lazy(() => import("../pages/Brands"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Products = lazy(() => import("../pages/Products"));
const Cart = lazy(() => import("../pages/Cart"));
const WishList = lazy(() => import("../pages/WishList"));
const AllOrders = lazy(() => import("../pages/AllOrders"));
const CashOrderDone = lazy(() => import("../pages/CashOrderDone"));
const CheckOut = lazy(() => import("../pages/CheckOut"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ProductDetails = lazy(() => import("../pages/ProductDetail"));

const routes = [
  {
    path: "/",
    // errorElement: <NotFound />,

    element: <AppLayout />,
    children: [
      { path: "/", element: <Navigate to="home" /> },
      { path: "home", element: <Home /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "categories", element: <Categories /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "brands", element: <Brands /> },
      { path: "productdetails/:id", element: <ProductDetails /> },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      { path: "products", element: <Products /> },
      {
        path: "wishList",
        element: (
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        ),
      },
      {
        path: "allorders",
        element: (
          <ProtectedRoute>
            <AllOrders />
          </ProtectedRoute>
        ),
      },
      {
        path: "cashorderdone",
        element: (
          <ProtectedRoute>
            <CashOrderDone />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  Error,
];

export default routes;
