import React from "react";
import { SwiperSlide } from "swiper/react";
import SliderPerView from "./SliderPerView";

const TestimonialCard = () => {
  const cardInfo = [
    {
      user: "John Doe",
      text: `"Keeps me engaged with sports and the prospect of winning money from this small thing in my pocket that is always with me (iphone); in other words I don't have to go anywhere to win money!"`,
    },
    {
      user: "John kelly",
      text: `"balldraft is very user friendly. Compared to all the other sites I’ve played on when I first started playing, balldraft by far was the easiest to navigate and that’s why I play on FD more than the others."`,
    },
    {
      user: "Ricky jame",
      text: `"I really enjoy the ability to play daily at rates that I choose. I like the variety of options and sports to choose from. If my yearly fantasy teams have tanked this keeps me going." `,
    },
    {
      user: "ivan Rodriguez",
      text: `"Nice mobile and web interface. Fast deposits, withdrawals, and bet settlement."`,
    },
    {
      user: "matt perisic",
      text: `"Keeps me engaged with sports and the prospect of winning money from this small thing in my pocket that is always with me (iphone); in other words I don't have to go anywhere to win money!"`,
    },
    {
      user: "Nelson Romeo",
      text: `"The website layout is the best I have seen. Also the only online sportsbook with same game parlays."`,
    },
  ];
  return (
    <section className="py-[3rem]">
      <h2 className="text-center  text-3xl font-bold text-white uppercase mb-[1rem]">
        REAL FAN REVIEWS
      </h2>
      <SliderPerView>
        {cardInfo.map((data) => {
          return (
            <SwiperSlide key={data.user}>
              <div className="h-[300px] border-[1px]  border-[#1BB96B] p-[1rem]">
                <p>{data.text}</p>
                <i className="text-right block text-white"> ~{data.user}</i>
              </div>
            </SwiperSlide>
          );
        })}
      </SliderPerView>
    </section>
  );
};

export default TestimonialCard;
