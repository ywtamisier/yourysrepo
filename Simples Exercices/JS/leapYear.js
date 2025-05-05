/*  Criteria to be Leap Year:
1) The year must be evenly divisible by 4;
2) If the year can also be evenly divided by 100, it is not a leap year;
unless...
3) The year is also evenly divisible by 400. Then it is a leap year. */

var selectedYear = 2004;

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  
}
}

isLeapYear(selectedYear);
