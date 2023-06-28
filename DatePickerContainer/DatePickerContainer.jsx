import React from "react";
import { ReactNode } from "react";

export function DatePickerContainer({
  children,
  weekDaysBlock,
  pickerDate,
  handleNextMonth,
  handleNextYear,
  handlePrevMonth,
  handlePrevYear,
  setToday,
  months,
  setDate,
}) {
  return (
    <div className="date-picker-container">
      <div className="date-picker-header">
        {months[pickerDate.getMonth()]} {pickerDate.getFullYear()}
      </div>
      <div className="date-picker-buttons">
        <button
          onClick={() => {
            handlePrevYear(pickerDate, setDate);
          }}
        >
          prev year
        </button>
        <button
          onClick={() => {
            handlePrevMonth(pickerDate, setDate);
          }}
        >
          prev month
        </button>
        <button
          onClick={() => {
            handleNextMonth(pickerDate, setDate);
          }}
        >
          next month
        </button>
        <button
          onClick={() => {
            handleNextYear(pickerDate, setDate);
          }}
        >
          next year
        </button>
      </div>
      <div className="date-picker-week-days">{weekDaysBlock}</div>
      {children}
      <div className="date-picker-footer">
        <button
          onClick={() => {
            setToday(pickerDate, setDate);
          }}
        >
          today
        </button>
      </div>
    </div>
  );
}
