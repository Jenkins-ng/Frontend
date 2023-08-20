import React from 'react'
import Header from '../Landing page/Header/Head'
import Foot from '../Landing page/Footer/foot'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className="relative">
      <Header />
      <Outlet />
      <Foot />
    </main>
  )
}

export default Layout
