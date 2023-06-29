import React from "react";
import "./DaysBlockEnd.css";
import { createCells } from "../functions/createCells";
export const DaysBlockEnd = ({
  pickerDate,
  setPickerInput,
  handleShowDatePicker,
  pickerDateCompare,
  visibleRangeEnd
}) => {
  const setNewDate = (day, month, year) => {
    let newDate = new Date(`${year}-${month + 1}-${day + 1}`);
    if (newDate >= pickerDateCompare) {
      setPickerInput(newDate);
      // handleShowDatePicker();
    }
  };

  let dayCells = createCells(pickerDate, visibleRangeEnd)
 
  const dayElements = dayCells.map((cell) => {
    let cellDate = new Date(
      `${cell.year}-${cell.monthNumber + 1}-${cell.dayNumber + 1}`
    );
    let today = new Date();
    if (cell.active) {
      let className = "cell active-cell";
      if (cellDate >= pickerDateCompare && cellDate <= pickerDate) {
        className = className + " range";
      }
      return (
        <div
          className={className}
          onClick={() =>
            setNewDate(cell.dayNumber, cell.monthNumber, cell.year)
          }
        >
          {cell.dayNumber + 1}
        </div>
      );
    } else {
      return <div className="cell passive-cell">{cell.dayNumber + 1}</div>;
    }
  });

  return <div className="day-block">{dayElements}</div>;
};
