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
    H = H < 10 ? '0' + H: H;
    M = M < 10 ? '0' + M: M;
    S = S < 10 ? '0' + S: S;
    date.innerHTML = `${H}:${M}:${S}`;
  }, 1000);

  const responce = await fetch(
    "https://munich-software-studios.de/weather.json"
  );
  Weather = await responce.json();
  city.innerHTML = Weather.name;
  let changeWeather = Weather.main.temp - 273.15;
  current.innerHTML = changeWeather + "c";
  let Heigh = Weather.main.temp_max - 273.15;
  high.innerHTML = "high: " + Heigh + "c";
  let Low = Weather.main.temp_min - 273.15
  low.innerHTML = "low: " + Low + "c";
}
getWeather();
