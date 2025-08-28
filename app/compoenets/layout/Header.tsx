import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="w-60 z-1000 relative rounded-bl-4xl rounded-tl-4xl  text-white flex flex-col ">
      <img className=" absolute rounded-tl-3xl  rounded-bl-3xl " src="main\Subtract.svg" alt="" />
      <div className="  z-1000  ml-10 mt-10">
        <div className="flex items-center gap-1">
          <img src="header\Vector.svg" alt="" />
          <img src="header\Group2854.svg" alt="" />
        </div>
      </div>
      <nav className="flex-1 z-1000 ">
        <ul className="space-y-2 font-semibold ml-10 mt-18 ">
          <li className="flex  text-[#0F296D] items-center gap-3 px-4 py-3 rounded-lg   cursor-pointer">
            <img src="header\Frame4.svg" alt="" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 rounded-lg  cursor-pointer transition-colors">
            <img src="header\Frame7.svg" alt="" />
            <span>Attendance</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 rounded-lg  cursor-pointer transition-colors">
            <img src="header\aa – 48.svg" alt="" />
            <span>Sessions</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 rounded-lg  cursor-pointer transition-colors">
            <img src="header\Group2857.svg" alt="" />
            <span>Coaches</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 rounded-lg  cursor-pointer transition-colors">
            <img src="header\Frame5.svg" alt="" />
            <span>Exercise Plan</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 rounded-lg  cursor-pointer transition-colors">
            <img src="header\Group2859.svg" alt="" />
            <span>Registrations</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 rounded-lg  cursor-pointer transition-colors">
            <img src="header\Frame2.svg" alt="" />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
      <div className="bg-white relative text-[#393D54] font-semibold py-5 px-3 w-10/12 mx-auto  rounded-3xl flex flex-col items-center gap-1 cursor-pointer text-xs ">
        <img className=" mr-9 " src="header\HEX-DUMBB.svg" alt="" />
        <span>Schedule an event</span>
        <div className=" absolute top-5 right-6 ">
          <FaEllipsisVertical />
        </div>
      </div>
    </header>
  );
}
