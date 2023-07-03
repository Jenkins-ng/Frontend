import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landingpage from "./Pages/Landingpage";
import Ticket from "./Pages/Ticket";
import Signup from "./pages/signup";
import Signin from "./Pages/signin";
import Signinform from "./components/Signin/Signinform";
import Helpandsupport from "./Pages/H&S";
import Recoveryrender from "./Pages/Recoveryrender";
import Dashboard from "./components/Admin Dashboard/Dashboard";
import Events from "./components/Admin Dashboard/Event/Events";
import Market from "./components/Market/Market";
import Tutorial from "./components/Tutorial/Tutorial";
// import DetailedEvents from "./components/Ticket/Sections/DetailedEvents";
import UseToken from "./Store/UseToken";
// import Event from "./components/Ticket/Sections/Event";
import Eventdetails from "./components/Ticket/Sections/Eventdetails";

function App() {
  return (
    <Routes>
      <Route path={"/" || "home"} element={<Landingpage />} exact />
      <Route path="/events" element={<Ticket />} exact />
      <Route path="/events/:eventid" element={<Eventdetails />} exact />
      <Route path="/signup" element={<Signup />} exact />
      <Route path="/signin" element={<Signin />} exact />
      <Route path="/help" element={<Helpandsupport />} exact />
      <Route path="/signin/recover" element={<Recoveryrender />} exact />
      <Route path="/admin/dashboard" element={<Dashboard />} exact />
      <Route path="/admin/events" element={<Events />} exact />
      <Route path="/shop" element={<Market />} exact />
      <Route path="/tutorial" element={<Tutorial />} exact />
    </Routes>
  );
}

export default App;
