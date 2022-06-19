// display the city
function changeCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#enter-city-input");
  let yourCity = document.querySelector(".yourcity");
  yourCity.innerHTML = inputCity.value;
  let apiKey = "6243bd378295e87dcd4f90e3e23db829";
  let city = inputCity.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", changeCity);

function showTemperature(response) {
  console.log(response);

  let currentCity = document.querySelector(".yourcity");
  currentCity.innerHTML = response.data.name;
  let temperatureNow = document.querySelector(".temperature");
  let temperature = Math.round(response.data.main.temp);
  console.log(response.data);
  temperatureNow.innerHTML = `${temperature}°`;
  let descriptionPlace = document.querySelector(".description");
  descriptionPlace.innerHTML = `${response.data.weather[0].description}`;
  let wind = document.querySelector(".wind");
  wind.innerHTML = response.data.wind.speed;
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = `💧 ${response.data.main.humidity} %`;
}

function showPosition(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiKey = "6243bd378295e87dcd4f90e3e23db829";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function allowLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", allowLocation);

// DATE AND TIME
let now = new Date();

// current day of week
let thisDay = document.querySelector(".this-day");
let days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY"
];
let day = days[now.getDay()];
thisDay.innerHTML = day;

// current hour
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let thisHour = document.querySelector(".this-hour");
thisHour.innerHTML = `${hours}:${minutes}`;

// current date
let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let currentDay = now.getDate();
let thisYear = now.getFullYear();
let currentDate = document.querySelector(".this-date");
currentDate.innerHTML = `${month} ${currentDay}, ${thisYear}`;
