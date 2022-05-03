let apiKey = "2a2eb7984c02aca7e1add2c64025b4ae";
let units = "metric";
let city = "San Francisco";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

//axios.get(apiUrl).then(showTemperature);

let now = new Date();
let time = document.querySelector(".dayTime");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours= `0${hours}`;
}
let minutes = now.getMinutes();
if(minutes < 10) {
  minutes = `0${minutes}`;
}

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

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let currentTemp = document.querySelector("#temperature");
  let iconELement = document.querySelector("#icon");
  let name = response.data.name;
  let cityName = `${name}`;
  let cityTemp = `${temperature}`;
  let city = document.querySelector(".location");
  
celsiusTemperature = response.data.main.temp;

  city.innerHTML = cityName;
  currentTemp.innerHTML = `${cityTemp}`;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconELement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function searchCity(city) {
  let apiKey = "2a2eb7984c02aca7e1add2c64025b4ae";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-text-input");
  searchCity(cityInput.value);

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  alert("Link clicked");

  function displayCelsiusTemp(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelectort("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
  }

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);

 search("San Francisco");