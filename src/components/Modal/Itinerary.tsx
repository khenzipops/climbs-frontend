import React, { useState } from "react";

interface ItineraryData {
  date: string;
  name: string;
  purpose: string;
  product: string;
  remarks: string;
  assign: string;
}

const ItineraryModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Default to open for demo
  const [formData, setFormData] = useState<ItineraryData>({
    date: "2023-10-20",
    name: "MNO Cooperative",
    purpose: "Loan application",
    product: "Business loan",
    remarks: "Processing",
    assign: "John Doe",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Edit Itinerary
          </h2>
          <button
            onClick={handleCancel}
            className="text-gray-500 hover:text-red-500 text-xl font-bold"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input-style"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-style"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Purpose
            </label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="input-style"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Product
            </label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="input-style"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Remarks
            </label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              className="input-style resize-none"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Assigned To
            </label>
            <textarea
              name="assign"
              value={formData.assign}
              onChange={handleChange}
              className="input-style resize-none"
              rows={2}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-150"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-150"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItineraryModal;
