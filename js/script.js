const key = "88f3bd469904fc5b50b51d22c9bbfb4e"

function showDataScreen(data) {
    document.querySelector('.city').innerHTML = "Tempo em " + data.name
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + " °C"
    document.querySelector('.text-forecast').innerHTML = data.weather[0].description
    document.querySelector('.sensation').innerHTML = "Sensação Térmica: " + Math.floor(data.main.feels_like) + " °C"
    document.querySelector('.humidity').innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector('.img-forecast').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}


 async function searchCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then (response => response.json ())

    showDataScreen(data)
}


function clickButton() {
    const city = document.querySelector('.input-city').value

    searchCity(city)

}