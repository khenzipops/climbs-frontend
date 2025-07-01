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

// Menu items.
const items = [
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

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
