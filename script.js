const apiKey = "4ffe4b718aa2d5dbb46fa0a7a33e15a7";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weathericon");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 

            var data = await response.json();

            console.log(data);

            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C"
            ;
            document.querySelector(".city").innerHTML=data.name;
            
            document.querySelector(".Wing").innerHTML=data.wind.speed + " Km/h"
            ;
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%"
            ;
            if(data.weather[0].main=="clouds"){
                weatherIcon.src="Image/clouds.png"
            }
            else if(data.weather[0].main=="Clear"){
                weatherIcon.src="Image/clear.png"
            }
            else if(data.weather[0].main=="Rain"){
                weatherIcon.src="Image/rain.png"
            }
            else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="Image/drizzle.png"
            }
            else if(data.weather[0].main=="Mist"){
                weatherIcon.src="Image/mist.png"
            }
        }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        });