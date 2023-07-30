"use client";

import { Carousel } from "flowbite-react";

export default function SlideAsAnything(props) {
  return (
    <Carousel>
      <div className="flex h-full items-center justify-center bg-slate-400 dark:bg-slate-400 dark:text-white ">
        {props.firstCarousel}
      </div>
      <div className="flex h-full items-center justify-center bg-slate-400 dark:bg-gray-400 dark:text-white">
        {props.secondCarousel}
      </div>
      <div className="flex h-full items-center justify-center bg-slate-400 dark:bg-slate-400 dark:text-white">
        {props.thirdCarousel}
      </div>
    </Carousel>
  );
}
