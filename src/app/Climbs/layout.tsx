"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
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
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-auto">
            <main className="p-4 md:p-6">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
