"use client";
import { AppSidebar } from "@/components/appsidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { getEmployeeTableData } from "@/Services/employeeData";
import { Employee } from "@/types/employee";

export default function Employees() {
  const tableData = getEmployeeTableData();

  const handleEdit = (id: string) => {
    console.log("Editing", id);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-10 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <span className="capitalize text-xl">list employee</span>
        </header>
        <div>
          <div className="overflow-x-auto mt-5">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3">No</th>
                  <th className="px-4 py-3">Employee ID</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((employee: Employee) => (
                  <tr key={employee.id} className="border-b">
                    <td className="px-4 py-2">{employee.no}</td>
                    <td className="px-4 py-2">{employee.employeeId}</td>
                    <td className="px-4 py-2">{employee.name}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEdit(employee.id.toString())}
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
