import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appsidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar always visible on the left */}
        <AppSidebar />

        {/* Main content area on the right */}
        <div className="flex-1 overflow-hidden">
          {/* Optional: Sidebar toggle button */}
          <SidebarTrigger />

          {/* Actual page content (employees, dashboard, etc.) */}
          <main className="flex-1 overflow-hidden p-2">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
