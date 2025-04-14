"use client";
import React from "react";
import Drawer from "@/components/Drawer";
import NavLogin from "@/components/NavLogin";
import WeeklyTable from "@/components/WeeklyTable";

export default function Dashboard() {
  return (
    <div className="">
      <NavLogin />
      <div className="">
        <div>
          <Drawer />
        </div>
      </div>
      <div className="">
        {/* weekly accomplishment starts here */}
        <h1 className="text-gray-600 text-xl m-3">Date of Submission: </h1>
      </div>
      <div>
        <WeeklyTable />
      </div>
    </div>
  );
}
