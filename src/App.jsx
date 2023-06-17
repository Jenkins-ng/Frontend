import React, { useState } from "react";
import { Route, Routes, json } from "react-router-dom";
import "./App.css";
import Landingpage from "./Pages/Landingpage";
import Ticket from "./Pages/Ticket";
import Signup from "./pages/signup";
import Signin from "./Pages/signin";
import Helpandsupport from "./Pages/H&S";
import Recoveryrender from "./Pages/Recoveryrender";
import Dashboard from "./components/Admin Dashboard/Dashboard";
import Events from "./components/Admin Dashboard/Events";
import Market from "./components/Market/market";
import Tutorial from "./components/Tutorial/Tutorial";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenstring = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenstring);
  return userToken?.token;
}

function App() {
  const token = getToken();
  if (!token) {
    return <Signin setToken={setToken} />;
  }

  return (
    <div>
      <Routes>
        <Route path={"/" || "home"} element={<Landingpage />} />
        <Route path="/event" element={<Ticket />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/help" element={<Helpandsupport />} />
        <Route path="/signin/recover" element={<Recoveryrender />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/event" element={<Events />} />
        <Route path="/shop" element={<Market />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </div>
  );
}

export default App;
