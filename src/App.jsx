import { createBrowserRouter, RouterProvider } from "react-router-dom";

/////////////////////////////////////////////////////////////

import AuthProvider from "./context/AuthContext";
import Landingpage from "./Pages/Landingpage";
import Signup from "./Pages/Signup";
import Signin from "./Pages/signin";
import Signinform from "./components/Signin/Signinform";
import Helpandsupport from "./Pages/H&S";
import Recoveryrender from "./Pages/Recoveryrender";
import Dashboard from "./components/Admin Dashboard/Dashboard";
import Market from "./components/Market/Market";
import Tutorial from "./components/Tutorial/Tutorial";
import UseToken from "./Store/UseToken";
import Eventdetails from "./components/Ticket/Sections/Eventdetails";

///////////////////////////////////////////////////////

// Event Hive
import EventHomeLayout from "./components/eventhive/HomeLayout";
import EventHome from "./Pages/EventHive/Home";
import EventSignUp from "./Pages/EventHive/SignUp";
import EventLogin from "./Pages/EventHive/Login";
import College from "./Pages/EventHive/College";
import Event from "./Pages/EventHive/Event";
import AllEvents from "./Pages/EventHive/AllEvents";
import ErrorPage from "./Pages/EventHive/ErrorPage";
import CreateEvent from "./Pages/EventHive/CreateEvent";
import CollegeEvents from "./Pages/EventHive/CollegeEvents";
import Register from "./Pages/EventHive/Register";
import EventDashboardLayout from "./components/eventhive/DashboardLayout";
import EventDashboard from "./Pages/EventHive/Dashboard";
import Events from "./Pages/EventHive/Dashboard/Events";
import Messages from "./Pages/EventHive/Dashboard/Messages";
import Profile from "./Pages/EventHive/Dashboard/Profile";

///////////////////////////////////////////////////////////////////
// E-SHOP
import ProductDetails from "./components/Market/Products/ProductDetails";

// loaders
import { loader as eventLoader } from "./Pages/EventHive/Event";

const router = createBrowserRouter([
  { path: "/", element: <Landingpage /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/help", element: <Helpandsupport /> },
  { path: "/signin/recover", element: <Recoveryrender /> },
  { path: "/admin/dashboard", element: <Dashboard /> },
  { path: "/admin/events", element: <Events /> },
  { path: "/shop", element: <Market /> },
  { path: "/tutorial", element: <Tutorial /> },
  {
    path: "/event",
    element: <EventHomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <EventHome /> },
      { path: "/event/event/:id", loader: eventLoader, element: <Event /> },
      { path: "/event/trendinng", element: <College /> },
      { path: "/event/trending-events", element: <CollegeEvents /> },
    ],
  },
  // { path: "/event/signup", element: <Signup /> },
  { path: "/eventhive/signup", element: <EventSignUp /> },
  // { path: "/event/signin", element: <Signin /> },
  { path: "/eventhive/login", element: <EventLogin /> },
  { path: "/event/all-events", element: <AllEvents /> },
  { path: "/event/create-event", element: <CreateEvent /> },
  { path: "/event/register", element: <Register /> },
  {
    path: "/event/dashboard",
    element: <EventDashboardLayout />,
    children: [
      { index: true, element: <EventDashboard /> },
      { path: "/event/dashboard/events", element: <Events /> },
      { path: "/event/dashboard/messages", element: <Messages /> },
      { path: "/event/dashboard/profile", element: <Profile /> },
    ],
  },
  {
    path: "/shop/product/:id",
    element: <ProductDetails />,
    // children: [
    //   { index: true, element: <EventDashboard /> },
    //   { path: '/event/dashboard/events', element: <Events /> },
    //   { path: '/event/dashboard/messages', element: <Messages /> },
    //   { path: '/event/dashboard/profile', element: <Profile /> },
    // ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
