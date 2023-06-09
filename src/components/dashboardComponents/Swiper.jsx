import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import footballer from "../../assets/dashboard/istock2.jpeg";
import footballer2 from "../../assets/dashboard/istockphoto-1316659333-612x612.jpeg";
import footballer3 from "../../assets/dashboard/footballer.avif";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function SwiperWrapper() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper pt-1"
        style={{ width: "100%" }}
      >
        <SwiperSlide style={{ width: "100%" }}>
          <div className="h-[50vh]">
            <img
              src={footballer}
              alt=""
              className="w-full  object-cover h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%" }}>
          <div className="h-[50vh] ">
            <img
              src={footballer2}
              alt=""
              className="w-full  object-cover h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%" }}>
          <div className="h-[50vh] ">
            <img
              src={footballer3}
              alt=""
              className="w-full  object-cover h-full"
            />
          </div>
        </SwiperSlide>
        {/* Rest of the slides */}
      </Swiper>
    </>
  );
}
