function zeroFill(n) {
  return n < 9 ? `0${n}` : `${n}`;
}

function formatDate(date){
  const d = zeroFill(date.getDate());
  const mo = zeroFill(date.getMonth() + 1);
  const y = zeroFill(date.getFullYear());
  const h = zeroFill(date.getHours());
  const mi = zeroFill(date.getMinutes());
  const s = zeroFill(date.getSeconds());

  return `${d}/${mo}/${y} ${h}:${mi}:${s}`;
}

function render(data){
  const date = document.querySelector('.date');
  date.innerHTML = data;
}

// ISO 8601
// 23/12/2025 10:00:00
const stringDate = '2025-12-23T10:00:00';
const date = new Date(stringDate);

// add seconds
date.setSeconds(date.getSeconds()+100);

// add minutes
date.setMinutes(date.getMinutes()+120);

// add hours
date.setHours(date.getHours()+2);

// add days
date.setDate(date.getDate()+2);

// add Months
date.setMonth(date.getMonth()+2);

// add years
date.setFullYear(date.getFullYear()+2);

// add Milliseconds
date.setMilliseconds(date.getMilliseconds()+100000);

render(formatDate(date));

const start = new Date('2025-12-23T10:00:00');
const end = new Date('2026-10-23T10:00:00');
const result = end - start;
//              ms    s      m    h    d
const time = result / 1000 / 60 / 60 / 24;

render(time.toFixed(2));

