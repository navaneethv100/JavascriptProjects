const apiKey = "edcafed611c93abf4a764a52c2edf1ea"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }else{

        let data = await response.json();
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+`°C`;
        document.querySelector('.humidity').innerHTML = data.main.humidity+ `%`;
        document.querySelector('.wind').innerHTML = data.wind.speed+` Km/Hr`;


        const weatherImg = data.weather[0].main;
        console.log(weatherImg.toLowerCase());

        const imagesPng = ["clear", "clouds", "drizzle", "mist", "rain", "snow", "windy"]
        if(imagesPng.includes(weatherImg.toLowerCase())){
            weatherIcon.src = `images/${weatherImg.toLowerCase()}.png`
        }else{
            weatherIcon.src = `images/clear.png`
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})









