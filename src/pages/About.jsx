import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import about from "../assets/about-bg.jpeg";
import Wedo from "../components/Wedo";

const About = () => {
  return (
    <div>
      <Layout>
        <Banner className='about'>
          <div className="text-5xl font-bold text-white h-full z-20 flex items-center p-[4rem] justify-left">
            About Us
          </div>
        </Banner>
        <div className="bg-white flex justify-between p-[2rem] text-[black] gap-[2%] items-center">
          <aside className="basis-[50%]">
            <p className="font-bold text-4xl my-[1rem]">WELCOME TO Balldraft</p>
            <h1 className="about_subtitle">A FEW WORDS ABOUT US</h1>
            <h3 className="my-[1rem] font-bold text-3xl">
              To meet <span className="text-[#e15218]">today's challenges</span>, we've created a unique
              fund management system
            </h3>
            <p>
              Balldraft - a private financial company specializing in sports
              betting. Our system is risk-free thanks to the development and
              improvement of semi-automatic system of rates. We upgraded our
              automatic system so that the last step before the rate is now done
              by our operators.
            </p>
          </aside>
          <aside>
            <img src={about} alt="" />
          </aside>
        </div>
        <Wedo />
      </Layout>
    </div>
  );
};

export default About;
