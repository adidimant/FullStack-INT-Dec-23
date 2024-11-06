export function convertDayNumToDayName(day: number): string | Error {
  if (day > 6 || day < 0) {
    throw new Error("Number should be between 0 and 6 included.");
  }

  let dayName = "";
  switch (day) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
  }

  return dayName;
}
