"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appsidebar";
import { Navbar } from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col w-full">
        {/* Navbar fixed at top */}
        <Navbar className="sticky top-0 z-50 h-16 max-w-full border-b" />

        {/* Main content area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar - hidden on mobile */}
          <AppSidebar className="hidden md:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-0 border-r" />

          {/* Content area */}
          <div className="flex-1 overflow-auto">
            {/* Mobile sidebar trigger - positioned below navbar */}
            <div className="md:hidden sticky top-16 z-40 p-2 bg-background border-b">
              <SidebarTrigger className="ml-2" />
            </div>

            {/* Page content */}
            <main className="p-4 md:p-6 md:ml-64">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
