"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export type Details = {
  Date: string;
  Assign: string;
  Coop: string;
  Purpose: string;
  Product: string;
  Status: "Pending" | "Processing" | "Success" | "Failed";
  Remarks: string;
  Location: string;
};

const data: Details[] = [
  {
    Date: "2025-07-01",
    Assign: "John Dela Cruz",
    Coop: "Green Harvest Cooperative",
    Purpose: "Product Delivery",
    Product: "Organic Fertilizer",
    Status: "Pending",
    Remarks: "Waiting for approval",
    Location: "Cagayan de Oro City",
  },
  {
    Date: "2025-07-02",
    Assign: "Maria Santos",
    Coop: "Bukidnon Farmers Assoc.",
    Purpose: "Training & Seminar",
    Product: "Hybrid Rice Seeds",
    Status: "Processing",
    Remarks: "Ongoing seminar",
    Location: "Valencia City, Bukidnon",
  },
  {
    Date: "2025-07-03",
    Assign: "Carlos Rivera",
    Coop: "Golden Grains Coop",
    Purpose: "Inspection",
    Product: "Harvested Corn",
    Status: "Success",
    Remarks: "Inspection completed successfully",
    Location: "Iligan City",
  },
  {
    Date: "2025-07-04",
    Assign: "Liza Morales",
    Coop: "Mindanao Agri-Group",
    Purpose: "Delivery Follow-up",
    Product: "Animal Feed",
    Status: "Failed",
    Remarks: "Delivery not received",
    Location: "Malaybalay City",
  },
  {
    Date: "2025-07-05",
    Assign: "Mark Javier",
    Coop: "Farmers United Coop",
    Purpose: "Field Visit",
    Product: "Vegetable Seeds",
    Status: "Success",
    Remarks: "Field conditions documented",
    Location: "Gingoog City",
  },
  {
    Date: "2025-07-06",
    Assign: "Angela Lim",
    Coop: "AgroDev Coop",
    Purpose: "Monitoring",
    Product: "Cassava Cuttings",
    Status: "Processing",
    Remarks: "Monitoring ongoing",
    Location: "Maramag, Bukidnon",
  },
  {
    Date: "2025-07-07",
    Assign: "Ramon Villanueva",
    Coop: "Harvest Link Cooperative",
    Purpose: "Distribution",
    Product: "Fertilizer Pack",
    Status: "Pending",
    Remarks: "Awaiting transport",
    Location: "Ozamiz City",
  },
  {
    Date: "2025-07-08",
    Assign: "Jessica Gomez",
    Coop: "Kapatagan Agri Group",
    Purpose: "Meet & Greet",
    Product: "Livestock Vitamins",
    Status: "Success",
    Remarks: "Positive feedback from members",
    Location: "Kapatagan, Lanao del Norte",
  },
  {
    Date: "2025-07-09",
    Assign: "Erwin Bautista",
    Coop: "Southern Growers Coop",
    Purpose: "Program Evaluation",
    Product: "Agri-Tools",
    Status: "Failed",
    Remarks: "Coop unavailable",
    Location: "Pagadian City",
  },
  {
    Date: "2025-07-10",
    Assign: "Melissa Reyes",
    Coop: "Rural Farmers Alliance",
    Purpose: "Technical Assistance",
    Product: "Organic Pesticides",
    Status: "Success",
    Remarks: "Assistance completed",
    Location: "Dipolog City",
  },
];

const getStatusColor = (status: Details["Status"]) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-300 text-yellow-800";
    case "Processing":
      return "bg-blue-400 text-white";
    case "Success":
      return "bg-green-500 text-white";
    case "Failed":
      return "bg-red-500 text-white";
    default:
      return "";
  }
};

export default function Coop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page on rows change
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Rows per page:</p>
        <Select
          onValueChange={handleRowsPerPageChange}
          defaultValue={rowsPerPage.toString()}
        >
          <SelectTrigger className="w-[100px] mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="15">15</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table className="overflow-hidden text-sm border-2 border-gray-300  rounded-lg">
        <TableCaption className="text-center">
          List of itinerary reports.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100 hover:bg-gray-100">
            <TableHead>Date</TableHead>
            <TableHead>Assign</TableHead>
            <TableHead>Coop/Non Coop</TableHead>
            <TableHead>Purpose</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Remarks</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.Date}</TableCell>
              <TableCell className="flex items-center gap-2">
                <div className="h-8 w-8 bg-gray-300 rounded-full px-2 py-1 text-gray-700 font-medium">
                  JC
                </div>
                {row.Assign}
              </TableCell>
              <TableCell>{row.Coop}</TableCell>
              <TableCell>{row.Purpose}</TableCell>
              <TableCell>{row.Product}</TableCell>
              <TableCell>
                <span
                  className={`px-1 py-1 rounded-md ${getStatusColor(
                    row.Status
                  )}`}
                >
                  {row.Status}
                </span>
              </TableCell>
              <TableCell>{row.Remarks}</TableCell>
              <TableCell>{row.Location}</TableCell>
              <TableCell className="flex items-center space-x-2">
                <Pencil className="text-blue-500 h-5 hover:text-blue-700" />
                <Trash2 className="text-red-500 h-5 hover:text-red-700" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
        <div className="space-x-2">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
