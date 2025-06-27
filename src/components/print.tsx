import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PrintableComponent: React.FC = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });
  return (
    <button
      onClick={handlePrint}
      className="bg-white text-gray-800 px-2 text-base  rounded border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
    >
      Print
    </button>
  );
};

export default PrintableComponent;
