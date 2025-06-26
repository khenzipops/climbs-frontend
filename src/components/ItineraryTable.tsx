"use client";
import { useState } from "react";


interface ItineraryData {
  id: number;
  date: string;
  name: string;
  purpose: string;
  product: string;
  remarks: string;
  assign: string;
}

export default function CoopTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [editId, setEditId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<ItineraryData>>({});
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState<ItineraryData[]>([
    

  ]);

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
      setShowModal(true);
    }
  };

  const handleSave = () => {
    if (editId !== null) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === editId ? { ...item, ...editData } : item
        )
      );
    }
    setShowModal(false);
    setEditId(null);
  };

  const handleCancel = () => {
    setShowModal(false);
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
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <div className="overflow-auto max-h-[500px]">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                {[
                  "No.",
                  "Date",
                  "Name of COOP/NON COOPS",
                  "PURPOSE",
                  "PRODUCT",
                  "REMARKS",
                  "ASSIGN",
                  "ACTION",
                ].map((heading, index) => (
                  <th
                    key={index}
                    className="py-3 px-4 text-left text-gray-800 font-semibold hover:bg-gray-200 transition-colors duration-150"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-800 divide-y divide-gray-200">
              {currentData.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    {(currentPage - 1) * rowsPerPage + index + 1}
                  </td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.purpose}</td>
                  <td className="py-3 px-4">{item.product}</td>
                  <td className="py-3 px-4">{item.remarks}</td>
                  <td className="py-3 px-4">{item.assign}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-150"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 bg-gray-50 sticky bottom-0 border-t border-gray-200">
          <div className="flex items-center space-x-4">
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
                {[5, 10, 20, 30, 40].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
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
                className={`px-4 py-2 rounded ${
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
              className={`px-4 py-2 rounded ${
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

      {/* Modal for Editing */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Edit Record</h2>
            <div className="space-y-3">
              {["date", "name", "purpose", "product", "remarks", "assign"].map(
                (field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium capitalize">
                      {field}
                    </label>
                    {field === "remarks" || field === "assign" ? (
                      <textarea
                        name={field}
                        value={(editData as any)[field] || ""}
                        onChange={handleChange}
                        className="border w-full rounded px-3 py-2"
                        rows={2}
                      />
                    ) : (
                      <input
                        type={field === "date" ? "date" : "text"}
                        name={field}
                        value={(editData as any)[field] || ""}
                        onChange={handleChange}
                        className="border w-full rounded px-3 py-2"
                      />
                    )}
                  </div>
                )
              )}
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
