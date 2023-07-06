import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Landingpage from './Pages/Landingpage'
import Signup from './pages/signup'
import Signin from './Pages/signin'
import Signinform from './components/Signin/Signinform'
import Helpandsupport from './Pages/H&S'
import Recoveryrender from './Pages/Recoveryrender'
import Dashboard from './components/Admin Dashboard/Dashboard'
import Market from './components/Market/Market'
import Tutorial from './components/Tutorial/Tutorial'
import UseToken from './Store/UseToken'
import Eventdetails from './components/Ticket/Sections/Eventdetails'
// Event Hive
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

const router = createBrowserRouter([
  { path: '/', element: <Landingpage /> },
  { path: '/signup', element: <Signup /> },
  { path: '/signin', element: <Signin /> },
  { path: '/help', element: <Helpandsupport /> },
  { path: '/signin/recover', element: <Recoveryrender /> },
  { path: '/admin/dashboard', element: <Dashboard /> },
  { path: '/admin/events', element: <Events /> },
  { path: '/shop', element: <Market /> },
  { path: '/tutorial', element: <Tutorial /> },
  {
    path: '/eventhive',
    element: <EventHomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <EventHome /> },
      { path: '/eventhive/event', element: <Event /> },
      { path: '/eventhive/college', element: <College /> },
      { path: '/eventhive/college-events', element: <CollegeEvents /> },
    ],
  },
  { path: '/eventhive/signup', element: <EventSignUp /> },
  { path: '/eventhive/login', element: <EventLogin /> },
  { path: '/eventhive/all-events', element: <AllEvents /> },
  { path: '/eventhive/create-event', element: <CreateEvent /> },
  { path: '/eventhive/register', element: <Register /> },
  {
    path: '/eventhive/dashboard',
    element: <EventDashboardLayout />,
    children: [
      { index: true, element: <EventDashboard /> },
      { path: '/eventhive/dashboard/events', element: <Events /> },
      { path: '/eventhive/dashboard/messages', element: <Messages /> },
      { path: '/eventhive/dashboard/profile', element: <Profile /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
