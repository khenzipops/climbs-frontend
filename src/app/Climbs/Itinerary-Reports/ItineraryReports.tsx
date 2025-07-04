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
        <div className="">
          <div className="flex items-center justify-between p-2">
            <span>Date of Submission:</span>
            <input type="text" />
            <div className="space-x-2">
              {/* button */}
              <Button> Print</Button>
              <Button className=""> Add </Button>
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
