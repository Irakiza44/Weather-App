const apiKey = "ad9198b93112f8654f2975ff717ea8ed"; //OpenWeatherMap API key

const city = document.getElementById("city");
const country = document.getElementById("country");
const temp = document.getElementById("temp");
const description = document.getElementById("description");

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      city.textContent = data.name;
      country.textContent = data.sys.country;
      temp.textContent = `${Math.round(data.main.temp)}°C`;
      description.textContent = data.weather[0].description;
    })
    .catch(error => console.error(error));
}

function error() {
  console.error("Unable to retrieve your location");
}
