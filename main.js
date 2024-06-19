async function getWeather() {
  const current = document.querySelector(".current");
  const city = document.getElementById("city");
  const high = document.querySelector(".high");
  const low = document.querySelector(".low");
  const date = document.querySelector(".date");
  let Weather;
  setInterval(function () {
    let currentTime = new Date();
    let H = currentTime.getHours();
    let M = currentTime.getMinutes();
    let S = currentTime.getSeconds();
    date.innerHTML = `${H}:${M}:${S}`;
  }, 1000);

  const responce = await fetch(
    "https://munich-software-studios.de/weather.json"
  );
  Weather = await responce.json();
  city.innerHTML = Weather.name;
  current.innerHTML = Weather.main.temp;
  high.innerHTML = "high: " + Weather.main.temp_max;
  low.innerHTML = "low: " + Weather.main.temp_min;
}
getWeather();
