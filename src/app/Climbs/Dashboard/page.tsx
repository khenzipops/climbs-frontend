"use client";

import {
  CheckCircle,
  CalendarCheck,
  BarChart3,
  Users2,
  Settings,
  LogOut,
} from "lucide-react";

import Drawer from "@/components/Drawer";
import NavLogin from "@/components/NavLogin";

const actions = [
  {
    name: "Weekly Accomplishments",
    icon: <CheckCircle className="w-6 h-6 text-indigo-600" />,
  },
  {
    name: "Itinerary Reports",
    icon: <CalendarCheck className="w-6 h-6 text-emerald-600" />,
  },
  {
    name: "Monitoring",
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "Employees",
    icon: <Users2 className="w-6 h-6 text-pink-600" />,
  },
  {
    name: "Settings",
    icon: <Settings className="w-6 h-6 text-yellow-600" />,
  },
  {
    name: "Logout",
    icon: <LogOut className="w-6 h-6 text-red-600" />,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-white text-neutral-800 font-sans">
      <NavLogin />
      <Drawer />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
        {/* Left/Main Panel */}
        <section className="md:col-span-2 p-8 bg-white/70 rounded-3xl shadow-xl border border-gray-200 backdrop-blur-md">
          <h2 className="text-3xl font-extrabold mb-6">📊 Weekly Summary</h2>

          <div className="space-y-8">
            {/* Overview */}
            <div>
              <h3 className="text-xl font-semibold">Title: Weekly Overview</h3>
              <p className="text-sm text-gray-500 mt-1">
                Date: October 10, 2023
              </p>
            </div>

            {/* Accomplishment Tasks */}
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

            {/* Itinerary */}
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

            {/* On-Time + Rankings */}
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

        {/* Right Panel / Quick Access */}
        <aside className="p-6 bg-white/70 rounded-3xl shadow-xl border border-gray-200 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-4">🚀 Quick Access</h2>
          <div className="space-y-4">
            {actions.map((action) => (
              <div
                key={action.name}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border hover:shadow-md transition-all cursor-pointer group hover:bg-indigo-50"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <span className="text-sm font-medium">{action.name}</span>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
