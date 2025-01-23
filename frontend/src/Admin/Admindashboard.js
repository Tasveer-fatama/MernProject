import React from 'react';
import Slidebaar from "../Slidebaar";
import Inquirydetails from "./Inquirydetails";
import Userdetails from "./userdetails";

const Admindashboard = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
  {/* Sidebar */}
  <div className="w-full max-w-[300px] border-r border-gray-300 md:relative md:shrink-0 md:fixed md:h-screen">
    <Slidebaar />
  </div>

  {/* Main Content Section */}
  <div className="flex-1 p-5 flex flex-col gap-5 md:pl-[100px]">
    {/* Inquiry Details */}
    <div className="w-full">
      <Inquirydetails />
    </div>

    {/* User Details */}
    <div className="w-full">
      <Userdetails />
    </div>
  </div>
</div>
  );
};

export default Admindashboard;