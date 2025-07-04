"use client";
import { Calendar as Calendars } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "../ui/button";

export default function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Popover>
      <PopoverTrigger>
        <Button className="bg-white border border-gray-400 text-gray-700 hover:text-gray-800 hover:bg-gray-100 cursor-pointer">
          <Calendars />
          Pick a Date
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2">
        <Calendar mode="single" selected={date} onSelect={setDate} />
        <div className="flex space-x-2 justify-center items-center">
          <Button
            variant={"success"}
            className="hover:bg-green-600 hover:text-white"
          >
            Save
          </Button>
          <Button
            variant={"destructive"}
            className="hover:bg-red-800 hover:text-white"
          >
            Cancel
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
