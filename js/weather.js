const weather = document.getElementById("weather")

const getWeather = async () => {
    const res = await fetch("https://api.weatherapi.com/v1/forecast.json?key=33d81377093f41c0b70181221241807&q=madrid&aqi=no")
    const data = await res.json()
    console.log(data)
    const template =
    `
        <div id="currentTime">
            <h2>${data.location.name} / ${data.location.country}</h2>
            <p>${data.current.condition.text}</p>
            <div>
                <img src=${data.current.condition.icon} alt="${data.current.condition.text}"/>
                <span>${data.current.temp_c}º</span>
                <ul>
                    <li>Precipitaciones: ${data.current.precip_in}%</li>
                    <li>Humedad: ${data.current.humidity}%</li>
                    <li>V. viento: ${data.current.condition.wind_kph}Km/h</li>
                </ul>
            </div>
        </div>
    `
    const hourLu = nextDay(data.forecast.forecastday[0].hour)
    weather.innerHTML = template
    weather.insertAdjacentElement("beforeend", hourLu)
}

const nextDay = (data) => {
    const elementUl = document.createElement("ul")
    for(ele of data){
        const elementLi = document.createElement("li")
        const elementH2 = document.createElement("h2")
        const elementImg = document.createElement("img")
        const elementP = document.createElement("p")
        elementH2.innerText = ele.time.substring(11)
        elementImg.src = ele.condition.icon
        elementP.innerText = ele.temp_c
        elementLi.insertAdjacentElement("beforeend", elementH2)
        elementLi.insertAdjacentElement("beforeend", elementImg)
        elementLi.insertAdjacentElement("beforeend", elementP)
        elementUl.insertAdjacentElement("beforeend", elementLi)
    }
    console.log(elementUl)
    return elementUl
}

getWeather()