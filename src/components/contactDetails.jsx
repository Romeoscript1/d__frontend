import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FAQ from "./Faq";

const contactDetails = () => {
  return (
    <>
      <div className="w-[70%] rounded-md bg-[#571ce0] m-auto mb-[4rem] p-[2rem]  text-center">
        <h1 className="text-5xl font-bold">Get in touch with us</h1>
        <p className="my-[2rem] w-3/5 m-auto text-xl">
          Fill up the form and our team will get back to you within 24 hours
        </p>

        <form action="">
          <div className="flex justify-between gap-[2%]">
            <TextField
              id="outlined-basic"
              label="Name"
              className="rounded-md w-[49%] bg-white"
            />
            <TextField
              id="filled-basic"
              label="E-mail"
              className="rounded-md w-[49%] bg-white"
            />
          </div>
          <div className="flex justify-between gap-[2%] my-[1rem]">
            <TextField
              id="outlined-basic"
              label="Name"
              className="rounded-md w-[49%] bg-white"
            />
            <TextField
              id="filled-basic"
              label="E-mail"
              className="rounded-md w-[49%] bg-white"
            />
          </div>
          <TextField
            id="outlined"
            label="Multiline"
            multiline
            rows={6}
            variant="outlined"
            className="w-full rounded-md bg-white my-[1rem]"
          />

          <button className="py-[0.5rem] px-[3rem] border-[1px] border-white rounded-md my-[1rem] mx-auto">
            submit
          </button>
        </form>
      </div>
      <FAQ />
    </>
  );
};

export default contactDetails;
