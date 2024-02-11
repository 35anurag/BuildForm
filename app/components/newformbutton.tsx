"use client";
import React, { useState } from "react";
import { TiDocumentAdd } from "react-icons/ti";
import InputForm from "./inputform";

const NewFormButton = () => {
  const [click, isClick] = useState(false);
  const handleNewForm = () => {
    isClick(true);
  };
  const handleCloseNewForm = () => {
    isClick(false);
  };
  return (
    <div>
      <button
        onClick={handleNewForm}
        className="mt-[2rem] w-[20rem] h-[13rem] border border-dashed border-[#1f51c2] opacity-60 hover:bg-[#0c1f4b] hover:opacity-90 rounded-xl flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-[40px]">
            <TiDocumentAdd />
          </div>
          <p className="font-bold text-[18px]">Create new form</p>
        </div>
      </button>
      {click && <InputForm />}
    </div>
  );
};

export default NewFormButton;
