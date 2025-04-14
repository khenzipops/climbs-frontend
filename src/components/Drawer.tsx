"use client";

import { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiLogOut,
  FiSettings,
  FiFileText,
  FiActivity,
  FiSearch,
  FiMenu,
  FiChevronLeft,
  FiX,
  FiMonitor,
  FiUserCheck,
} from "react-icons/fi";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDrawer = () => {
    if (isOpen) {
      setIsCollapsed(!isCollapsed);
    } else {
      setIsOpen(true);
    }
  };

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
      Toggle Button
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed left-1 top-90 z-30 p-2 rounded-md bg-gray-500 hover:bg-gray-800"
        >
          <FiMenu className="w-5 h-5" />
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
          {/* Search (only shown when expanded) */}
          {!isCollapsed && (
            <div className="p-3">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* Menu Items */}
          <nav className="p-2">
            <ul className="space-y-1">
              <MenuItem
                icon={<FiHome />}
                label="Dashboard"
                href="/"
                isCollapsed={isCollapsed}
              />
              <MenuItem
                icon={<FiActivity />}
                label="Weekly Accomplishments"
                href="/weekly-accomplishments"
                isCollapsed={isCollapsed}
              />
              <MenuItem
                icon={<FiUserCheck />}
                label="Itenerary Report"
                href="/Itenerary-Report"
                isCollapsed={isCollapsed}
              />
              <MenuItem
                icon={<FiMonitor />}
                label="Monitoring"
                href="/Monitoring"
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
