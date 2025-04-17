export interface Employee {
  id: string;
  no: number;
  employeeId: string;
  name: string;
  position: string;
  location: string;
  status: "Active" | "Inactive";
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
}
