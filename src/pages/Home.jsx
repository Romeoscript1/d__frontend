import React from "react";
import Download from "../components/Download";
import FAQ from "../components/Faq";
import Join from "../components/Join";
import Layout from "../components/Layout";
import TestimonialCard from "../components/TestimonialCard";
import Wrapper from "../components/Wrapper";
import Welcome from "../components/Welcome";
import Dashboard from "../components/Dashboard";
import LeagueDashboard from "../components/LeagueDashboard";
import EplDashboard from "../components/EplDashboard";

const Home = () => {
  const steps = [
    {
      Id: 1,
      step: "Register",
      info: "Write to our email @lnwasia Or Tel. 02-508-8798",
    },
    {
      Id: 2,
      step: "Deposit",
      info: "Contact the Call Center staff Receive the money transfer",
    },
    {
      Id: 3,
      step: "Enjoy The Game",
      info: "Receive Username and PassReady to play the game",
    },
  ];
  return (
    <div>
      <Layout>
        <Welcome />
        <LeagueDashboard />
        <EplDashboard />

        <Wrapper />
        <div className="flex w-[90%] m-auto gap-4 justify-between my-[2rem]">
          {steps.map((step) => {
            return (
              <aside
                className="flex bg-[#19222B] w-[400px] p-6 justify-between"
                key={step.Id}
              >
                <div className="w-[86px] h-[86px] text-[#5176D6] border-[1px] border-[#5176D6] bg-[#1D293D] border-dotted rounded-full flex items-center justify-center">
                  0{step.Id}
                </div>
                <div className="basis-[50%]">
                  <h2>{step.step}</h2>
                  <p>{step.info}</p>
                </div>
              </aside>
            );
          })}
        </div>
        <Join />
        <TestimonialCard />
        <Download />
        <FAQ />
      </Layout>
    </div>
  );
};

export default Home;
