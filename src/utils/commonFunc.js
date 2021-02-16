/** increase 30 minutes than param */
export function addMinutes(date) {
  return new Date(date.getTime() + 30 * 60000)
}

/** set time to 00 or 30 minutes */
export function initTimeToHalf(date) {
  if(date.getMinutes() > 0 && date.getMinutes() <= 30) {
    date.setMinutes(30);
  }
  else {
    date.setHours(date.getHours() + 1);
    date.setMinutes(0);
  }
  return new Date(date);
}

export function initTimeToZero(date) {
  return new Date(date.setMinutes(0));
}

export function changeTimeToHalf(date) {
  if(date.getMinutes() === 1 || date.getMinutes() === 59) {
    date.setMinutes(30);
  }
  else {
    date.setMinutes(0);
  }
  return new Date(date);
}