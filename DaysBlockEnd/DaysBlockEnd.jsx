import React from "react";
import "./DaysBlockEnd.css";

export const DaysBlockEnd = ({
  pickerDate,
  setPickerInput,
  handleShowDatePicker,
  pickerInput,
  pickerDateCompare,
  visibleRangeEnd
}) => {
  const setNewDate = (day, month, year) => {
    let newDate = new Date(`${year}-${month + 1}-${day + 1}`);
    if (newDate >= pickerDateCompare) {
      setPickerInput(newDate);
      handleShowDatePicker();
    }
  };

  const prevMonthLength = new Date(
    pickerDate.getFullYear(),
    pickerDate.getMonth(),
    0
  ).getDate();

  const currentMonthLength = new Date(
    pickerDate.getFullYear(),
    pickerDate.getMonth() + 1,
    0
  ).getDate();

  const currentMonthFirstDayNumber =
    new Date(visibleRangeEnd.getFullYear(), visibleRangeEnd.getMonth(), 1).getDay() + 1;
  let daysBlockLength = 6 * 7;
  let nextMonthDaysLength =
    daysBlockLength - currentMonthLength - currentMonthFirstDayNumber + 1; // 42 - 30 -
  let prevMonthDaysLength =
    daysBlockLength - currentMonthLength - nextMonthDaysLength; // 42 - 30 -
  const dayCells = [];
  let dayNumber = prevMonthLength - 1;
  for (let i = prevMonthDaysLength; i > 0; i--) {
    dayCells.unshift({
      order: 1,
      dayNumber: dayNumber,
      monthNumber: visibleRangeEnd.getMonth() - 1,
      year: visibleRangeEnd.getFullYear(),
      active: false,
    });
    dayNumber--;
  }
  for (let i = 0; i < currentMonthLength; i++) {
    dayCells.push({
      order: 2,
      dayNumber: i,
      monthNumber: visibleRangeEnd.getMonth(),
      year: visibleRangeEnd.getFullYear(),
      active: true,
    });
  }
  for (let i = 0; i < nextMonthDaysLength; i++) {
    dayCells.push({
      dayNumber: i,
      monthNumber: visibleRangeEnd.getMonth() + 1,
      year: visibleRangeEnd.getFullYear(),
      active: false,
    });
  }

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
