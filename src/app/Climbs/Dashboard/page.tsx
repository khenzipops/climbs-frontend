"use client";

import {
  Home,
  FileText,
  BarChart3,
  Users2,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import Drawer from "@/components/Drawer";
import NavLogin from "@/components/NavLogin";

// Updated sidebar items
const actions = [
  {
    name: "Dashboard",
    icon: <Home className="w-6 h-6 text-indigo-600" />,
    href: "/dashboard",
  },
  {
    name: "Reports",
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
    href: "/reports",
  },
  {
    name: "Monitoring",
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    href: "/analytics",
  },
  {
    name: "Employees",
    icon: <Users2 className="w-6 h-6 text-pink-600" />,
    href: "/employees",
  },
  {
    name: "Settings",
    icon: <Settings className="w-6 h-6 text-yellow-600" />,
    href: "/settings",
  },
  {
    name: "Logout",
    icon: <LogOut className="w-6 h-6 text-red-600" />,
    href: "/logout",
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-white text-neutral-800 font-sans">
      <NavLogin />
      <Drawer />

      {/* Toggle Button for Mobile */}
      <div className="md:hidden flex justify-end px-6 pt-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-white rounded-full shadow-md"
        >
          {sidebarOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 transition-all duration-300">
        {/* Left/Main Panel */}
        <section
          className={`${
            sidebarOpen ? "md:col-span-2" : "md:col-span-3"
          } p-8 bg-white/70 rounded-3xl shadow-xl border border-gray-200 backdrop-blur-md transition-all duration-300`}
        >
          <h2 className="text-3xl font-extrabold mb-6">📊 Weekly Summary</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Title: Weekly Overview</h3>
              <p className="text-sm text-gray-500 mt-1">
                Date: October 10, 2023
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">
                ✅ Accomplishment Tasks
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Completed project setup</li>
                <li>Implemented authentication</li>
                <li>Designed dashboard UI</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">
                🗓️ Itinerary Accomplishments
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Reviewed itinerary reports</li>
                <li>Updated travel plans</li>
                <li>Scheduled meetings</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold mb-2">
                  ⏱️ On-Time Accomplishments
                </h4>
                <p className="text-sm">John Doe completed all tasks on time.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">🏆 Employee Rankings</h4>
                <ol className="list-decimal list-inside text-sm space-y-1">
                  <li>John Doe - 1st</li>
                  <li>Jane Smith - 2nd</li>
                  <li>Emily Johnson - 3rd</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Right Panel / Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block p-6 bg-white/70 rounded-3xl shadow-xl border border-gray-200 backdrop-blur-md transition-all duration-300`}
        >
          <h2 className="text-2xl font-bold mb-4">🚀 Quick Access</h2>
          <div className="space-y-4">
            {actions.map((action) => (
              <a
                key={action.name}
                href={action.href}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border hover:shadow-md transition-all cursor-pointer group hover:bg-indigo-50"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <span className="text-sm font-medium">{action.name}</span>
              </a>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
