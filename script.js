const apiKey = "e8e7b40ca343445986692837240809"; // Your API key
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
const baseUrl = 'http://api.weatherapi.com/v1/current.json?'

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function getWeather(city) {
    const response = await fetch(apiUrl + city);
    const data = await response.json();
    console.log(data);




    document.querySelector('.city').innerHTML = data.location.name;
    document.querySelector('.temp').innerHTML = data.current.temp_c + "°C";
    document.querySelector('.humidity').innerHTML = data.current.humidity + "%";
    document.querySelector('.wind').innerHTML = data.current.wind_kph + "km/h";



//     if (data.current.condition.text === "Sunny") {
//         weatherIcon.src = "./All img/clear.png";
//     } else if (data.current.condition.text === "Partly cloudy") {
//         weatherIcon.src = "./All img/mist.png";
//     } else if (data.current.condition.text === "Cloudy") {
//         weatherIcon.src = "./All img/clouds.png";
//     } else if (data.current.condition.text === "Overcast") {
//         weatherIcon.src = "./All img/drixxle.png";
//     } else if (data.current.condition.text === "Mist") {
//         weatherIcon.src = "./All img/mist.png";
//     } else if (data.current.condition.text === "Patchy rain possible") {
//         weatherIcon.src = "./All img/rain.png";
//     } else if (data.current.condition.text === "Patchy light rain") {
//         weatherIcon.src = "./All img/rain.png";
//     } else if (data.current.condition.text === "Light rain") {
//         weatherIcon.src = "./All img/rain.png";
//     } else if (data.current.condition.text === "Moderate or heavy rain shower") {
//         weatherIcon.src = "./All img/rain.png";
//     }

 }


searchBtn.addEventListener("click", () => {
    if(searchBox.value === "") {
        alert("Please enter a city");
    } else {
        getWeather(searchBox.value);
    }
    
});
