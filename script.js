const apiKey = "e8e7b40ca343445986692837240809"; // Your API key
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
const baseUrl = 'http://api.weatherapi.com/v1/current.json?'

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function getWeather(city) {
    const response = await fetch(apiUrl + city);
    const data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.location.name;
    document.querySelector('.temp').innerHTML = data.current.temp_c + "°C";
    document.querySelector('.humidity').innerHTML = data.current.humidity + "%";
    document.querySelector('.wind').innerHTML = data.current.wind_kph + "km/h";
}

searchBtn.addEventListener("click", () => {
    if(searchBox.value === "") {
        alert("Please enter a city");
    } else {
        getWeather(searchBox.value);
    }
    
});
