const apiKey = process.env.API_KEY;
let unit = 'metric';
let lastCity = ''; // Track the last searched city

async function getWeather() {
  const city = document.getElementById('city-input').value || lastCity;

  if (city) {
    lastCity = city; // Update the last searched city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    const response = await fetch(url);
    const data = await response.json();
    displayCurrentWeather(data);
    getForecastData(data.coord.lat, data.coord.lon);
  } else {
    // If no city is entered, get weather based on geolocation
    getWeatherForCurrentLocation();
  }
}

document.getElementById('unit-toggle-btn').addEventListener('click', () => {
  unit = unit === 'metric' ? 'imperial' : 'metric';
  document.getElementById('unit-toggle-btn').textContent = `Switch to ${unit === 'metric' ? 'Fahrenheit' : 'Celsius'}`;
  getWeather(); // Re-fetch weather data with the updated unit
});

function displayCurrentWeather(data) {
  document.getElementById('city-name').textContent = data.name;
  document.getElementById('chance-of-rain').textContent = `Chance of rain: ${data.clouds.all}%`;
  document.getElementById('current-temp').textContent = `${Math.round(data.main.temp)}°`;
  document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  document.getElementById('real-feel').textContent = `${Math.round(data.main.feels_like)}°`;
  document.getElementById('wind-speed').textContent = `${data.wind.speed} ${unit === 'metric' ? 'km/h' : 'mph'}`;
  document.getElementById('rain-chance').textContent = `${data.clouds.all}%`;
  document.getElementById('humidity').textContent = `${data.main.humidity}%`;
}

async function getForecastData(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  const response = await fetch(url);
  const data = await response.json();
  displayTodayForecast(data);
  displayWeeklyForecast(data);
}

function displayTodayForecast(data) {
  const todayForecast = document.getElementById('today-forecast-list');
  todayForecast.innerHTML = '';
  for (let i = 0; i < 8; i++) {
    const hourData = data.list[i];
    const iconUrl = `http://openweathermap.org/img/wn/${hourData.weather[0].icon}.png`;
    const hour = new Date(hourData.dt_txt).getHours();
    const temp = Math.round(hourData.main.temp);

    todayForecast.innerHTML += `
            <div>
                <p>${hour}:00</p>
                <img src="${iconUrl}" alt="${hourData.weather[0].description}">
                <p>${temp}°</p>
            </div>
        `;
  }
}

function displayWeeklyForecast(data) {
  const weeklyForecast = document.getElementById('weekly-forecast-list');
  weeklyForecast.innerHTML = '';
  for (let i = 0; i < data.list.length; i += 8) {
    const dayData = data.list[i];
    const iconUrl = `http://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`;
    const day = new Date(dayData.dt_txt).toLocaleDateString('en-US', { weekday: 'short' });
    const high = Math.round(dayData.main.temp_max);
    const low = Math.round(dayData.main.temp_min);

    weeklyForecast.innerHTML += `
            <div>
                <p>${day}</p>
                <img src="${iconUrl}" alt="${dayData.weather[0].description}">
                <p>${high} / ${low}°</p>
            </div>
        `;
  }
}

// Get weather for the current location
async function getWeatherForCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
      const response = await fetch(url);
      const data = await response.json();
      displayCurrentWeather(data);
      getForecastData(lat, lon);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Listen for changes in the unit toggle and update the weather accordingly
document.querySelectorAll('input[name="unit"]').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    unit = event.target.value;
    getWeather(); // Re-fetch weather data with updated unit
  });
});
