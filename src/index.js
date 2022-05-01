function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-text-input");
  searchCity(cityInput.value);
}
function searchCity(city) {
  let apiKey = "2a2eb7984c02aca7e1add2c64025b4ae";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let name = response.data.name;
  let cityName = `${name}`;
  let cityTemp = `${temperature}`;
  let city = document.querySelector(".location");
  let currentTemp = document.querySelector(".lower-text");
  let iconELement = document.querySelector("#icon");

  city.innerHTML = cityName;
  currentTemp.innerHTML = `${cityTemp} °C`;
  humidityElement.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  iconELement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let apiKey = "2a2eb7984c02aca7e1add2c64025b4ae";
let units = "metric";
let city = "San Francisco";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);

let now = new Date();
let time = document.querySelector(".dayTime");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

//let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];

time.innerHTML = `${day} ${date}, ${hours}:${minutes}`;
