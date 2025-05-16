import { UserInfo } from "@/types/userinfo";

export const getUserInfoData = (): UserInfo[] => {
  return [
    {
      employeeID: 202501,
      firstName: "ADMIN",
      lastName: "ADMIN",
      username: "ADMIN123",
      email: "ADMIN123@example.com",
      phone: "123-456-7890",
      address: "Cagayan de Oro City",
    },
  ];
};
