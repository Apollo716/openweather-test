var title = document.getElementById("title");
var weather_img = document.getElementById("weather_img");
var temperature = document.getElementById("temperature");
var rainfall = document.getElementById("rainfall");
var rainfallProbability = document.getElementById("rainfall-probability");
var temp_icon = "";
var API_KEY = "b8f7634495464664e2e66abf191e3ece";
var city = "Tokyo";
var weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
fetch(weather_url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    temperature.innerHTML = `気温: ${data.main.temp}°C`;
    rainfallProbability.innerHTML = `降水確率: ${data.clouds.all}%`;
    var icon_url = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weather_img.src = icon_url;
  })
  .catch(error => console.error(error));