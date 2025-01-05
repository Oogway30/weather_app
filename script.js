let button = document.querySelector('.Enter-button')
let temperature = document.querySelector('.temperature')
let feel_like = document.querySelector(".feels_like")
let wind_speed = document.querySelector(".Wind_speed_value")
let humidity = document.querySelector(".humidity_value")
async function fetch_api(url){
    let data = await fetch(url)
    let data_dict = await data.json()
    return data_dict
}
button.addEventListener('click',async function() {
    let input_value = document.querySelector('#input-field').value
    let url ='https://api.openweathermap.org/data/2.5/weather?q='+input_value+'&appid=5778458bdfbefdd519b2c33a67bbce9e&units=metric'
    let api = await fetch_api(url)
    temperature.innerHTML = api['main']['temp'] +'°C'
    feel_like.innerHTML = 'Feels like: '+api['main']['feels_like']+'°C'
    wind_speed.innerHTML = api['wind']['speed']+'km/h'
    humidity.innerHTML = api['main']['feels_like']+'%'
    wind_speed.style.ba
})