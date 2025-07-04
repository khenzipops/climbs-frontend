"use client";
import { Calendar as Calendars } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "../ui/button";

type DatePickerProps = {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
};

export default function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button className="bg-white border border-gray-400 text-gray-700 hover:text-gray-800 hover:bg-gray-100 cursor-pointer">
          <Calendars />
          Pick a Date
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2">
        <Calendar mode="single" selected={value} onSelect={onChange} />
      </PopoverContent>
    </Popover>
  );
}
