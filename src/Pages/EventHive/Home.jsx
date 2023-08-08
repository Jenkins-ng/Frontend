import banner from '../../assets/event_images/homebanner.png'
import makeEvent from '../../assets/event_images/make_event.png'
import EventCard from '../../components/eventhive/EventCard'
import { cards, event } from '../../utils/data'
import brands from '../../utils/brands'
import { PiCaretDownBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import CollegeCard from '../../components/eventhive/CollegeCard'
import RenderEvents from '../../components/eventhive/RenderEvents'

const Home = () => {
  return (
    <>
      <header className="w-11/12 mx-auto relative ">
        <h1 className="text-white absolute xl:text-[4rem] top-20 left-1/2 -translate-x-1/2 text-center uppercase max-w-xl">
          Made for those who do
        </h1>
        <img src={banner} alt="" role="banner" className="w-full" />
        {/* search bar */}
        <form className="absolute -bottom-14 w-11/12 left-1/2 -translate-x-1/2 bg-navyBlue rounded-[20px] gap-3 py-2 sm:py-3 px-5 sm:px-10 flex items-center justify-between">
          <div className="grid gap-[4px] sm:w-60">
            <p className="text-backgroundGrey sm:text-lg">Looking for:</p>
            <div className="flex items-center bg-backgroundGrey text-navyBlue px-3 py-2 justify-between cursor-pointer rounded-md">
              <span className="text-sm sm:text-base">Choose event type</span>
              <PiCaretDownBold size={24} />
            </div>
          </div>
          <div className="grid gap-[4px] sm:w-60">
            <p className="text-backgroundGrey sm:text-lg">Location:</p>
            <div className="flex items-center bg-backgroundGrey text-navyBlue px-3 py-2 justify-between cursor-pointer rounded-md">
              <span className="text-sm sm:text-base">Choose location</span>
              <PiCaretDownBold size={24} />
            </div>
          </div>
          <div className="grid gap-[4px] sm:w-60">
            <p className="text-backgroundGrey sm:text-lg">When:</p>
            <div className="flex items-center bg-backgroundGrey text-navyBlue px-3 py-2 justify-between cursor-pointer rounded-md">
              <span className="text-sm sm:text-base">Choose date and time</span>
              <PiCaretDownBold size={24} />
            </div>
          </div>
          <button className="text-backgroundGrey bg-primary p-3 rounded-md">
            <BiSearch size={20} />
          </button>
        </form>
      </header>
      <main>
        {/* upcoming events */}
        <section className="w-10/12 m-auto py-36">
          <div className="sm:flex sm:items-center sm:justify-between grid gap-5">
            <h2>
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center bg-[#efeff1] px-4 py-2 justify-between cursor-pointer sm:w-36 rounded-md text-sm">
                <span>Weekdays</span>
                <PiCaretDownBold size={20} />
              </div>
              <div className="flex items-center bg-[#efeff1] px-4 py-2 justify-between cursor-pointer sm:w-36 rounded-md text-sm">
                <span>Event type</span>
                <PiCaretDownBold size={20} />
              </div>
              <div className="flex items-center bg-[#efeff1] px-4 py-2 justify-between cursor-pointer sm:w-36 rounded-md text-sm">
                <span>Any category</span>
                <PiCaretDownBold size={20} />
              </div>
            </div>
          </div>
          <div className="pt-8 pb-10">
            <RenderEvents />
          </div>
          <Link
            to="/event/all-events"
            className="bg-primary text-white rounded-md py-3 px-7 block mx-auto w-max"
          >
            Load more...
          </Link>
        </section>
        {/* make event */}
        <div className="relative before:absolute before:bg-navyBlue before:-z-10 before:h-[85%] before:w-full before:left-0 before:bottom-0 text-backgroundGrey flex items-center sm:pr-64 sm:pl-20 px-6 py-6 justify-between">
          <img src={makeEvent} alt="" className="w-1/2 sm:w-full" />
          <div className="w-ma">
            <h2 className="pt-5 line-clamp-2">Attend Events Near You</h2>
            <p className="text-sm sm:text-lg pt-4 pb-5">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit.
            </p>
            <Link
              to="/event/create-event"
              className="py-2 px-4 sm:py-4 sm:px-10 text-sm sm:text-lg bg-primary rounded-md"
            >
              Book Events
            </Link>
          </div>
        </div>
        {/* brands */}
        <section className="w-10/12 mx-auto text-center py-20">
          <h2>
            Join these <span className="text-primary">brands</span>
          </h2>
          <p className="max-w-lg mx-auto mt-5">
            We've had the pleasure of working with industry-defining brands.
            These are just some of them.
          </p>
          <div className="py-10">
            <div className="grid grid-cols-3 sm:grid-cols-5 items-center gap-3">
              {brands.map((src, i) => {
                return <img src={src} alt="" key={i} />
              })}
            </div>
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 items-center">
              {brands.slice(5, 9).map((src, i) => {
                return <img src={src} alt="" key={i} />;
              })}
            </div> */}
          </div>
        </section>
        {/* trending colleges */}
        <section className="w-10/12 mx-auto">
          <h2>
            Trending <span className="text-primary">Events</span>
          </h2>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 w-full pt-8 pb-10">
            {cards.map((data, i) => {
              return <CollegeCard key={i} {...data} />
            })}
          </div>
          <Link
            to="/event/college-events"
            className="bg-primary text-white rounded-md py-3 px-7 block mx-auto w-max"
          >
            Load more...
          </Link>
        </section>
        {/* our blogs */}
        <section className="w-10/12 mx-auto pt-20 pb-28">
          <div className="flex ">
            <h2>
              Our <span className="text-primary">Blogs</span>
            </h2>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 w-full py-8">
            {event.slice(2, 5).map((data, i) => {
              return <EventCard key={i} {...data} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
