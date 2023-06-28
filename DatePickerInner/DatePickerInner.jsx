import React, { useState } from "react";
import "./DatePickerInner.css";
import { DaysBlockStart } from "../DaysBlockStart/DaysBlockStart";
import { DaysBlockEnd } from "../DaysBlockEnd/DaysBlockEnd";
import { DatePickerContainer } from "../DatePickerContainer/DatePickerContainer";

export function DatePickerInner({
  setPickerInput,
  setPickerInputEnd,
  handleShowDatePicker,
  pickerInput,
  pickerInputEnd,
}) {
  const [visibleRangeStart, setVisibleRangeStart] = useState(new Date())
  const [visibleRangeEnd, setVisibleRangeEnd] = useState(new Date())

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const weekDaysBlock = weekDays.map((weekDay) => {
    return <div className="cell week-day">{weekDay}</div>;
  });

  const handlePrevYear = (pickerDate, setDate) => {
    let newDate = new Date(
      pickerDate.setFullYear(pickerDate.getFullYear() - 1)
    );
    setDate(newDate);
  };
  const handlePrevMonth = (pickerDate, setDate) => {
    let newDate = new Date(pickerDate.setMonth(pickerDate.getMonth() - 1));
    setDate(newDate);
  };
  const handleNextMonth = (pickerDate, setDate) => {
    let newDate = new Date(pickerDate.setMonth(pickerDate.getMonth() + 1));
    setDate(newDate);
  };
  const handleNextYear = (pickerDate, setDate) => {
    let newDate = new Date(
      pickerDate.setFullYear(pickerDate.getFullYear() + 1)
    );
    setDate(newDate);
  };
  const setToday = (pickerDate, setDate) => {
    let today = new Date();
    setDate(today);
  };

  return (
    <div className="overlay">
      <DatePickerContainer
        pickerDate={visibleRangeStart}
        weekDaysBlock={weekDaysBlock}
        setToday={setToday}
        handleNextMonth={handleNextMonth}
        handleNextYear={handleNextYear}
        handlePrevMonth={handlePrevMonth}
        handlePrevYear={handlePrevYear}
        setDate={setVisibleRangeStart}
        months={months}
        setPickerInput={setPickerInput}
         
      >
        <DaysBlockStart
          visibleRangeStart={visibleRangeStart}
          pickerDate={pickerInput}
          pickerDateCompare={pickerInputEnd}
          setPickerInput={setPickerInput}
          handleShowDatePicker={handleShowDatePicker}
        />
      </DatePickerContainer>
      <DatePickerContainer
        pickerDate={visibleRangeEnd}
        weekDaysBlock={weekDaysBlock}
        setToday={setToday}
        handleNextMonth={handleNextMonth}
        handleNextYear={handleNextYear}
        handlePrevMonth={handlePrevMonth}
        handlePrevYear={handlePrevYear}
        setDate={setVisibleRangeEnd}
        months={months}
        setPickerInput={setPickerInputEnd}
        visibleRange={visibleRangeEnd}
      >
        <DaysBlockEnd
          visibleRangeEnd={visibleRangeEnd}
          pickerDate={pickerInputEnd}
          pickerDateCompare={pickerInput}
          setPickerInput={setPickerInputEnd}
          handleShowDatePicker={handleShowDatePicker}
        />
      </DatePickerContainer>
    </div>
  );
}
