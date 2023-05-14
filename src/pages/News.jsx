import React from "react";
import Layout from "../components/Layout";
import PressReleaseWidget from "../components/PressReleaseWidget";

const News = () => {
  return (
    <div>
      <Layout>
        <div className="mt-[6rem] px-[4rem] bg-white">
         <PressReleaseWidget />
        </div>
      </Layout>
    </div>
  );
};

export default News;
