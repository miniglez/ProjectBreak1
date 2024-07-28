const body = document.body
const title = document.title
console.log(title)
let count = Math.floor((Math.random()*10)+1)
const selectBackground = () => {
    if(title == "Dashboard"){
        document.body.style.backgroundImage = "url(./assets/background/background" + count + ".jpg)"
    }
    else{
        document.body.style.backgroundImage = "url(../assets/background/background" + count + ".jpg)"
    }
    count ++
    if (count > 10){
        count = 1
    }
}

selectBackground()

setInterval((() => {
    selectBackground()
}),10000)
