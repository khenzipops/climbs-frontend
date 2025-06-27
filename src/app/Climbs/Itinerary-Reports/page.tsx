"use client";
import React from "react";
import Drawer from "@/components/drawer";
import NavLogin from "@/components/NavLogin";
import ItineraryTable from "@/components/ItineraryTable";
import DatePickerComponent from "@/components/ItineraryCalendar";

export default function Dashboard() {
  return (
    <div className="">
      <NavLogin />
      <div className="">
        <div>
          <Drawer />
        </div>
      </div>
      <div className="flex flex-col  bg-white">
        <div className="p-2 m-10 border-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-gray-600 text-md ml-4">Date of Submission: </h1>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="order-2 sm:order-1">
                <DatePickerComponent />
              </div>

              <div className="flex gap-2 order-1 sm:order-2 ml-auto sm:ml-0">
                <button className="bg-white text-gray-800 px-2 text-base  rounded border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
                  Print
                </button>
                <button className="bg-white text-gray-800 px-2 text-base rounded border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
                  Add
                </button>
              </div>
            </div>
          </div>
          {/* Weekly table section */}
          <div className="w-full overflow-x-auto">
            <ItineraryTable />
          </div>
        </div>
      </div>
    </div>
  );
}
