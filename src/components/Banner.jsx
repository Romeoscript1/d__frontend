import React from "react";

const Banner = ({ children, className }) => {
  const classes = className;
  return <div className={`${classes} h-[60vh] bg-[#060019]`}>{children}</div>;
};

export default Banner;
