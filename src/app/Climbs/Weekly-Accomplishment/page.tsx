"use client";
import React from "react";
import Drawer from "@/components/Drawer";
import NavLogin from "@/components/NavLogin";
import WeeklyTable from "@/components/WeeklyTable";
import DatePickerComponent from "@/components/WeeklyCalendar";

export default function Dashboard() {
  return (
    <div className="">
      <NavLogin />
      <div className="">
        <div>
          <Drawer />
        </div>
      </div>
      <div className="flex flex-col p-4">
        {/* Header section with date and buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-4">
          <h1 className="text-gray-600 text-xl">Date of Submission: </h1>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="order-2 sm:order-1">
              <DatePickerComponent />
            </div>

            <div className="flex gap-2 order-1 sm:order-2 ml-auto sm:ml-0">
              <button className="bg-white text-gray-800 px-4  rounded border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
                Print
              </button>
              <button className="bg-white text-gray-800 px-4 rounded border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Weekly table section */}
        <div className="w-full overflow-x-auto">
          <WeeklyTable />
        </div>
      </div>
    </div>
  );
}
