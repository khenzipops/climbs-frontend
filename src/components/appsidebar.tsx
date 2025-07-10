import * as React from "react";
import {
  LayoutDashboard,
  NotebookTextIcon,
  TrophyIcon,
  User2,
  MonitorCheckIcon,
  UserRoundCheck,
} from "lucide-react";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Menu",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "http://localhost:3000/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Itinerary Reports",
          url: "http://localhost:3000/itinerary-reports",
          icon: NotebookTextIcon,
        },
        {
          title: "Weekly Accomplishment",
          url: "http://localhost:3000/weekly-accomplishment",
          icon: TrophyIcon,
        },
        {
          title: "Employee Monitoring",
          url: "http://localhost:3000/monitoring",
          icon: MonitorCheckIcon,
        },
        {
          title: "List Employee",
          url: "http://localhost:3000/employees",
          icon: UserRoundCheck,
        },
      ],
    },
    {
      title: "Admin",
      url: "#",
      items: [
        {
          title: "Employee",
          url: "#",
          icon: User2,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-white">
        <VersionSwitcher />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className="hover:bg-indigo-800 hover:text-white"
                      asChild
                    >
                      <a href={item.url}>
                        <item.icon /> {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <div className="flex items-center gap-2">
          <img
            src="/assets/climbs-logo.jpg"
            alt="User avatar"
            className="size-8 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Itraching</span>
            <span className="text-xs text-gray-500">Itraching@example.com</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
