const API_KEY = "1900068d0026418ca37446ad9246b929";



function onGeoOK(event) {
  console.log(event);
  const lat = event.coords.latitude;
  const lon = event.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then(response => response.json()
      .then(data => {
        const weather = document.querySelector("#weather > span:first-child");
        const city = document.querySelector("#weather > span:last-child");
        weather.innerText = data.name;
        city.innerText = ` | ${data.weather[0].main} | ${data.main.temp}`;
      }));
}

function onGeoError(event) {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);