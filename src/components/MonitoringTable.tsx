"use client";
import React, { useState } from "react";

interface MonitoringTableProps {
  data: Array<{
    id: string;
    no: number;
    employeeId: string;
    name: string;
    week1: string;
    week2: string;
    week3: string;
    week4: number;
  }>;
}
const MonitoringTable: React.FC<MonitoringTableProps> = ({ data }) => {
  const [editRowId, setEditRowId] = useState<string | null>(null);
  const [editData, setEditData] = useState(data);

  const handleEditClick = (id: string) => {
    setEditRowId(id);
  };

  const handleSaveClick = () => {
    setEditRowId(null);
    // Save changes to the data here
  };

  const handleCancelClick = () => {
    setEditRowId(null);
    setEditData(data); // Reset to original data
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    field: string
  ) => {
    const newData = editData.map((row) =>
      row.id === id ? { ...row, [field]: e.target.value } : row
    );
    setEditData(newData);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border-b border-gray-300">No</th>
            <th className="py-2 px-4 border-b border-gray-300">Employee ID</th>
            <th className="py-2 px-4 border-b border-gray-300">Name</th>
            <th className="py-2 px-4 border-b border-gray-300">Position</th>
            <th className="py-2 px-4 border-b border-gray-300">Location</th>
            <th className="py-2 px-4 border-b border-gray-300">Status</th>
            <th className="py-2 px-4 border-b border-gray-300">Number</th>
            <th className="py-2 px-4 border-b border-gray-300">Birthday</th>
            <th className="py-2 px-4 border-b border-gray-300">Email</th>
            <th className="py-2 px-4 border-b border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {editData.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                {editRowId === row.id ? (
                  <input
                    type="text"
                    value={row.no}
                    onChange={(e) => handleChange(e, row.id, "no")}
                  />
                ) : (
                  row.no
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                {editRowId === row.id ? (
                  <input
                    type="text"
                    value={row.employeeId}
                    onChange={(e) => handleChange(e, row.id, "employeeId")}
                  />
                ) : (
                  row.employeeId
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                {editRowId === row.id ? (
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) => handleChange(e, row.id, "name")}
                  />
                ) : (
                  row.name
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                {editRowId === row.id ? (
                  <input
                    type="text"
                    value={row.week1}
                    onChange={(e) => handleChange(e, row.id, "position")}
                  />
                ) : (
                  row.week1
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                {editRowId === row.id ? (
                  <input
                    type="text"
                    value={row.week2}
                    onChange={(e) => handleChange(e, row.id, "location")}
                  />
                ) : (
                  row.week2
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                {editRowId === row.id ? (
                  <input
                    type="text"
                    value={row.week3}
                    onChange={(e) => handleChange(e, row.id, "status")}
                  />
                ) : (
                  row.week3
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                {editRowId === row.id ? (
                  <input
                    type="text"
                    value={row.week4}
                    onChange={(e) => handleChange(e, row.id, "number")}
                  />
                ) : (
                  row.week4
                )}
              </td>

              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                {editRowId === row.id ? (
                  <>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick} className="ml-2">
                      Cancel
                    </button>
                  </>
                ) : (
                  <button onClick={() => handleEditClick(row.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonitoringTable;
