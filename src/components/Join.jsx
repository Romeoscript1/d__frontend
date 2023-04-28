import React from "react";
import phone from "../assets/phone.png";


const Join = () => {
  return (
    <div className="flex justify-around items-center p-[3rem] ">
      <aside className="h-[370px] w-[500px] bg-[green] rounded-md p-[2rem] flex flex-col justify-end bg-[url(/src/assets/football_img.jpeg)] bg-no-repeat bg-cover bg-center">
        <div>
          <h2 className="font-bold text-xl">Sport</h2>
          <p className="mb-[1rem] font-bold">
            Dive in to our wide range of in-house games, live casino and slots
            to experience a thrilling casino adventure.
          </p>
          <button className="w-[48%] rounded-md p-[0.5rem] bg-[#1BB96B] mr-[0.5rem]">SPORT</button>
          <button className="bg-[magenta] w-[48%] p-[0.5rem] rounded-md">JOIN</button>
        </div>
      </aside>
      <aside>
        <img src={phone} alt="" />
      </aside>
    </div>
  );
};

export default Join;
