const API_KEY = '7867e8b5c5d4e6275e823369897f46c3'
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
// const API = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// const IMG_URL =  https://openweathermap.org/img/wn/10d@2x.png
const getweather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    if(response.status=="404"){
        document.getElementById('btn').innerHTML="You have enter wrong city name";
        
    }
    return showWeather(data)
}


const showWeather = (data) => {
    console.log(data)
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" altc="">
        </div>
        <div>
            <h2>${data.main.temp} °C </h2>
            <h4>${data.weather[0].main} </h4>
            <h2>${data.wind.speed} kmph </h2>
            <h2>${data.main.humidity} %</h2>
            <h2>${data.main.pressure}</h2>
        </div>`
}
form.addEventListener(
    "submit",
    function(event) {
        getweather(search.value)
        event.preventDefault();

    }
)