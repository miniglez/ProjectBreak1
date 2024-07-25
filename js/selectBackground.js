const body = document.body
console.log(body)
let count = 1
const selectBackground = () => {
    document.body.style.backgroundImage = "url(../assets/background/background" + count + ".jpg)"
    count ++
    if (count > 10){
        count = 1
    }
    console.log("Termina la funcion")
}

selectBackground()

setInterval((() => {
    selectBackground()
}),10000)
