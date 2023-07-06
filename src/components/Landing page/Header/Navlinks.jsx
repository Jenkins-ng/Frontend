import React from 'react'
import Navlink from './Navlink'

const Navlinks = (props) => {
  const classes = `block  md:flex md:m-0 + ${props.className}`

  return (
    <nav className={classes}>
      <Navlink label="HOME" to={'/' || 'home'} />
      <Navlink label="SHOP" to="/shop" />
      <Navlink label="TICKETS" to="/eventhive" />
      <Navlink label="JOBS" to="/job" />
      <Navlink label="TRAININGS" to="/training" />
      <Navlink label="TUTORIALS" to="/tutorial" />
      <Navlink label="HELP & SUPPORT" to="/help" />
      <Navlink label="ABOUT US" to="/about-us" />
    </nav>
  )
}

export default Navlinks
