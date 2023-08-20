"use client";
"use Strict";

import { Carousel } from "flowbite-react";

export default function SlideAsAnything(props) {
  return (
    <Carousel className="" indicators="false">
      <div className="flex h-full items-center justify-center bg-slate-200 dark:bg-slate-400 dark:text-white object-contain">
        {props.firstCarousel}
      </div>
      <div className="flex h-full items-center justify-center bg-slate-200 dark:bg-gray-400 dark:text-white">
        {props.secondCarousel}
      </div>
      <div className="flex h-full items-center justify-center bg-slate-200 dark:bg-slate-400 dark:text-white">
        {props.thirdCarousel}
      </div>
    </Carousel>
  );
}
