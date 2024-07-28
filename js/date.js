const date = document.getElementById("date");
const frase = document.getElementById("frase");
const title = document.title;

const formatDate = (a) => {
    if (a < 10){
        return "0" + a
    }
    else{
        return a
    }
}

const setFrase = (theHour, minute) => {
    if(title == "Date"){
        if(theHour < 7 && theHour != 0 && minute!= 0 || theHour == 7 && minute == 0){
            frase.innerHTML = "Es hora de descansar. Apaga y sigue mañana"
        }
        else if(theHour < 12 || theHour == 12 && minute == 0){
            frase.innerHTML = "Buenos días, desayuna fuerte y a darle al código"
        }
        else if(theHour < 14 || theHour == 14 && minute == 0){
            frase.innerHTML = "Echa un rato más pero no olvides comer"
        }
        else if(theHour < 16 || theHour == 16 && minute == 0){
            frase.innerHTML = "Espero que hayas comido"
        }
        else if(theHour < 18 || theHour == 18 && minute == 0){
            frase.innerHTML = "Buenas tardes, el último empujón"
        }
        else if(theHour < 22 || theHour == 22 && minute == 0){
            frase.innerHTML = "Esto ya son horas extras, ... piensa en parar pronto"
        }
        else {
            frase.innerHTML = "Buenas noches, es hora de pensar en parar y descansar"
        }
    }
}

const getHour = () => {
    date.innerHTML = ""
    const hour = formatDate(new Date().getHours())
    const minute = formatDate(new Date().getMinutes())
    const second = formatDate(new Date().getSeconds())
    const template = `<h2>${hour}:${minute}:${second}</h2>`;
    setFrase(hour, minute)
    return template
}

const getDay = () => {
    date.innerHTML = ""
    const day = formatDate(new Date().getDate())
    const month = formatDate(new Date().getMonth() + 1)
    const year = formatDate(new Date().getFullYear())
    const template = `<p>${day}/${month}/${year}</p>`
    return template
}

const setDay = () => {
    date.innerHTML = ""
    let template = getHour() + getDay()
    date.insertAdjacentHTML("afterbegin", template)
}

setDay()
setInterval(()=> {setDay()},1000)
