import React, { useState } from "react";
import { DatePickerInner } from "../DatePickerInner/DatePickerInner";

export function DatePickerRange({isOpen}) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pickerInput, setPickerInput] = useState(new Date());
  const [pickerInputEnd, setPickerInputEnd] = useState(new Date());

  function handleShowDatePicker() {
    setShowDatePicker(!showDatePicker);
  }
  if(isOpen){
    return (
      <>
        <input
          defaultValue={pickerInput}
          value={pickerInput.toLocaleDateString()}
          onClick={handleShowDatePicker}
        />
        <input
          defaultValue={pickerInputEnd}
          value={pickerInputEnd.toLocaleDateString()}
          onClick={handleShowDatePicker}
        />
        {showDatePicker ? (
          <DatePickerInner
            setPickerInput={setPickerInput}
            setPickerInputEnd={setPickerInputEnd}
            handleShowDatePicker={handleShowDatePicker}
            pickerInput={pickerInput}
            pickerInputEnd={pickerInputEnd}
          />
        ) : null}
      </>
    );
  }
  
}
