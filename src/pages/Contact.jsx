import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import contactImg from "../assets/contact-illus.png";
import ContactDetails from "../components/contactDetails";

const Contact = () => {
  return (
    <div>
      <Layout>
        <Banner className="contact">
          <div className="text-5xl font-bold text-white h-full z-20 flex items-center p-[4rem] justify-right relative">
            <p>contact us </p>
            <img
              src={contactImg}
              alt=""
              className="absolute right-0 h-[90%] w-3/5 object-contain"
            />
          </div>
        </Banner>

        <ContactDetails />
      </Layout>
    </div>
  );
};

export default Contact;
