"use client";
import React, { useRef } from "react";
import NavLogin from "@/components/NavLogin";
import WeeklyTable from "@/components/WeeklyTable";
import DatePickerComponent from "@/components/WeeklyCalendar";

export default function Dashboard() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printContents = printRef.current?.innerHTML;
    const originalContents = document.body.innerHTML;

    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // Reload to restore event listeners
    }
  };

  return (
    <div className="">
      <NavLogin />
      <div className=""></div>
      <div className="flex flex-col bg-white">
        <div className="p-2 m-10 border-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-gray-600 text-md ml-4">Date of Submission:</h1>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="order-2 sm:order-1">
                <DatePickerComponent />
              </div>

              <div className="flex gap-2 order-1 sm:order-2 ml-auto sm:ml-0">
                <button
                  onClick={handlePrint}
                  className="bg-white text-gray-800 px-2 text-base rounded border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                >
                  Print Table
                </button>
              </div>
            </div>
          </div>

          {/* ✅ Only this section will be printed */}
          <div ref={printRef} className="w-full overflow-x-auto">
            <WeeklyTable />
          </div>
        </div>
      </div>
    </div>
  );
}
