import { useRef, useState } from 'react'
import Navbar from '../../components/eventhive/Navbar'
import ScrollToTop from '../../components/eventhive/ScrollToTop'

const CreateEvent = () => {
  const [title, setTitle] = useState('')
  const [venue, setVenue] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [desc, setDesc] = useState('')

  const submitRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="w-7/12 max-w-3xl mx-auto py-10">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Create Event</h2>
          <div className="grid gap-8 pt-8 pb-20">
            {/* title */}
            <div className="col-span-2">
              <label htmlFor="title">Enter Title</label>
              <input
                type="text"
                id="title"
                autoComplete="off"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mt-1 p-[10px] rounded-md"
                placeholder="Enter your title"
              />
            </div>
            {/* venue */}
            <div className="col-span-2">
              <label htmlFor="venue">Enter Venue</label>
              <input
                type="text"
                id="venue"
                autoComplete="off"
                onChange={(e) => setVenue(e.target.value)}
                className="w-full mt-1 p-[10px] rounded-md"
                placeholder="Enter your venue"
              />
            </div>
            {/* start time */}
            <div className="col-span-1">
              <label htmlFor="start-time">Start time</label>
              <input
                type="time"
                id="start-time"
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full mt-1 p-[10px] rounded-md"
              />
            </div>
            {/* end time */}
            <div className="col-span-1">
              <label htmlFor="end-time">End Time</label>
              <input
                type="time"
                id="end-time"
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full mt-1 p-[10px] rounded-md"
              />
            </div>
            {/* start date */}
            <div className="col-span-1">
              <label htmlFor="start-date">Start date</label>
              <input
                type="date"
                id="start-date"
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full mt-1 p-[10px] rounded-md"
              />
            </div>
            {/* end date */}
            <div className="col-span-1">
              <label htmlFor="end-date">End Date</label>
              <input
                type="date"
                id="end-date"
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full mt-1 p-[10px] rounded-md"
              />
            </div>
          </div>
          <h2 className="text-center">Event description</h2>
          <div className="grid gap-8 py-8">
            {/* image */}
            <div>
              <label htmlFor="image">Event Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="block bg-backgroundGrey mt-1"
              />
            </div>
            {/* description */}
            <div>
              <label htmlFor="desc">Event Description</label>
              <textarea
                id="desc"
                className="resize-none w-full h-52 m-1 py-[10px] px-3"
                placeholder="describe your event"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button
            disabled
            ref={submitRef}
            className="w-full bg-primary text-center disabled:bg-opacity-20 text-white py-3"
          >
            Create Event
          </button>
        </form>
      </main>
    </>
  )
}

export default CreateEvent
