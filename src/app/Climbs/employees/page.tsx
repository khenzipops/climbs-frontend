"use client";

import React from "react";
import { FaEdit } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import { getEmployeeTableData } from "@/Services/employeeData";
import { Employee } from "@/types/employee";

const Employees = () => {
  const tableData = getEmployeeTableData();

  const handleEdit = (employeeId: string) => {
    console.log("Editing employee:", employeeId);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div></div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Employee</h1>
      </div>
      <div className="overflow-x-auto">
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
                Position
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ROLE
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((employee: Employee) => (
              <tr
                key={employee.id}
                className="hover:bg-gray-100 transition-colors duration-200 border-b border-gray-200"
              >
                <td className="px-4 py-3 text-gray-700">{employee.no}</td>
                <td className="px-4 py-3 text-gray-700">
                  {employee.employeeId}
                </td>
                <td className="px-4 py-3 text-gray-700">{employee.name}</td>
                <td className="px-4 py-3 text-gray-700">{employee.position}</td>
                <td className="px-4 py-3 text-gray-700">{employee.location}</td>
                <td className="px-4 py-3 text-gray-700">{employee.status}</td>
                <td className="px-4 py-3 text-gray-700">{employee.role}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleEdit(employee.employeeId)}
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

export default Employees;
