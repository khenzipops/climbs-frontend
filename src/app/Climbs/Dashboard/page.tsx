"use client";
import React from "react";
import Drawer from "@/components/Drawer";
import NavLogin from "@/components/NavLogin";

export default function Dashboard() {
  return (
    <div>
      <NavLogin />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 dark:white">
        <div>
          <Drawer />
        </div>
        <h1 className="text-gray-800">hello world</h1>
      </div>
    </div>
  );
}
