import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays } from "lucide-react";

export default function CompactDatePickerRow() {
  const [uncontrolledDate, setUncontrolledDate] = useState<Date | null>(
    dayjs("2025-04-16").toDate()
  );
  const [controlledDate, setControlledDate] = useState<Date | null>(
    dayjs("2025-04-17").toDate()
  );
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);

  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-sm max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Uncontrolled
          </label>
          <div className="relative">
            <DatePicker
              selected={uncontrolledDate || undefined}
              onChange={(date) => {
                setUncontrolledDate(date);
                setShowYearPicker(false);
                setShowMonthPicker(false);
              }}
              className="w-full pl-9 pr-1 py-1 text-sm border border-gray-200 rounded-md shadow-xs focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
              dateFormat="MMM d, yyyy"
              showPopperArrow={false}
              popperClassName="!mt-2 text-sm"
              popperPlacement="bottom-start"
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="flex items-center justify-between px-2 py-2">
                  <button
                    onClick={() => setShowYearPicker(!showYearPicker)}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    {dayjs(date).format("YYYY")}
                  </button>
                  {!showYearPicker && !showMonthPicker && (
                    <div className="flex space-x-1">
                      <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                        className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                      ></button>
                      <button
                        onClick={() => setShowMonthPicker(true)}
                        className="text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        {dayjs(date).format("MMM")}
                      </button>
                      <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                        className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                      ></button>
                    </div>
                  )}
                </div>
              )}
              onClickOutside={() => {
                setShowYearPicker(false);
                setShowMonthPicker(false);
              }}
              onSelect={() => {
                if (showYearPicker) {
                  setShowYearPicker(false);
                  setShowMonthPicker(true);
                } else if (showMonthPicker) {
                  setShowMonthPicker(false);
                }
              }}
              showYearPicker={showYearPicker}
              showMonthYearPicker={showMonthPicker}
            />
            <CalendarDays className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Controlled
          </label>
          <div className="relative">
            <DatePicker
              selected={controlledDate}
              onChange={(date) => {
                setControlledDate(date);
                setShowYearPicker(false);
                setShowMonthPicker(false);
              }}
              className="w-full pl-9 pr-3 py-1 text-sm border border-gray-200 rounded-md shadow-xs focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
              dateFormat="MMM d, yyyy"
              showPopperArrow={false}
              popperClassName="!mt-1 text-sm"
              popperPlacement="bottom-start"
              isClearable
              placeholderText="Select date"
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="flex items-center justify-between px-2 py-2">
                  <button
                    onClick={() => setShowYearPicker(!showYearPicker)}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    {dayjs(date).format("YYYY")}
                  </button>
                  {!showYearPicker && !showMonthPicker && (
                    <div className="flex space-x-1">
                      <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                        className="p-1 rounded hover:bg-gray-200 disabled:opacity-50 "
                      ></button>
                      <button
                        onClick={() => setShowMonthPicker(true)}
                        className="text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        {dayjs(date).format("MMM")}
                      </button>
                      <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                        className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                      ></button>
                    </div>
                  )}
                </div>
              )}
              onClickOutside={() => {
                setShowYearPicker(false);
                setShowMonthPicker(false);
              }}
              onSelect={() => {
                if (showYearPicker) {
                  setShowYearPicker(false);
                  setShowMonthPicker(true);
                } else if (showMonthPicker) {
                  setShowMonthPicker(false);
                }
              }}
              showYearPicker={showYearPicker}
              showMonthYearPicker={showMonthPicker}
            />
            <CalendarDays className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
