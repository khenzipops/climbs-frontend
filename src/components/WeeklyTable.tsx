import * as React from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  return (
    <div className="w-full overflow-hidden shadow-sm rounded-lg border border-gray-200">
      <div className="overflow-auto max-h-[440px]">
        <table className="w-full">
          <thead className="sticky top-0 bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className={`p-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider ${
                    column.align === "right" ? "text-right" : "text-left"
                  }`}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <tr key={row.code} className="hover:bg-gray-50">
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <td
                          key={column.id}
                          className={`p-4 text-sm text-gray-500 ${
                            column.align === "right"
                              ? "text-right"
                              : "text-left"
                          }`}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* Custom Pagination */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => handleChangePage(page - 1)}
            disabled={page === 0}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => handleChangePage(page + 1)}
            disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>

        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">{page * rowsPerPage + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min((page + 1) * rowsPerPage, rows.length)}
              </span>{" "}
              of <span className="font-medium">{rows.length}</span> results
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <p className="text-sm text-gray-700 mr-2">Rows per page:</p>
              <select
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
                className="form-select block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                {[10, 25, 100].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => handleChangePage(0)}
                disabled={page === 0}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">First</span>
                <FiChevronsLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => handleChangePage(page - 1)}
                disabled={page === 0}
                className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Previous</span>
                <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => handleChangePage(page + 1)}
                disabled={page >= totalPages - 1}
                className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Next</span>
                <FiChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => handleChangePage(totalPages - 1)}
                disabled={page >= totalPages - 1}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Last</span>
                <FiChevronsRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
