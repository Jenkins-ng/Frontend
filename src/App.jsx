import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AuthProvider from './context/AuthContext'
import ScrollRestore from './components/ScrollRestore'

import Required from './components/Required'

///////////////////////// GENERAL PAGE //////////////////////

import Landingpage from './Pages/Landingpage'
import Signup from './Pages/Signup'
import Signin from './Pages/signin'
import AboutUs from './components/About us/About'
import Faq from './Pages/Faq'
import Privacy from './Pages/PrivacyPolicy'
import Helpandsupport from './Pages/Help'
import Emailverify from './Pages/RecoveryToken'
import ResetPassword from './Pages/ResetPassword'
import Recoverysuccess from './Pages/Recoverysuccess'
import Recoveryrender from './Pages/Recoveryrender'
import Dashboard from './components/Admin Dashboard/Dashboard'
import Tutorial from './components/Tutorial/Tutorial'
import HomeLayout from './components/Landing page/Layout'

/////////////////////////////// EVENT HIVE  ////////////////////////////////////////

import EventHomeLayout from './components/eventhive/HomeLayout'
import EventHome from './Pages/EventHive/Home'
import EventSignUp from './Pages/EventHive/SignUp'
import EventLogin from './Pages/EventHive/Login'
import College from './Pages/EventHive/College'
import Event from './Pages/EventHive/Event'
import AllEvents from './Pages/EventHive/AllEvents'
import ErrorPage from './Pages/EventHive/ErrorPage'
import CreateEvent from './Pages/EventHive/CreateEvent'
import CollegeEvents from './Pages/EventHive/CollegeEvents'
import Register from './Pages/EventHive/Register'
import EventDashboardLayout from './components/eventhive/DashboardLayout'
import EventDashboard from './Pages/EventHive/Dashboard'
import Events from './Pages/EventHive/Dashboard/Events'
import Messages from './Pages/EventHive/Dashboard/Messages'
import Profile from './Pages/EventHive/Dashboard/Profile'

/////////////////////////////////////////// E-SHOP //////////////////////////////////////////////////

import Market from './components/Market/Market'
import TopProducts from './components/Market/Products/TopProducts'
import ProductDetails from './components/Market/Products/ProductDetails'
import ProductByCategory from './components/Market/Products/ProductByCategory'
import Cart from './components/Market/Cart/Cart'
import Checkout from './components/Market/Checkout Page/Checkout'
import AllProducts from './components/Market/Products/AllProducts'
import Outpage from './components/Market/Checkout/Checkout'
import MarketLayout from './components/Market/Layout'

//////////////////////////////////////// ADMIN DASHBOARD ////////////////////////////////////////////

import Products from './components/Admin Dashboard/Ecommerce/Products/Products'
import Order from './components/Admin Dashboard/Ecommerce/Order/Order'
import OrderDetails from './components/Admin Dashboard/Ecommerce/Order/OrderDetails'
import EditProduct from './components/Admin Dashboard/Ecommerce/Products/EditProduct'
import CreateProduct from './components/Admin Dashboard/Ecommerce/Products/CreateProduct'
import Overview from './components/Admin Dashboard/Ecommerce/Overview'
import AdminProfile from './components/Admin Dashboard/Profile/Profile'
import Inbox from './components/Admin Dashboard/Message'
import Layedout from './components/Admin Dashboard/Ecommerce/Layout'

///////////////////////////////////////// JOBS /////////////////////////////////////////////////
import JobLayout from './components/Jobs/Layout'
import HomePage from './Pages/Jobs/HomePage'
import JobDetails from './Pages/Jobs/JobDetails'
import JobApply from './Pages/Jobs/JobApply'
import AllJobs from './Pages/Jobs/AllJobs'
////////////////////////////////////////// LOADERS ///////////////////////////////////////////////////

import { loader as eventLoader } from './Pages/EventHive/Event'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'

///////////////////////////////////////////  ROUTES //////////////////////////////////////////////////

