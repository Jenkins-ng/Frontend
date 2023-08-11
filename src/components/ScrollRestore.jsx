import { Outlet, ScrollRestoration } from 'react-router-dom'
const ScrollRestore = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  )
}

export default ScrollRestore
