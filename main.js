const cityInput = document.querySelector(".Input-text")
const btn= document.querySelector(".btn")

btn.addEventListener("click",() => {
    console.log(cityInput.value)

    getData(cityInput.value)
})

function getData(name){

    const API = "d13553d45f9734135f672515ff659be7"
     const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`
     console.log(baseURL)
    
     fetch(baseURL)
     .then(res => (res.json()))
     .then(data => {
        const{name, sys:{country}, main: 
        {temp, feels_like,humidity},wind:{speed}, weather:[{description}]}=data ;
        console.log (country,temp, speed,description,feels_like,humidity)

       const city =document.querySelector("#sehir")
       const temprature =document.querySelector("#sicaklik")
       const weatherdesc =document.querySelector("#havadurumu")
       const feel =document.querySelector("#hisedilen")
       const hum =document.querySelector("#humidity")
       const wind =document.querySelector("#wind")
       console.log(feel, hum, wind, temprature, weatherdesc, city)

       city.textContent = `${name}, ${country}`;
       temprature.innerHTML = `${temp}°`; 
       hum.textContent = `Nem: %${humidity}`;
       wind.innerHTML = `Rüzgar:${speed}km/saat`;
       weatherdesc.textContent = `Hava Durumu: ${description}`;
       feel.innerHTML = `Hisedilen Sıcaklık: ${feels_like}°`;


    })
     .catch(err => console.log(err))

cityInput.value = "";
cityInput.focus ()


    }
