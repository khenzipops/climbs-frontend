"use client";

import { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiLogOut,
  FiSettings,
  FiActivity,
  FiChevronLeft,
  FiChevronRight,
  FiMonitor,
  FiUserCheck,
} from "react-icons/fi";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(true);
  const [userInfo] = useState({
    username: "Admin123",
    password: "********",
    firstName: "Admin",
    lastName: "Admin",
    location: "Cagayan de Oro City",
    phoneNumber: "123-456-7890",
  });

  return (
    <div className="flex">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed left-0 top-4 z-30 p-2 rounded-md text-black hover:text-blue-500 bg-white shadow"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transition-transform duration-300 w-64 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-100">
          <h1 className="text-xl font-bold text-gray-800">MENU</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-gray-600 hover:bg-gray-200"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex flex-col justify-between h-full overflow-y-auto">
          {/* Navigation */}
          <nav className="p-4">
            <ul className="space-y-1">
              <MenuItem
                icon={<FiHome />}
                label="Dashboard"
                href="/climbs/dashboard"
              />
              <MenuItem
                icon={<FiActivity />}
                label="Weekly Accomplishments"
                href="/climbs/weekly-accomplishment"
              />
              <MenuItem
                icon={<FiUserCheck />}
                label="Itinerary Reports"
                href="/climbs/itinerary-reports"
              />
              <MenuItem
                icon={<FiMonitor />}
                label="Monitoring"
                href="/climbs/monitoring"
              />
              <MenuItem
                icon={<FiUsers />}
                label="Employees"
                href="/climbs/employees"
              />
            </ul>

            <div className="border-t my-4" />

            <ul className="space-y-1">
              <MenuItem
                icon={<FiSettings />}
                label="Settings"
                href="/climbs/settings"
              />
              <MenuItem icon={<FiLogOut />} label="Logout" href="/Logout" />
            </ul>
          </nav>

          {/* User Information Display */}
          <div className="bg-gray-50 p-4 border-t">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              User Info
            </h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <strong>Username:</strong> {userInfo.username}
              </li>
              <li>
                <strong>First Name:</strong> {userInfo.firstName}
              </li>
              <li>
                <strong>Last Name:</strong> {userInfo.lastName}
              </li>
              <li>
                <strong>Location:</strong> {userInfo.location}
              </li>
              <li>
                <strong>Phone:</strong> {userInfo.phoneNumber}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center p-3 rounded-lg hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <span className="w-5 h-5">{icon}</span>
        <span className="ml-3">{label}</span>
      </a>
    </li>
  );
}
