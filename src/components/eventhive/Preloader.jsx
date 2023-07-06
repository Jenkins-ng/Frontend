import React from 'react'
import PurpleText from './PurpleText'

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#ffffffcc] flex justify-center items-center">
      <h1 className="typing-text">
        <PurpleText text="Event" /> Hive
      </h1>
    </div>
  )
}

export default Preloader
