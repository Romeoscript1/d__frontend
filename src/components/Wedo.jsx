import React from "react";
import world from "../assets/about-left.png";

const Wedo = () => {
  return (
    <div className="flex items-center justify-around py-[4rem]">
      <aside >
        <img src={world} alt="" />
      </aside>
      <aside className="basis-[50%]">
        <p>Balldraft aims to help you increase your profits</p>
        <h1 className="text-6xl my-[2rem]">What We Do For You</h1>
        <p className="text-xl">
          We make it easy to receive tips from tipsters around the world. We
          also keep track of tipsters’ performances so that you know exactly how
          they have done since joining our site.
        </p>
        <p className="text-xl mt-[1rem]">
          In fact, once a match has finished no one can modify a tipster’s
          history on our site which means no tipster can make themselves look
          more successful than they really are. This detailed, accurate
          information allows members to pick a tipster that is right for them
          and their upcoming bet.
        </p>
      </aside>
    </div>
  );
};

export default Wedo;
