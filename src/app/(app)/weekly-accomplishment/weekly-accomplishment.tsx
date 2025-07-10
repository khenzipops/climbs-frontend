"use client";
import { AppSidebar } from "@/components/appsidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React, { useRef, useState } from "react";
import WeeklyTable from "@/components/WeeklyTable";
import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import DatePicker from "@/components/shared/DatePicker";
import { Plus } from "lucide-react";

export default function WeeklyAccomplishment() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const componentRef = useRef<HTMLDivElement>(null);

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
          <span className="capitalize text-xl">Weekly Accomplishment</span>
        </header>

        <div className="p-4">
          {/* Top controls section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span>Submission Date:</span>
              <span>{selectedDate?.toDateString()}</span>
            </div>

            <div className="flex space-x-2">
              <PrintButton contentToPrint={componentRef} />
              <DatePicker value={selectedDate} onChange={setSelectedDate} />
              <Button className="bg-white border border-gray-400 text-gray-700 hover:text-gray-800 hover:bg-gray-100 cursor-pointer">
                <Plus className="mr-1 h-4 w-4" /> Add
              </Button>
            </div>
          </div>

          {/* Main content section */}
          <div ref={componentRef} className="w-full overflow-x-auto">
            <WeeklyTable />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
