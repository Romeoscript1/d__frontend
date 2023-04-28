import React from "react";
import download from "../assets/download.png";
import apple from "../assets/appstore.png";
import playstore from "../assets/playstore.svg";

const Download = () => {
  return (
    <>
      <section className="bg-white  ">
        <h1 className="text-center text-[black] font-bold text-5xl pt-[4rem]">
          Coming soon
        </h1>
        <div className="flex items-center p-[1rem] justify-around min-h-[70vh]">
          <aside className="basis-[60%]">
            <img src={download} alt="" className="w-4/5" />
          </aside>
          <aside className="text-[black] basis-[25%]">
            <h2 className="text-2xl font-bold mb-[1rem]">
              BET WITH BALLDRAFT SPORTSBOOK AT YOUR CONVENIENCE.
            </h2>
            <p className="flex justify-between gap-3">
              <img src={apple} alt="" className="h-[50px]" />{" "}
              <img src={playstore} alt="" className="h-[50px]" />
            </p>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Download;
