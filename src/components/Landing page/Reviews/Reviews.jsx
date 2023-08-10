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

export const Images = () => {
  return <img src={Image} alt="" />;
};
const Reviews = () => {
  return (
    <section>
      <h1 className="text-center font-bold text-blue-400 text-xl sm:text-2xl md:text-3xl tracking-widest mt-14">
        WHAT PEOPLE ARE SAYING ABOUT US?
      </h1>
      <div className="h-40 max-h-40 sm:h-60 md:max-h-60 my-10 w-11/12 m-auto object-contain">
        {/* <CarouselText
          firstCarousel={<Images />}
          secondCarousel="This is the most beautiful and interesting platform i have ever seen."
          thirdCarousel="This is the most beautiful and interesting platform i have ever seen."
        /> */}

        <CCarousel
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
        </CCarousel>
      </div>
    </section>
  );
};

export default Reviews;
