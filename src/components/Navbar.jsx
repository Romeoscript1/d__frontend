import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { GrAnnounce } from "react-icons/gr";
import { FaQuestion, FaClock } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RxAvatar } from "react-icons/rx";

function Navbar() {
  //Links for the first navbar
  const navLinks = [
    {
      id: 1,
      name: "FANTASY",
      link: "Fantasy",
    },
    {
      id: 20,
      name: "SPORTSBOOK",
      link: "Sportsbook",
    },
    {
      id: 3,
      name: "HORSE_RACING",
      link: "Horse_Racing",
    },
    {
      id: 4,
      name: "FACEOFF",
      link: "Faceoff",
    },
  ];
  //Links for the second navbar
  const secondaryLinks = [
    {
      id: 1,
      name: "Lobby",
      link: "Lobby",
    },
    {
      id: 2,
      name: "Upcoming",
      link: "Upcoming",
    },
    {
      id: 3,
      name: "Live",
      link: "Live",
    },
    {
      id: 4,
      name: "History",
      link: "History",
    },
    {
      id: 5,
      name: "Friends",
      link: "Friends",
    },
    {
      id: 6,
      name: "Research",
      link: "Research",
    },
  ];
  //Icons for the second navbar
  const icons = [
    {
      id: 1,
      icon: <FaClock />,
    },
    {
      id: 2,
      icon: <FaQuestion />,
    },
    {
      id: 3,
      icon: <GrAnnounce />,
    },
    {
      id: 4,
      icon: <RxAvatar />,
    },
  ];

  return (
    <header className="sticky top-0">
      <nav className="text gap-1 bg-blue-900 px-4 h-10 py-2">
        <ul className="flex gap-3">
          {navLinks.map((link) => (
            <li>
              <NavLink to={link.link} key={link.id}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="bg-blue-600 h-[80px] flex  justify-between items-center px-4">
        <ul className="flex  gap-3 px-4 text-[18px]">
          <img src={logo} alt="logo" className="w-full h-10 object-cover" />
          {secondaryLinks.map((link) => (
            <li>
              <NavLink to={link.link} key={link.id}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <article>
            <h3>Get Cash</h3>
            <p>08108079518</p>
          </article>
          <IconContext.Provider
            value={{ className: "text-[20px] text-white  hover:text-black" }}
          >
            {icons.map((icon) => (
              <button
                key={icon.id}
                className="border rounded-[50%] px-2 hover:bg-white"
              >
                {icon.icon}
              </button>
            ))}
          </IconContext.Provider>
          <article>
            <h4 className="font-bold">$9.55</h4>
            <button type="button">Balance</button>
          </article>
          <button className="bg-green-500 rounded-lg px-1"> Add Funds</button>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
