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
import { Table } from "lucide-react";
import { Input } from "@/components/ui/input";

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
            <div className="flex items-center space-x-2 ml-2">
              <span>Date of Submission:</span>
              <span>12/12/2025</span>
            </div>
            <div className="space-x-2">
              {/* button */}
              <Button> Print</Button>
              <Button className=""> Add Date </Button>
              <Button className=""> Add </Button>
            </div>
            {/* Itinerary report table below */}
            <div></div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
