
/* const right = document.querySelector('.right');

async function getHour() {
  const date = document.querySelector(".date");
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
}


  async function getWeather(){
    const current = document.querySelector(".current");
    const city = document.getElementById("city");
    const high = document.querySelector(".high");
    const low = document.querySelector(".low");
    let Weather;
    const responce = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=48.1371079&lon=11.5753822&appid=479b0f9031755d166ccc82e956e98851")
      Weather = await responce.json();
      city.innerHTML = Weather.name;
      let changeWeather = Weather.main.temp - 273.15;
      current.innerHTML = changeWeather.toFixed(1) + "c";
      let Heigh = Weather.main.temp_max - 273.15;
      high.innerHTML = "high: " + Heigh.toFixed(1) + "c";
      let Low = Weather.main.temp_min - 273.15
      low.innerHTML = "low: " + Low.toFixed(1) + "c";

  }
  right.addEventListener('click', getWeatherb);

  async function getWeatherb(){
    const current = document.querySelector(".current");
    const city = document.getElementById("city");
    const high = document.querySelector(".high");
    const low = document.querySelector(".low");
    let Sunrise = document.getElementById('Sunrise');
    let Sunset = document.getElementById('Sunset');
    let sunriseTimestamp = 1718766790;
    let sunsetTimestamp = 1718766790;
    let sunriseDate = new Date(sunriseTimestamp * 1000);
    let sunsetDate = new Date( sunsetTimestamp * 1000);

    let Weather;
    const responce = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=53.550341&lon=10.000654&appid=479b0f9031755d166ccc82e956e98851")
      Weather = await responce.json();
      city.innerHTML = Weather.name;
      let changeWeather = Weather.main.temp - 273.15;
      current.innerHTML = changeWeather.toFixed(1) + "c";
      let Heigh = Weather.main.temp_max - 273.15;
      high.innerHTML = "high: " + Heigh.toFixed(1) + "c";
      let Low = Weather.main.temp_min - 273.15
      low.innerHTML = "low: " + Low.toFixed(1) + "c";
      let currentTime = new Date();
       let lll= Weather.sys.sunrise * 1000;
       Sunrise.innerHTML = new Date(lll);
       let llll= Weather.sys.sunset * 1000;
      Sunset.innerHTML = new Date(llll);

  }

  getHour();
  getWeather();
  getWeatherb() */







  //_______________________________________________________new API__________________________________________________________________

 let url = "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=0a182cf57df47a5803d84780629a957c";

debugger;
  async function getWeather(){
    const current = document.querySelector(".current");
    const city = document.getElementById("city");
    const high = document.querySelector(".high");
    const low = document.querySelector(".low");
    let Weather;
    const responce = await fetch(url);
      Weather = await responce.json();
      city.innerHTML = Weather.name;
      let changeWeather = Weather.main.temp - 273.15;
      current.innerHTML = changeWeather.toFixed(1) + "c";
      let Heigh = Weather.main.temp_max - 273.15;
      high.innerHTML = "high: " + Heigh.toFixed(1) + "c";
      let Low = Weather.main.temp_min - 273.15
      low.innerHTML = "low: " + Low.toFixed(1) + "c";

  }

  async function getWeatherb(){
    const current = document.querySelector(".current");
    const city = document.getElementById("city");
    const high = document.querySelector(".high");
    const low = document.querySelector(".low");
    let Sunrise = document.getElementById('Sunrise');
    let Sunset = document.getElementById('Sunset');
    let sunriseTimestamp = 1718853216;
    let sunsetTimestamp = 1718917610;
    let sunriseDate = new Date(sunriseTimestamp * 1000);
    let sunsetDate = new Date( sunsetTimestamp * 1000);

    let Weather;
    const responce = await fetch(url)
      Weather = await responce.json();
      city.innerHTML = Weather.name;
      let changeWeather = Weather.main.temp - 273.15;
      current.innerHTML = changeWeather.toFixed(1) + "c";
      let Heigh = Weather.main.temp_max - 273.15;
      high.innerHTML = "high: " + Heigh.toFixed(1) + "c";
      let Low = Weather.main.temp_min - 273.15
      low.innerHTML = "low: " + Low.toFixed(1) + "c";
      let currentTime = new Date();
       let lll= Weather.sys.sunrise * 1000;
       Sunrise.innerHTML = new Date(lll);
       let llll= Weather.sys.sunset * 1000;
      Sunset.innerHTML = new Date(llll);

  }
  getWeather()
  getWeatherb()





  
 

