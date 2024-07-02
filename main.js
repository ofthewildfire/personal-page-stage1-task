const currentDayElement = document.querySelector(".current-day");
const currentTimeElement = document.querySelector(".current-time");

const daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Add day to page
const d = new Date();
const dayOfTheWeek = daysArray[d.getDay()];
currentDayElement.textContent = dayOfTheWeek;

// Add time in UTC to the page

function updateTime() {
  const now = new Date();
  const hours = now.getUTCHours();
  const mins = now.getUTCMinutes();
  const secs = now.getUTCSeconds();

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    mins
  ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  currentTimeElement.textContent = `${formattedTime} UTC`;
}

updateTime();
setInterval(updateTime, 1000);
