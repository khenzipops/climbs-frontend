"use client";
import { Code, Paintbrush, Smartphone } from "lucide-react";
import Drawer from "@/components/Drawer";
import NavLogin from "@/components/NavLogin";

const projects = [
  {
    name: "WEEKLY ACCOMPLISHMENTS",
    icon: <Paintbrush className="w-10 h-10 text-indigo-600" />,
  },
  {
    name: "ITINERARY REPORTS",
    icon: <Smartphone className="w-10 h-10 text-green-500" />,
  },
  {
    name: "MONITORING",
    icon: <Code className="w-10 h-10 text-blue-500" />,
  },
  {
    name: "EMPLOYEES",
    icon: <Paintbrush className="w-10 h-10 text-pink-500" />,
  },
  {
    name: "SETTINGS",
    icon: <Smartphone className="w-10 h-10 text-yellow-500" />,
  },

  {
    name: "LOGOUT",
    icon: <Smartphone className="w-10 h-10 text-violet-500" />,
  },
];

export default function Dashboard() {
  return (
    <div>
      <NavLogin />
      <Drawer />
      <main className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100 dark:bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Dashboard
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl text-gray-700">
          {projects.map((project, idx) => (
            <article
              key={project.name}
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow hover:shadow-xl transition-shadow"
            >
              {project.icon}
              <h3 className="mt-4 text-lg font-semibold">{project.name}</h3>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
