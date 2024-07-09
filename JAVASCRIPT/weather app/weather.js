const apiKey="9c504b0578fc7601cb8e73dd7922cf6b"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q"

// &appid={apiKey}

const searchBtn=document.querySelector(".search button")
const SearchBox=document.querySelector(".search input")

async function checkWeather(city){
    fetch(apiUrl +city + `&appid=${apiKey}`)
}

searchBtn.addEventListener("click",()=>{
    checkWeather(SearchBox.value)

})
