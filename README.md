# Weather App

The **Weather App** is a dynamic web application that enables users to search for weather in specific cities or get the current weather for their location. It displays detailed weather information, including temperature, chance of rain, wind speed, humidity, and forecasts. The app utilizes the OpenWeatherMap API to fetch real-time weather data.

## Features

- **Search Cities:** Enter the name of a city to get the current weather and forecast.
- **Current Location:** Get the weather for your current geographic location.
- **Temperature Unit Toggle:** Switch between Celsius and Fahrenheit for temperature readings.
- **Current Weather Details:** View comprehensive weather details, including temperature, chance of rain, wind speed, and humidity.
- **Today's Forecast:** Hourly forecast for the current day.
- **5-Day Forecast:** Daily weather predictions for the next five days.

## Project Structure

- **HTML:** 
  - `index.html` — The foundation of the app’s user interface.
- **CSS:** 
  - `css/styles.css` — Styles to ensure a responsive and visually appealing layout.
- **JavaScript:** 
  - `js/app.js` — Handles the fetching, processing, and displaying of weather data.

## Setup

### Prerequisites

- Obtain an API key from OpenWeatherMap to access weather data.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Set up your API key:**

   - Locate the `apiKey` variable in `js/app.js` and replace it with your OpenWeatherMap API key.

3. **Run the app:**

   - Open `index.html` in a web browser to start using the application.

## Usage

- **Search for Weather:** Enter a city in the input field and click "Search" to view weather data for that location.
- **Current Location Weather:** Click "Current Location" to get real-time weather data for your current position.
- **Toggle Temperature Unit:** Use the toggle button to switch between Celsius and Fahrenheit.
- **View Today's Forecast:** Observe hourly weather updates for the current day.
- **View 5-Day Forecast:** Inspect the upcoming weather forecast for the next five days.

## Code Overview

- **API Requests:** Utilizes `api.openweathermap.org/data/2.5/weather` for current weather conditions and `api.openweathermap.org/data/2.5/forecast` for hourly and daily forecasts.
- **Unit Management:** Option to toggle temperature display between Celsius and Fahrenheit.
- **Local Weather Detection:** Uses geolocation to fetch weather data for the user's current location.
- **Dynamic Display:** Weather information and forecasts are dynamically displayed using JavaScript, ensuring up-to-date data presentation.

## Technologies Used

- **HTML:** Structures the layout and content of the application.
- **CSS:** Provides styling for a visually appealing and responsive design.
- **JavaScript:** Implements core functionalities such as data fetching, DOM manipulation, and interactive features like the unit toggle and geolocation.

## Future Enhancements

- **Enhanced Forecast Detail:** Provide more detailed weather information in the forecasts.
- **Graphical Data Representation:** Introduce charts or graphs to depict weather trends over time.
- **User Authentication:** Allow users to save favorite cities for quick access to weather information.

Stay informed about the weather with the Weather App—your reliable source for accurate and up-to-date weather conditions!
