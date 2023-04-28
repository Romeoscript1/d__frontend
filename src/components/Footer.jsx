import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/logo-remove.png";

const Footer = () => {
  return (
    <>
      <section className="grid bg-[#130D25] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2%] p-[1rem] text-white">
        <aside>
          <img src={logo} alt=""  className="h-[80px]"/>
          <ul>
            <li>About us</li>
            <li>products</li>
            <li>Courses</li>
            <li>Nanotech</li>
            <li>Contact us</li>
            <li>FAQs</li>
          </ul>
        </aside>
        <aside>
          <p className="flex items-center mb-4">
            {" "}
            <LocalPhoneIcon />
            +2347012345678
          </p>
          <p className="flex items-center mb-4">
            {" "}
            <WhatsAppIcon />
            +2347012345678
          </p>
          <p className="flex items-center mb-4">
            {" "}
            <LocationOnIcon /> Opp. St. Theresa Cathederal, Nsukka, Enugu Rd.
            Enugu state.
          </p>
        </aside>
        <aside className="text-center">
          <p className="text-2xl font-bold">Subscribe to our newsletter</p>
          <div className="my-3  rounded-lg border-2 bg-white">
            <input
              type="text"
              className="w-[70%] h-[40px] bg-white outline-none text-black px-[0.5rem]"
            />
            <button className="w-[30%] bg-[#247BD6] h-[40px] font-bold rounded-lg">
              Subscribe
            </button>
          </div>
          <p>
            Get the latest tech news and job opportunities by subscribing to our
            news letter
          </p>
          <p className="flex items-center justify-center mt-[1rem] font-bold">
            <FacebookIcon className="mx-[0.5rem]" />{" "}
            <TwitterIcon className="mx-[0.5rem]" />{" "}
            <InstagramIcon className="mx-[0.5rem]" />
          </p>
        </aside>
      </section>
      <p className="text-center text-white bg-[#130D25]">@Balldraft {new Date().getFullYear()}</p>
    </>
  );
};

export default Footer;
