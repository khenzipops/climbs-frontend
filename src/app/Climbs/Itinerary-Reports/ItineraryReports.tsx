"use client";
import { AppSidebar } from "@/components/appsidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";
import ItineraryTable from "@/components/ItineraryTable";
import DatePickerComponent from "@/components/ItineraryCalendar";

export default function ItineraryReports() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-10 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <span className="capitalize text-xl">Itinerary Reports</span>
        </header>
        <div className="bg-white p-10">
          <div className="border-2 p-2 rounded-lg">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <h1 className="text-gray-600 text-md font-medium">
                Date of Submission:
              </h1>

              {/* Actions Group */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="sm:order-1">
                  <DatePickerComponent />
                </div>

                <div className="flex gap-2 sm:ml-auto">
                  <ActionButton label="Print" />
                  <ActionButton label="Add" />
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
              <ItineraryTable />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

// Extracted button component for reusability
function ActionButton({ label }: { label: string }) {
  return (
    <button className="bg-white text-gray-800 px-4 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
      {label}
    </button>
  );
}
