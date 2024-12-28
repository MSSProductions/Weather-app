
const temperature = document.getElementById('temperature');
const weather = document.getElementById('weather');
const apiKey = '2c5a6909fb80a6bb3bd81dac74aca4c1'
const submitBtn = document.getElementById('submit');


const city = document.getElementById('city');


document.getElementById('weatherForm').addEventListener('submit', event => {
    const cityName = document.getElementById('cityInput').value.trim();
    fetchWeather(cityName);
    event.preventDefault();
})


function fetchWeather(cityName) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`).
    then(response => response.json()).
    then(data => {
        console.log(data);
        displayWeather(data)
    }).
    catch(error => console.error(error))
}

function displayWeather(data) {
    city.textContent = `City: ${data.name}`;
    temperature.textContent = `Temperature: ${Math.floor(data.main.temp-273)} °C`;
    weather.textContent = `Weather: ${data.weather[0].main}, ${data.weather[0].description} `
}
