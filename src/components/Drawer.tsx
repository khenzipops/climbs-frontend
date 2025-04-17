"use client";

import { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiLogOut,
  FiSettings,
  FiActivity,
  FiMenu,
  FiChevronLeft,
  FiX,
  FiMonitor,
  FiUserCheck,
  FiChevronRight,
} from "react-icons/fi";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const closeDrawer = () => {
    if (isCollapsed) {
      setIsOpen(false);
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true);
    }
  };

  return (
    <div className="flex">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed left-0 top-90 z-30 p-2 rounded-md text-black hover:text-blue-400 bg-white- 50 hover:bg-white"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        } ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {!isCollapsed && (
            <h1 className="text-lg font-semibold text-gray-800">MENU</h1>
          )}
          <button
            onClick={closeDrawer}
            className="p-1 rounded text-gray-800 hover:bg-gray-400"
          >
            {isCollapsed ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiChevronLeft className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Drawer Content */}
        <div className="overflow-y-auto h-full">
          {/* Menu Items */}
          <nav className="p-2">
            <ul className="space-y-1">
              <MenuItem
                icon={<FiHome />}
                label="Dashboard"
                href="/Climbs/Dashboard"
                isCollapsed={isCollapsed}
              />
              <MenuItem
                icon={<FiActivity />}
                label="Weekly Accomplishments"
                href="/Climbs/Weekly-Accomplishment"
                isCollapsed={isCollapsed}
              />
              <MenuItem
                icon={<FiUserCheck />}
                label="Itenerary Reports"
                href="/Climbs/Itinerary-Reports"
                isCollapsed={isCollapsed}
              />
              <MenuItem
                icon={<FiMonitor />}
                label="Monitoring"
                href="/Climbs/Monitoring"
                isCollapsed={isCollapsed}
              />
              <MenuItem
                icon={<FiUsers />}
                label="Employees"
                href="/Employees"
                isCollapsed={isCollapsed}
              />
            </ul>

            {!isCollapsed && (
              <>
                <div className="border-t my-2"></div>
                <ul className="space-y-1">
                  <MenuItem
                    icon={<FiSettings />}
                    label="Settings"
                    href="/Settings"
                    isCollapsed={isCollapsed}
                  />

                  <MenuItem
                    icon={<FiLogOut />}
                    label="Logout"
                    href="/Logout"
                    isCollapsed={isCollapsed}
                  />
                </ul>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  icon,
  label,
  href,
  isCollapsed,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  isCollapsed: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900"
      >
        <span className="w-6 h-6">{icon}</span>
        {!isCollapsed && <span className="ml-3">{label}</span>}
      </a>
    </li>
  );
}
