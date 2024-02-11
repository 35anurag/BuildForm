import React from "react";
import { CgClose } from "react-icons/cg";

const InputForm = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-blur-2xl flex items-center justify-center bg-opacity-10 ">
      <div className="relative bg-[#030511] text-white rounded-lg">
        <div className="border border-[#192230] rounded-lg p-8 flex flex-col gap-4 items-start justify-center">
          <div className="flex flex-col">
            <h2 className="font-bold text-[20px]">Create Form</h2>
            <p className="opacity-60 text-[14px]">
              Create a new form to start collecting the responses
            </p>
          </div>
          <form className="flex flex-col gap-4 max-w-[338px] ">
            <div className="flex flex-col gap-2">
              <label className="text-[14px]">Name</label>
              <input placeholder="Name" className="rounded p-2 w-[338px] focus:outline-none border border-[#192230] bg-[#030511] placeholder:text-[14px]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px]">Description</label>
              <textarea placeholder="Write a description..." className="rounded p-2 w-[338px] focus:outline-none border border-[#192230] bg-[#030511] placeholder:text-[14px]" />
            </div>
            <button className="bg-white bg-opacity-90 font-semibold text-[14px] text-black p-1 rounded">Save</button>
          </form>
        </div>
        <button type="button" className="absolute top-0 right-0 mt-2 mr-2 text-sm"><CgClose /></button>
      </div>
    </div>
  );
};

export default InputForm;
