const axios = require("axios");
const api = require("./api.json");
const location = process.argv.slice(2).join(' ');
const cityName = location || "Lagos";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api.key}`;

axios.get(url)
    .then(
        (response) => {
            console.log(`The temperature in ${response.data.name} is ${response.data.main.temp}°C`);
        }
    )
    .catch((error) => {
        console.log(error);
    });