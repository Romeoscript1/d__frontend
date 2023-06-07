import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="px-2">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
