"use client";

import * as React from "react";
import {
  ChevronsUpDown,
  User2,
  LogOut,
  UserRoundCog,
  UserPen,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function VersionSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-full">
                <User2 className="size-5" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">John Doe</span>
                <span className="">Admin</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem className="hover:bg-indigo-800 hover:text-white">
                  <UserPen />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-indigo-800 hover:text-white">
                  <UserRoundCog />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-indigo-800 hover:text-white">
                  <LogOut />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
