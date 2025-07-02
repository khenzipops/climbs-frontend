import * as React from "react";
import {
  LayoutDashboard,
  NotebookTextIcon,
  TrophyIcon,
  User2,
  MonitorCheckIcon,
  UserRoundCheck,
  UserRoundCog,
  LogOut,
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
          url: "#",
          icon: LayoutDashboard,
        },
        {
          title: "Itinerary Reports",
          url: "#",
          icon: NotebookTextIcon,
        },
        {
          title: "Weekly Accomplishment",
          url: "#",
          icon: TrophyIcon,
        },
        {
          title: "Employee Monitoring",
          url: "#",
          icon: MonitorCheckIcon,
        },
        {
          title: "Employee list",
          url: "#",
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
      <SidebarHeader>
        <VersionSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
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
    </Sidebar>
  );
}
