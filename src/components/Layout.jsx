import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Dashboard/>
    </div>
  );
};

export default Layout;
