/* Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

function timeConversion(s) {
  const timeArr = s.split(':');
  let hours = timeArr[0] % 12;

  if (s.endsWith('PM')) hours += 12;

  return `${hours}:${timeArr[1]}:${timeArr[2].substring(0, 2)}`.padStart(
    8,
    '0'
  );
}
