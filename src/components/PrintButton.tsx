"use client";
import React from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

interface PrintButtonProps {
  contentToPrint: React.RefObject<HTMLDivElement | null>;
}

const PrintButton: React.FC<PrintButtonProps> = ({ contentToPrint }) => {
  const handlePrint = useReactToPrint({
    contentRef: contentToPrint,
  });

  return (
    <Button
      className="bg-white border border-gray-400 text-gray-700 hover:text-gray-800 hover:bg-gray-100 cursor-pointer"
      onClick={handlePrint}
    >
      <Printer />
      Print
    </Button>
  );
};

export default PrintButton;
