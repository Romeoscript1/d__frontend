import React from "react";
import { NavLink } from "react-router-dom";
import { BsToggleOff } from "react-icons/bs";
import SportCard from "./Reusable/SportCard";
import { entries, mockDataEpl } from "../data/sportsData";

const EplDashboard = () => {
  return (
    <section className="mx-4 ">
      <ul className="flex shadow-xl gap-2 bg-white p-4 justify-evenly">
        {entries.map((link) => (
          <li
            key={link.id}
            className="text-blue-600 font-semibold text-lg focus:bg-[blue] "
          >
            <NavLink to={link.link}>{link.name} </NavLink>
          </li>
        ))}
      </ul>
      <div className="unequalGrid">
        <aside className="text-black my-4">
          <div className="flex justify-between gap-6 text-xs mt-2">
            <button className="bg-green-600 text-white flex-grow rounded-sm">
              Create Contest
            </button>
            <article>
              <h2 className="font-bold">19m 5s left</h2>
              <p>CONTEST STARTS</p>
            </article>
          </div>
          <form className="shadow-md bg-white my-6 p-2">
            <h2 className="font-bold mb-2">Game Styles</h2>
            <h4 className="pl-4 font-bold text-sm">Single Game</h4>
            <label className="flex gap-2">
              <input type="radio" name="game" id="" />
              Pick 5 players from a single game
            </label>
          </form>
          <form className="shadow-md bg-white my-6 pt-2 rounded-sm">
            <h2 className="px-2 my-2">Slates</h2>
            <label htmlFor="" className="px-2 my-2 flex gap-2">
              <input type="radio" name="" id="" />
              3:00 PM ET
            </label>
            <select
              name=""
              id=""
              defaultValue={"3:00 PM ET Schedule"}
              className="block bg-blue-200 w-full outline-none"
            >
              <option value="3pm"> 3:00 PM ET Schedule</option>
              <option value="4pm"> 4:00 PM ET Schedule</option>
              <option value="5pm"> 5:00 PM ET Schedule</option>
            </select>
          </form>
        </aside>
        <div>
          <form className="unequalGrid2 my-4">
            <input
              type="text"
              className="h-8 px-2 border-2 outline-none rounded-sm text-black "
              placeholder=" Search EPL, Tournaments Starting at 3pm CT"
            />
            <label className="flex items-center font-semibold text-slate-600 gap-1 text-xs">
              Sort Contests By:
              <select name="" id="" className="text-blue-500">
                <option value="Top" selected>
                  Top
                </option>
                <option value="Bottom">Bottom</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
              </select>
            </label>
            <label className="flex items-center font-semibold text-slate-600 gap-1">
              Bulk Entry:
              <BsToggleOff size={50} color="grey" />
            </label>
          </form>
          <article className="shadow-xl bg-white text-blue-700 font-bold text-center py-2">
            <h2>Play FREE Pick em and Fantasy Games</h2>
          </article>
          <section className="shadow-md bg-white rounded-sm px-4 my-6">
            {mockDataEpl.map((data) => (
              <SportCard data={data} isDiscover={false} />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default EplDashboard;
