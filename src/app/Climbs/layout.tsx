"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appsidebar";
import { Navbar } from "@/components/Navbar";
import { useIsMobile } from "@/hooks/use-mobile"; // Make sure you have this

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col w-full">
        {/* Navbar */}
        <Navbar className="sticky top-0 z-50 h-16 border-b bg-white" />

        <div className="flex flex-1 overflow-hidden">
          {/* Show AppSidebar only on desktop */}
          {!isMobile && (
            <AppSidebar className="hidden md:flex md:w-64 border-r" />
          )}

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            {/* 👇 Adjust padding based on screen size */}
            <main className="p-4 md:p-6">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
