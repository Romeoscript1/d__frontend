import React from "react";
import { NavLink } from "react-router-dom";
import { sportsLeagues } from "../data/sportsData";
import logo from "../assets/logo.jpeg";

import SportCard from "./Reusable/SportCard";

const LeagueDashboard = () => {
  const mockData = [
    {
      id: 1,
      value: 20070,
      valueString: "20,070",
      title: "$300K Thu Nba Shot",
      isDifferentColor: true,
    },
    {
      id: 2,
      value: 36775,
      valueString: "36,775",
      title: "$1M NFL Saturday Million",
      isDifferentColor: false,
    },
    {
      id: 3,
      valueString: "14,625",
      value: 14625,
      title: "$1M NFL Sunday Million",
      isDifferentColor: false,
    },
  ];
  return (
    <section className="px-4 mt-10">
      <ul className="flex gap-1 my-6 ">
        {sportsLeagues.map((sport) => (
          <li
            onClick={() => setToggle(!toggle)}
            key={sport.id}
            className={`bg-white text-[blue] w-[180px] text-center h-8 py-1 $`}
          >
            <NavLink to={sport.link}>{sport.sport}</NavLink>
          </li>
        ))}
      </ul>
      <div className="flex justify-between bg-blue-600 px-2 py-3 items-center my-10">
        <article className="flex gap-3 text-black">
          <img src={logo} alt="football" className="h-[50px]" />
          <article className="text-center">
            <h2 className="font-bold">New Game QB Attack</h2>
            <p>
              Score Cashdown Win cash Play Quarterback attack,an all new game on
              faceoff
            </p>
          </article>
        </article>
        <button className="bg-blue-900 p-2 w-[150px] rounded-lg hover:bg-[blue]">
          Play now
        </button>
      </div>
      <h2 className="text-black font-bold text-lg">Contests just For you</h2>
      <section className="shadow-md bg-white rounded-sm px-4 my-6">
        {mockData.map((data) => (
          <SportCard data={data} isDiscover={true} />
        ))}
      </section>
    </section>
  );
};

export default LeagueDashboard;
