import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({ id, img, text, date, type }) => {
  return (
    <Link
      to={`../event/event/${id}`}
      className="bg-white p-5 rounded-lg relative shadow-xl hover:scale-[1.03] duration-300"
    >
      <span className="select-none bg-white px-2 py-1 rounded-[5px] text-primary text-sm absolute top-8 left-8">
        FREE
      </span>
      <img src={img} alt="" className="w-full" />
      <p className="w-full mt-2">{text}</p>
      <p className="text-primary text-sm mt-4 mb-5">{date}</p>
      <p className="text-xs text-grey600">{type}</p>
    </Link>
  )
}

export default Event
