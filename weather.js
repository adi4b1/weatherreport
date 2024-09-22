const API_KEY = "92e75c1afa55e5daa01bb2bffe5c5deb";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let input = document.querySelector("#inputBox");

let button = document.querySelector("#submitButton");

let weatherImg = document.querySelector(".wImg");

async function getWeather(city) {
  try {
        const getData = await fetch(API_URL + city + `&appid=${API_KEY}`);

        // console.log(data);

        if (Response.status == 404) {
        document.querySelector(".notFound").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        } else {
        var data = await getData.json();
        }
        document.querySelector(".notFound").style.display = "none";
        document.getElementById("forCityName").innerHTML = data.name;
        document.getElementById("forTemp").innerHTML =
        Math.round(data.main.temp) + "°c";
        document.getElementById("forHum").innerHTML = data.main.humidity + "%";
        document.getElementById("forwind").innerHTML = data.wind.speed + "km/h";

        let ct = Math.round(data.main.temp);
        if (ct > 30) {
        weatherImg.src = "images/download.jpg";
        weatherImg.style.mixBlendMode = "darken";
        } else if (ct < 0) {
        weatherImg.src = "images/cold.jpg";
        } else if (ct > 10 && ct < 29) {
        weatherImg.src = "images/normalsun.jpg";
        } else {
        weatherImg.src = "images/cloud.jpg";
        }
        document.querySelector('.weather').style.display="block"
  } catch (error) {
    document.querySelector(".notFound").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    // console.log('city not found');
    // document.getElementById("forCityName").innerHTML =
    //   "<h1>city not found</h1>";
    // document.getElementById("forTemp").innerHTML = "";
    // document.getElementById("forHum").innerHTML = "";
    // document.getElementById("forwind").innerHTML = "";
    // weatherImg.innerHTML = "";
  }
}

button.addEventListener("click", () => {
  if (
    input.value === "" ||
    input.value === NaN ||
    input.value === null ||
    input.value === undefined
  ) {
    alert("please type city name");
  } else {
    getWeather(input.value);
  }
});
