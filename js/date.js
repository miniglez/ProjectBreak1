const date = document.getElementById("date");

const formatDate = (a) => {
    if (a < 10){
        return "0" + a
    }
    else{
        return a
    }
}

const getHour = () => {
    date.innerHTML = ""
    const hour = formatDate(new Date().getHours())
    const minute = formatDate(new Date().getMinutes())
    const second = formatDate(new Date().getSeconds())
    const template = `<div>${hour}:${minute}:${second}</div>`;
    return template
}

const getDay = () => {
    date.innerHTML = ""
    const day = formatDate(new Date().getDate())
    const month = formatDate(new Date().getMonth() + 1)
    const year = formatDate(new Date().getFullYear())
    const template = `<div>${day}/${month}/${year}</div>`
    return template
}

const setDay = () => {
    date.innerHTML = ""
    let template = getHour() + getDay()
    date.insertAdjacentHTML("afterbegin", template)
}

setDay()
setInterval(()=> {setDay()},1000)
