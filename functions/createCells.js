export function createCells(pickerDate, visibleRange) {
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
    new Date(visibleRange.getFullYear(), visibleRange.getMonth(), 1).getDay() +
    1;
  let daysBlockLength = 6 * 7;
  let nextMonthDaysLength =
    daysBlockLength - currentMonthLength - currentMonthFirstDayNumber + 1;
  let prevMonthDaysLength =
    daysBlockLength - currentMonthLength - nextMonthDaysLength;
  const dayCells = [];
  let dayNumber = prevMonthLength - 1;
  for (let i = prevMonthDaysLength; i > 0; i--) {
    dayCells.unshift({
      order: 1,
      dayNumber: dayNumber,
      monthNumber: visibleRange.getMonth() - 1,
      year: visibleRange.getFullYear(),
      active: false,
    });
    dayNumber--;
  }
  for (let i = 0; i < currentMonthLength; i++) {
    dayCells.push({
      order: 2,
      dayNumber: i,
      monthNumber: visibleRange.getMonth(),
      year: visibleRange.getFullYear(),
      active: true,
    });
  }
  for (let i = 0; i < nextMonthDaysLength; i++) {
    dayCells.push({
      dayNumber: i,
      monthNumber: visibleRange.getMonth() + 1,
      year: visibleRange.getFullYear(),
      active: false,
    });
  }
  return dayCells;
}
