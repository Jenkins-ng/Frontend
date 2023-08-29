import Navlink from './Navlink'

import useAuth from '../../../Hooks/useAuth'

const Navlinks = (props) => {
  const classes = `block xl:flex md:m-0 + ${props.className}`
  const { auth } = useAuth()

  return (
    <nav className={classes}>
      <Navlink label="HOME" to={'/' || 'home'} />
      <Navlink label="SHOP" to="/shop" />
      <Navlink label="TICKETS" to="/event" />
      <Navlink label="JOBS" to="/job" />
      <Navlink label="HELP & SUPPORT" to="/help" />
      <Navlink label="ABOUT US" to="/about-us" />
      {auth.is_admin ? <Navlink label="DASHBOARD" to="/admin/dashboard" /> : ''}
    </nav>
  )
}

export default Navlinks
