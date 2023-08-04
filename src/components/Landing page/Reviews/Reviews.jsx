import { Divider } from "@mui/material";
import React from "react";
import CarouselText from "../../../utils/CarouselText";
import Image from "../../../assets/Team/jybium.jpg";


export const Images = () => {
  return <img src={Image} alt="" />
}
const Reviews = () => {
  return (
    <section>
      <h1 className="text-center font-bold text-blue-400 text-xl sm:text-2xl md:text-3xl tracking-widest mt-14">
        WHAT PEOPLE ARE SAYING ABOUT US?
      </h1>
      <div className="h-40 max-h-60 sm:h-40 md:max-h-60 my-10 w-11/12 m-auto">
        <CarouselText
          firstCarousel={<Images/>}
          secondCarousel="This is the most beautiful and interesting platform i have ever seen."
          thirdCarousel="This is the most beautiful and interesting platform i have ever seen."
        />
      </div>
    </section>
  );
};

export default Reviews;
