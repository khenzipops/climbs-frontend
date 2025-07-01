"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AppSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add any additional props here if needed
}

const menuItems = [
  {
    title: "Dashboard",
    url: "/climbs/dashboard",
    icon: Home,
  },
  {
    title: "Itinerary Reports",
    url: "/climbs/itinerary-reports",
    icon: Inbox,
  },
  {
    title: "Weekly Accomplishment",
    url: "/climbs/weekly-accomplishment",
    icon: Calendar,
  },
  {
    title: "Monitoring",
    url: "/climbs/monitoring",
    icon: Search,
  },
  {
    title: "Employees",
    url: "/climbs/employees",
    icon: Settings,
  },
  {
    title: "Settings",
    url: "/climbs/settings",
    icon: Settings,
  },
];

export function AppSidebar({ className, ...props }: AppSidebarProps) {
  return (
    <div
      className={cn(
        "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background",
        "md:static md:top-0 md:h-screen",
        className
      )}
      {...props}
    >
      <Sidebar>
        <SidebarContent className="h-full overflow-y-auto mt-16">
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className="flex items-center gap-3 px-2 py-2 text-sm font-medium hover:bg-accent"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
