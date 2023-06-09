import React from "react";
import SliderPerView from "./SliderPerView";
import { RxAvatar } from "react-icons/rx";
import SwiperWrapper from "./dashboardComponents/Swiper";

const Welcome = () => {
  return (
    <section className="my-2">
      <div className="flex justify-between shadow-lg bg-white text-black py-4 px-3 items-center">
        <div className="flex gap-2">
          <RxAvatar size={60} />
          <article>
            <h2 className="font-bold text-[20px]">Welcome Temple</h2>
            <p>
              Rookie:{" "}
              <a href="#" className="text-[blue]">
                View Perks
              </a>
            </p>
          </article>
        </div>
        <div className="flex gap-4">
          <article className="border-r-[1px] pr-2 border-black">
            <p className="text-right font-bold">0</p>
            <p>Upcoming</p>
          </article>
          <article className="border-r-[1px] pr-2 border-black">
            <p className="text-right font-bold">0</p>
            <p>Live</p>
          </article>
          <article>
            <h2 className="font-semibold text-[green] text-right">$9.55</h2>
            <p>Balance</p>
          </article>
          <button className="bg-green-500 rounded-lg px-4 text-white">
            {" "}
            Add Funds
          </button>
          <button className="bg-blue-500 rounded-lg px-4 text-white ">
            Refer Friends
          </button>
        </div>
      </div>
      <SliderPerView>
        <SwiperWrapper />
      </SliderPerView>
    </section>
  );
};

export default Welcome;