const router = createBrowserRouter([
  {
    path: '/',
    element: <ScrollRestore />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeLayout />,
        children: [
          { index: true, element: <Landingpage /> },
          { path: '/about-us', element: <AboutUs /> },
          { path: '/faq', element: <Faq /> },
          { path: '/privacy-policy', element: <Privacy /> },
        ],
      },

      { path: '/help', element: <Helpandsupport /> },
      { path: '/signup', element: <Signup /> },
      { path: '/signin', element: <Signin /> },
      { path: '/forget-password', element: <Recoveryrender /> },
      { path: '/recover', element: <Emailverify /> },
      { path: '/reset-password', element: <ResetPassword /> },
      // {path:"/signin/forgot", element:}
      // { path: '/admin/dashboard', element: <Dashboard /> },
      // { path: '/admin/events', element: <Events /> },
      { path: '/tutorial', element: <Tutorial /> },

      //////////////////////////////////////////////// EVENT ROUTES ////////////////////////////////////////////////////
      {
        path: '/event',
        element: <EventHomeLayout />,
        children: [
          { index: true, element: <EventHome /> },
          { path: '/event/event/:id', loader: eventLoader, element: <Event /> },
          { path: '/event/college-events', element: <College /> },
          { path: '/event/trending-events', element: <CollegeEvents /> },
        ],
      },
      // { path: "/event/signup", element: <Signup /> },
      { path: '/eventhive/signup', element: <EventSignUp /> },
      // { path: "/event/signin", element: <Signin /> },
      { path: '/eventhive/login', element: <EventLogin /> },
      { path: '/event/all-events', element: <AllEvents /> },

      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          { path: '/event/create-event', element: <CreateEvent /> },
          { path: '/event/register', element: <Register /> },
          /////////////////////////////////////////// ADMIN DASHBOARD //////////////////////////////////////////////
          {
            path: '/event/dashboard',
            element: <EventDashboardLayout />,
            children: [
              { index: true, element: <EventDashboard /> },
              { path: '/event/dashboard/events', element: <Events /> },
              { path: '/event/dashboard/messages', element: <Messages /> },
              { path: '/event/dashboard/profile', element: <Profile /> },
            ],
          },
          ////////////////////////////// E-SHOP DASHBOARD //////////////////////////////////
          {
            path: '/',
            element: <AdminRoute />,
            children: [
              { path: '/admin/dashboard', element: <Dashboard /> },
              { path: '/admin/event', element: <Event /> },
              { path: '/admin/inbox', element: <Inbox /> },
              { path: '/admin/profile', element: <AdminProfile /> },
              {
                path: '/admin/ecommerce',
                children: [
                  { path: '/admin/ecommerce/overview', element: <Overview /> },
                  {
                    path: '/admin/ecommerce/product',
                    children: [
                      {
                        path: '/admin/ecommerce/product',
                        element: <Products />,
                      },
                      {
                        path: '/admin/ecommerce/product/create',
                        element: <CreateProduct />,
                      },
                      {
                        path: '/admin/ecommerce/product/edit',
                        element: <EditProduct />,
                      },
                    ],
                  },
                  {
                    path: '/admin/ecommerce/order',
                    children: [
                      { path: '/admin/ecommerce/order/', element: <Order /> },
                      {
                        path: '/admin/ecommerce/order-detail',
                        element: <OrderDetails />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      //////////////////////// FOR THE E-SHOP ///////////////////////////
      {
        path: '/shop',
        element: <MarketLayout />,
        children: [
          { index: true, element: <Market /> },

          /////////////////////////// SEARCH ALL PRODUCT /////////////////////////////////
          { path: '/shop/product', element: <AllProducts /> },

          ///////////////////////////////// DETAILS FOR A PARTICULAR PRODUCT //////////////////////////////////
          { path: '/shop/product/:slug', element: <ProductDetails /> },

          //////////////////////////// SEARCH BY CATEGORY //////////////////////////////
          {
            path: '/shop/product/category/:category',
            element: <ProductByCategory />,
          },
        ],
      },
      {
        path: '/shop',
        // element: <ProtectedRoute />,
        element: <MarketLayout />,
        children: [
          //////////////////////////////////////// CART ///////////////////////////////////////
          { path: '/shop/cart', element: <Cart /> },
          /////////////////////////////////////////// CHECKOUT PAGE ///////////////////////////////////
          { path: '/shop/checkout', element: <Checkout /> },
          ///////////////////////////// CHECKOUT PAGE ////////////////////////////////////
          {
            path: '/shop/checkout',
            element: <Outpage />,
          },
        ],
      },
      {
        path: '/job',
        element: <JobLayout />,
        children: [
          /////////////////////////////////// HOME PAGE ////////////////////////////////////////
          { path: '/job', element: <HomePage /> },
          /////////////////////////////////// ALL JOBS ////////////////////////////////////////
          { path: '/jobs', element: <AllJobs /> },
          ///////////////////////////////////// DETAILED JOB ////////////////////////////////////
          { path: '/job/:id', element: <JobDetails /> },
          ////////////////////////////////////// JOB BY CATEGORY ////////////////////////////////
          { path: '/job/:catergory' },
          /////////////////////////////////////// APPLY TO JOB /////////////////////////////////
          { path: '/job/apply', element: <JobApply /> },
        ],
      },
    ],
  },

  // { path: "/shop/orders", element: <Orders /> },
])

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
