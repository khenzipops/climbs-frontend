"use client";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
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
