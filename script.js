const apiKey = "0b1ec8a0e086ca9d05374d11a43da9bf";

const showWeather = (weather) => {
    console.log(weather);
    const city = document.getElementById("cityName");
    const country = document.getElementById("country");
    const clouds = document.getElementById("clouds");
    const wind = document.getElementById("wind");
    const temperature = document.getElementById("temperature");
    const pressure = document.getElementById("pressure");
    const humidity = document.getElementById("humidity");
    city.textContent = weather.name;
    country.textContent = weather.sys.country;
    clouds.textContent = weather.weather[0].description;
    wind.textContent = `${weather.wind.speed} m/s`;
    temperature.textContent = `${Math.floor(weather.main.temp-273)}°`;
    pressure.textContent = `${weather.main.pressure} hPa`;
    humidity.textContent = `${weather.main.humidity} %`;
}

const getWeatherByLocation = (info) => {
    let lat = info.coords.latitude;
    let lon = info.coords.longitude;

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiURL)
        .then((response) => response.json())
        .then((response) => showWeather(response));
}

const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>getWeatherByLocation(position));
}

getMyLocation();