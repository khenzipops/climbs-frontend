export interface Employee {
  id: number;
  no: number;
  employeeId: string;
  name: string;
  position: string;
  location: string;
  status: "Active" | "Inactive";
  role: "Admin" | "User";
  number: number;
  birthday: string;
  email: string;
}

export interface ItineraryData {
  id: number;
  date: string;
  name: string;
  purpose: string;
  product: string;
  remarks: string;
  assign: string;
}
