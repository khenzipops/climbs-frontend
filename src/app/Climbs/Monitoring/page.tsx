"use client";

import React from "react";
import { FaEdit } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Drawer from "@/components/Drawer";
import { getMonitoringTableData } from "@/Services/monitoringData";
import { Monitoring } from "@/types/monitoring";

const MonitoringPage = () => {
  const tableData = getMonitoringTableData();

  const handleEdit = (employeeId: string) => {
    console.log("Editing employee:", employeeId);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Drawer />
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Monitoring</h1>
      </div>
      <div className="overflow-x-auto m-3 p-8">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Week 1
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Week 2
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Week 3
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Week 4
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((monitoring: Monitoring) => (
              <tr
                key={monitoring.id}
                className="hover:bg-gray-100 transition-colors duration-200 border-b border-gray-200"
              >
                <td className="px-4 py-3 text-gray-700">{monitoring.no}</td>
                <td className="px-4 py-3 text-gray-700">
                  {monitoring.employeeId}
                </td>
                <td className="px-4 py-3 text-gray-700">{monitoring.name}</td>
                <td className="px-4 py-3 text-gray-700">{monitoring.week1}</td>
                <td className="px-4 py-3 text-gray-700">{monitoring.week2}</td>
                <td className="px-4 py-3 text-gray-700">{monitoring.week3}</td>
                <td className="px-4 py-3 text-gray-700">{monitoring.week4}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleEdit(monitoring.employeeId)}
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                  >
                    <FaEdit className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonitoringPage;
