const apiKey = "42b4356220aa2eb75dca0417c75405b1"; // Replace with your API key

function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // Add the weather-fetched class to body for background change animation
    document.body.classList.add('weather-fetched');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weather-info").innerHTML = "City not found!";
            } else {
                // Display weather data with animation
                document.getElementById("weather-info").innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}
