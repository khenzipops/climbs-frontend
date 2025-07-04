"use client";
import { AppSidebar } from "@/components/appsidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";
import ItineraryTable from "@/components/ItineraryTable";
import { Calendar as Calendars, Printer, Plus } from "lucide-react";
import DatePicker from "@/components/shared/DatePicker";

export default function ItineraryReports() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden">
        <header className="flex h-10 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <span className="capitalize text-xl">Itinerary Reports</span>
        </header>
        <div className="space-y-2 mt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 ml-2">
              <span>Date of Submission:</span>
              <span>12/12/2025</span>
            </div>
            <div className="space-x-2 flex">
              {/* button */}
              <Button className="bg-white border border-gray-400 text-gray-700 hover:text-gray-800 hover:bg-gray-100 cursor-pointer">
                <Printer />
                Print
              </Button>
              <DatePicker />
              <Button className="bg-white border border-gray-400 text-gray-700 hover:text-gray-800 hover:bg-gray-100 cursor-pointer">
                <Plus /> Add
              </Button>
            </div>
            {/* Itinerary report table below */}
          </div>
          <div className="">
            <ItineraryTable />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
