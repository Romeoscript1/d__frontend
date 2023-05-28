import React from "react";
import Navbar from "./Navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Chelsea from "/src/assets/dashboard/FC_Chelsea_logo 1.png";
import Leicester from "/src/assets/dashboard/FC_Leicester_City_Logo 1.png";
import Epl_Logo from "/src/assets/dashboard/Epl Logo.png";
import mbappe from "/src/assets/dashboard/mbappe.png";
import Epl_Icon from "/src/assets/dashboard/Premier_league_logo_PNG4.png";
import Laliga_Icon from "/src/assets/dashboard/laliga_109475.png";
import Bundesliga_Icon from "/src/assets/dashboard/German_Bundesliga_logo_PNG2.png";
import italian_Icon from "/src/assets/dashboard/italian_Serie_A_logo_PNG2.png";
import slider from "/src/assets/dashboard/Slider.png";
import image_one from "/src/assets/dashboard/Mbappe_Neymar.webp";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-x-6 mt-5">
        <section className=" bg-[#000000] shadow-2xl p-2">
          <div className="flex items-center justify-between">
            <h3 className="font-[roboto]">Live Matches</h3>
            <div className="flex items-center">
              <ArrowBackIcon fontSize="20" />
              <ArrowForwardIcon className="text-[#F14B51]" fontSize="20" />
            </div>
          </div>
          <div className="border-[#F14B51] border-[1px] p-2 mt-5 rounded-md">
            <div className="flex items-center gap-x-6">
              <div className="flex flex-col items-center font-[lato]">
                <img className="w-6" src={Chelsea} alt="" />
                <p>Chelsea</p>
              </div>
              <div className="flex items-center flex-col">
                <h1 className=" opacity-50">Premier League</h1>
                <p className="font-extrabold">1:2</p>
              </div>
              <div className="flex flex-col items-center font-[lato]">
                <img className="w-6" src={Leicester} alt="" />
                <p>Leciester</p>
              </div>
            </div>
            <div className="flex items-center gap-x-5 text-[#000] font-[lato] font-bold">
              <button className="bg-[#fff] w-[80px] rounded-md">1.8</button>
              <button className="bg-[#fff] w-[80px] rounded-md">2.1</button>
              <button className="bg-[#fff] w-[80px] rounded-md">1.3</button>
            </div>
          </div>
          <div className=" mt-5">
            <div className=" flex">
              <SportsSoccerIcon />
              <p>Football</p>
              <KeyboardArrowUpIcon className="ml-[auto]" />
            </div>
            <div className="p-4 ml-5">
              <div className="flex gap-2 ">
                <img className="w-[25px]" src={Epl_Icon} alt="" />
                <p>Premier League</p>
              </div>
              <div className="flex gap-2 mt-3">
                <img className="w-[25px]" src={Laliga_Icon} alt="" />
                <p>Laliga</p>
              </div>
              <div className="flex gap-2 mt-3">
                <img className="w-[25px]" src={Bundesliga_Icon} alt="" />
                <p>Bundesliga</p>
              </div>
              <div className="flex gap-2 mt-3">
                <img className="w-[25px] h-[20px]" src={italian_Icon} alt="" />
                <p>Serie A</p>
              </div>
            </div>
            <div className="flex mt-4">
              <SportsBasketballIcon />
              <p>Basketball</p>
              <KeyboardArrowDownIcon className=" ml-auto" />
            </div>
            <div className="flex mt-4">
              <SportsVolleyballIcon />
              <p>VolleyBall</p>
              <KeyboardArrowDownIcon className="ml-auto" />
            </div>
            <div className="flex mt-4">
              <SportsBaseballIcon />
              <p>BaseBall</p>
              <KeyboardArrowDownIcon className="ml-auto" />
            </div>
            <h3 className=" text-[#949494] mt-6">Other Teams</h3>
            <div className="flex gap-2 font-[lato] p-4">
             <FavoriteBorderIcon/>
             <p>Favourite</p>
            </div>
            <div className="flex gap-2 font-[lato] p-4">
               <SupportAgentIcon/>
               <p>Support</p>
            </div>
          </div>
        </section>
        <section>
          <div className="w-[680px] h-[225px] bg-[#FF5E19] rounded-xl flex items-center">
            <div>
              <img className="w-[250px] h-[x]" src={Epl_Logo} alt="" />
            </div>
            <div className="text-[#fff]">
              <h1 className=" font-bold text-[1.125rem] font-[lato] mb-2">
                Real Madrid Vs Barcelona
              </h1>
              <div className="flex font-sans mb-2">
                <CalendarMonthIcon />
                <p>10 June 2023</p>
              </div>
              <div className="flex font-sans">
                <LocationOnIcon />
                <p>Santiago Bernabue</p>
              </div>
            </div>
            <img className="  h-[200px]" src={mbappe} alt="" />
          </div>
          <div>
            <h1 className="font-[roboto] font-extrabold p-4">Today Matches</h1>
            <div className="flex items-center gap-x-8 mt-6 bg-black hover:bg-white hover:text-black rouded-md p-4">
              <div className="flex gap-2">
                <img className="w-[25px]" src={Chelsea} alt="" />
                <p>Chelsea</p>
              </div>
              <p>Vs</p>
              <div className="flex gap-2">
                <img className="w-[25px]" src={Leicester} alt="" />
                <p>Leicester</p>
              </div>
              <div className="flex">
                <AccessTimeIcon />
                <p>2:00PM</p>
              </div>
              <div className="flex">
                <LocationOnIcon />
                <p>England</p>
              </div>
              <div className="flex items-center gap-2">
                <p>View Details</p>
                <TrendingFlatIcon className="text-[#F14B51]" />
              </div>
            </div>
            <div className="flex items-center gap-x-8 mt-6  bg-black hover:bg-white hover:text-black rounded-md p-4">
              <div className="flex gap-2">
                <img className="w-[25px]" src={Chelsea} alt="" />
                <p>Chelsea</p>
              </div>
              <p>Vs</p>
              <div className="flex gap-2">
                <img className="w-[25px]" src={Leicester} alt="" />
                <p>Leicester</p>
              </div>
              <div className="flex">
                <AccessTimeIcon />
                <p>2:00PM</p>
              </div>
              <div className="flex">
                <LocationOnIcon />
                <p>England</p>
              </div>
              <div className="flex items-center gap-2">
                <p>View Details</p>
                <TrendingFlatIcon className="text-[#F14B51]" />
              </div>
            </div>
            <div className="flex items-center gap-x-8 mt-6  bg-black hover:bg-white hover:text-black rounded-md p-4">
              <div className="flex gap-2">
                <img className="w-[25px]" src={Chelsea} alt="" />
                <p>Chelsea</p>
              </div>
              <p>Vs</p>
              <div className="flex gap-2">
                <img className="w-[25px]" src={Leicester} alt="" />
                <p>Leicester</p>
              </div>
              <div className="flex">
                <AccessTimeIcon />
                <p>2:00PM</p>
              </div>
              <div className="flex">
                <LocationOnIcon />
                <p>England</p>
              </div>
              <div className="flex items-center gap-2">
                <p>View Details</p>
                <TrendingFlatIcon className="text-[#F14B51]" />
              </div>
            </div>
            <div className="flex items-center gap-x-8 mt-6 bg-black hover:bg-white hover:text-black rouded-md p-4">
              <div className="flex gap-2">
                <img className="w-[25px]" src={Chelsea} alt="" />
                <p>Chelsea</p>
              </div>
              <p>Vs</p>
              <div className="flex gap-2">
                <img className="w-[25px]" src={Leicester} alt="" />
                <p>Leicester</p>
              </div>
              <div className="flex">
                <AccessTimeIcon />
                <p>2:00PM</p>
              </div>
              <div className="flex">
                <LocationOnIcon />
                <p>England</p>
              </div>
              <div className="flex items-center gap-2">
                <p>View Details</p>
                <TrendingFlatIcon className="text-[#F14B51]" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#000] shadow-2xl p-2">
          <div className="flex items-center justify-between">
            <h3 className="font-[roboto]">Trendings Now</h3>
            <div className="flex items-center">
              <ArrowBackIcon fontSize="20" />
              <ArrowForwardIcon className="text-[#F14B51]" fontSize="20" />
            </div>
          </div>
          <div className="border-[#F14B51] border-[1px] p-2 rounded-md mt-5">
            <div className="flex items-center gap-x-6">
              <div className="flex flex-col items-center font-[lato]">
                <img className="w-6" src={Chelsea} alt="" />
                <p>Chelsea</p>
              </div>
              <div className="flex items-center flex-col">
                <h1 className=" opacity-50">Premier League</h1>
                <p className=" font-extrabold">1:2</p>
              </div>
              <div className="flex flex-col items-center font-[lato]">
                <img className="w-6" src={Leicester} alt="" />
                <p>Leciester</p>
              </div>
            </div>
            <div className="flex items-center gap-x-5 text-[#000] font-[lato] font-bold">
              <button className="bg-[#fff] w-[80px] rounded-md">1.8</button>
              <button className="bg-[#fff] w-[80px] rounded-md">2.1</button>
              <button className="bg-[#fff] w-[80px] rounded-md">1.3</button>
            </div>
          </div>
          <img src={slider} alt="" />
          <h1 className="p-2 font-[roboto]">Latest Article</h1>
          <div className="p-2 flex flex-col gap-y-5">
            <div className="flex gap-2">
              <img className="w-[120px]" src={image_one} alt="" />
              <div>
                <h3 className="text-[0.8rem]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, ex!
                </h3>
                <p className="text-[0.8rem] font-semibold text-gray-800">
                  27 June 2023 12:41 AM
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <img className="w-[120px]" src={image_one} alt="" />
              <div>
                <h3 className="text-[0.8rem]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, ex!
                </h3>
                <p className="text-[0.8rem] font-semibold text-gray-800">
                  27 June 2023 12:41 AM
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <img className="w-[120px]" src={image_one} alt="" />
              <div>
                <h3 className="text-[0.8rem]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, ex!
                </h3>
                <p className="text-[0.8rem] font-semibold text-gray-800">
                  27 June 2023 12:41 AM
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <img className="w-[120px]" src={image_one} alt="" />
              <div>
                <h3 className="text-[0.8rem]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, ex!
                </h3>
                <p className="text-[0.8rem] font-semibold text-gray-800">
                  27 June 2023 12:41 AM
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
