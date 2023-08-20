import { Divider } from "@mui/material";
import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import CarouselText from "../../../utils/CarouselText";
import Image from "../../../assets/Team/jybium.jpg";
import "./review.css";

export const Images = () => {
  return (
    <div className="grid justify-between items-center content-center py-20">
      <div className="w-5/6 m-auto text-slate-500 font-medium">
        <p className="mb-3">
          This is the best platform ever. I love how simple everything is and
          how easy the app is to navigate.
        </p>
      </div>
      <div className="flex items-center sm:gap-5 gap-2 content-end w-5/6 m-auto">
        <img
          src={Image}
          alt=""
          className="md:w-16 md:h-16 w-14 h-14 rounded-full"
        />
        <div>
          <p className="font-bold text-slate-400 sm:text-lg text-sm uppercase">
            Mr Aderoboye Adetona
          </p>
          <p className="text-blue-400 font-semibold uppercase text-xs">
            Chairman, NUJ Ondo state.
          </p>
        </div>
      </div>
    </div>
  );
};
const Reviews = () => {
  return (
    <section>
      <h1 className="text-center font-bold text-slate-500 text-xl sm:text-2xl md:text-3xl mt-14 mb-3">
        WHAT PEOPLE ARE SAYING ABOUT US?
      </h1>
      <div className="h-40 max-h-40 sm:h-60 md:max-h-100 my-10 w-11/12 m-auto object-contain">
        <CarouselText
          firstCarousel={<Images />}
          secondCarousel={<Images />}
          thirdCarousel={<Images />}
        />

        {/* <CCarousel
          interval={true}
          indicators
          transition="slide"
          dark
          className="m-auto my-5 w-full"
          touch
        >
          <CCarouselItem className="h-40 max-h-40 sm:h-60 md:max-h-60 my-10 w-11/12 m-auto object-contain">
            <CImage
              className="d-block w-full object-contain"
              src={Image}
              alt="slide 1"
            />
            <CCarouselCaption className="d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem className="h-40 max-h-40 sm:h-60 md:max-h-60 my-10 w-11/12 m-auto object-contain">
            <CImage className="d-block w-100" src={Image} alt="slide 2" />
            <CCarouselCaption className="d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem className="h-40 max-h-40 sm:h-60 md:max-h-60 my-10 w-11/12 m-auto object-contain">
            <CImage className="d-block w-100" src={Image} alt="slide 3" />
            <CCarouselCaption className="d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel> */}
      </div>
    </section>
  );
};

export default Reviews;
