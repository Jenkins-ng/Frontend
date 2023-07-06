import React from 'react'
import { Link } from 'react-router-dom'
import PurpleText from '../../../components/eventhive/PurpleText'
import DashboardEventCard from '../../../components/eventhive/DashboardEventCard'
import banner from '../../../assets/event_images/dashboard/hero.png'

const Events = () => {
  return (
    <>
      {/* hero */}
      <div className="relative">
        <img
          src={banner}
          alt=""
          role="banner"
          className="rounded-lg h-[21rem] w-full object-cover"
        />
        <div className="absolute h-full w-96 top-10 left-12 text-white">
          <h2 className="mb-2">Discover and experience extraordinary Events</h2>
          <p>
            Enter in the world of events. Discover now the latest Events or
            start creating your own!
          </p>
          <div className="pt-10 flex-4">
            <Link className="py-3 px-7 rounded-xl bg-white text-black font-medium">
              Discover
            </Link>
            <Link className="py-2 px-5 font-medium">Watch Video</Link>
          </div>
        </div>
      </div>
      <section className="py-12">
        <h2 className="text-[32px] px-5">
          <PurpleText text="Event" /> Participated
        </h2>
        <div className="grid grid-cols-3 gap-8 py-10">
          <DashboardEventCard />
          <DashboardEventCard />
          <DashboardEventCard />
        </div>
      </section>
      <section>
        <div className="flex justify-between px-5">
          <h2 className="text-[32px]">Trending Events</h2>
          <div className="flex gap-9">
            <a href="" className="text-primary hover:text-navyBlue">
              Technical
            </a>
            <a href="" className="text-primary hover:text-navyBlue">
              Music
            </a>
            <a href="" className="text-primary hover:text-navyBlue">
              Cultural
            </a>
            <a href="" className="text-primary hover:text-navyBlue">
              Sports
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 py-10">
          <DashboardEventCard />
          <DashboardEventCard />
          <DashboardEventCard />
        </div>
      </section>
    </>
  )
}

export default Events
