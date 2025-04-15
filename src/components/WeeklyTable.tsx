"use client";
import { useState } from "react";

interface TableData {
  id: number;
  date: string;
  name: string;
  purpose: string;
  product: string;
  remarks: string;
}

export default function CoopTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [editId, setEditId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<TableData>>({});
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  // Sample data
  const [data, setData] = useState<TableData[]>([
    {
      id: 1,
      date: "2023-10-15",
      name: "ABC Cooperative",
      purpose: "Loan application",
      product: "Agricultural loan",
      remarks: "Approved",
    },
    {
      id: 2,
      date: "2023-10-16",
      name: "XYZ Non-Cooperative",
      purpose: "Membership",
      product: "Savings account",
      remarks: "Pending",
    },
    {
      id: 3,
      date: "2023-10-17",
      name: "DEF Cooperative",
      purpose: "Investment",
      product: "Time deposit",
      remarks: "Rejected",
    },
    {
      id: 4,
      date: "2023-10-18",
      name: "GHI Non-Cooperative",
      purpose: "Consultation",
      product: "Financial advice",
      remarks: "Completed",
    },
    {
      id: 5,
      date: "2023-10-19",
      name: "JKL Cooperative",
      purpose: "Loan payment",
      product: "Agricultural loan",
      remarks: "On time",
    },
    {
      id: 6,
      date: "2023-10-20",
      name: "MNO Cooperative",
      purpose: "Loan application",
      product: "Business loan",
      remarks: "Processing",
    },
    {
      id: 7,
      date: "2023-10-21",
      name: "PQR Cooperative",
      purpose: "Loan inquiry",
      product: "Personal loan",
      remarks: "Inquired",
    },
    {
      id: 8,
      date: "2023-10-22",
      name: "STU Non-Cooperative",
      purpose: "Account opening",
      product: "Current account",
      remarks: "Approved",
    },
    {
      id: 9,
      date: "2023-10-23",
      name: "VWX Cooperative",
      purpose: "Loan renewal",
      product: "Agricultural loan",
      remarks: "Renewed",
    },
    {
      id: 10,
      date: "2023-10-24",
      name: "YZA Cooperative",
      purpose: "Training",
      product: "Financial literacy",
      remarks: "Completed",
    },
    {
      id: 11,
      date: "2023-10-25",
      name: "BCD Non-Cooperative",
      purpose: "Consultation",
      product: "Investment advice",
      remarks: "Pending",
    },
    {
      id: 12,
      date: "2023-10-26",
      name: "EFG Cooperative",
      purpose: "Loan application",
      product: "Housing loan",
      remarks: "Processing",
    },
  ]);

  // Calculate pagination
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleEdit = (id: number) => {
    setEditId(id);
    const itemToEdit = data.find((item) => item.id === id);
    if (itemToEdit) {
      setEditData({ ...itemToEdit });
    }
  };

  const handleSave = (id: number) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, ...editData } : item))
    );
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing rows per page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <div className="overflow-auto max-h-[500px]">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="py-3 px-4 text-left text-gray-800 font-semibold hover:bg-gray-200 transition-colors duration-150">
                  Date
                </th>
                <th className="py-3 px-4 text-left text-gray-800 font-semibold hover:bg-gray-200 transition-colors duration-150">
                  Name of COOP/NON COOPS
                </th>
                <th className="py-3 px-4 text-left text-gray-800 font-semibold hover:bg-gray-200 transition-colors duration-150">
                  PURPOSE
                </th>
                <th className="py-3 px-4 text-left text-gray-800 font-semibold hover:bg-gray-200 transition-colors duration-150">
                  PRODUCT
                </th>
                <th className="py-3 px-4 text-left text-gray-800 font-semibold hover:bg-gray-200 transition-colors duration-150">
                  REMARKS
                </th>
                <th className="py-3 px-4 text-left text-gray-800 font-semibold hover:bg-gray-200 transition-colors duration-150">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800 divide-y divide-gray-200">
              {currentData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 hover:bg-gray-100 transition-colors duration-150">
                    {editId === item.id ? (
                      <input
                        type="date"
                        name="date"
                        value={editData.date || ""}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      item.date
                    )}
                  </td>
                  <td className="py-3 px-4 hover:bg-gray-100 transition-colors duration-150">
                    {editId === item.id ? (
                      <input
                        type="text"
                        name="name"
                        value={editData.name || ""}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td className="py-3 px-4 hover:bg-gray-100 transition-colors duration-150">
                    {editId === item.id ? (
                      <input
                        type="text"
                        name="purpose"
                        value={editData.purpose || ""}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      item.purpose
                    )}
                  </td>
                  <td className="py-3 px-4 hover:bg-gray-100 transition-colors duration-150">
                    {editId === item.id ? (
                      <input
                        type="text"
                        name="product"
                        value={editData.product || ""}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      item.product
                    )}
                  </td>
                  <td className="py-3 px-4 hover:bg-gray-100 transition-colors duration-150">
                    {editId === item.id ? (
                      <textarea
                        name="remarks"
                        value={editData.remarks || ""}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                        rows={2}
                      />
                    ) : (
                      item.remarks
                    )}
                  </td>
                  <td className="py-3 px-4 hover:bg-gray-100 transition-colors duration-150">
                    {editId === item.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSave(item.id)}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors duration-150"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition-colors duration-150"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-150"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 bg-gray-50 sticky bottom-0 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm text-gray-800">
                Showing{" "}
                <span className="font-medium">
                  {(currentPage - 1) * rowsPerPage + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(currentPage * rowsPerPage, data.length)}
                </span>{" "}
                of <span className="font-medium">{data.length}</span> results
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="rowsPerPage" className="text-sm text-gray-800">
                Rows per page:
              </label>
              <select
                id="rowsPerPage"
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                className="border rounded px-2 py-1 text-sm text-gray-800"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded transition-colors duration-150 ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded transition-colors duration-150 ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded transition-colors duration-150 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
