import React from "react";
import NewFormButton from "@/app/components/newformbutton";
const Dashboard = () => {
  return (
    <div className="bg-[#030511]">
      <div className="ml-[4rem] mr-[4rem] py-[4rem] min-h-screen text-white">
        <h1 className="text-[20px] font-bold border-b border-[#192230] pb-[1rem]">
          Your Forms
        </h1>
        <NewFormButton />
      </div>
    </div>
  );
};

export default Dashboard;
