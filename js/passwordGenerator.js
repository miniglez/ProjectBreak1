const passResult = document.getElementById("passResult")
const buttonPasword = document.getElementById("buttonPasword")
const charArray = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*()-_=+"]

let pos0 = false
let pos1 = false
let pos2 = false
let pos3 = false

const selectChar = (number) => {
    const lenghtChar = charArray[number].length - 1
    let char = charArray[number][Math.floor(Math.random() * lenghtChar)]
    return char 
} 
const generatePassword = () => {
    const maxLenghtPass = document.getElementById("paswwordLength").value
    let password = ""
    pos0 = false
    pos1 = false
    pos2 = false
    pos3 = false
    for (let i = 0; i < maxLenghtPass; i++){
        const position = Math.floor(Math.random() * 4)
        password += selectChar(position)
        if(position == 0 && !pos0){
            pos0 = true
        }
        else if(position == 1 && !pos1){
            pos1 = true
        }
        else if(position == 2 && !pos2){
            pos2 = true
        }
        else if(position == 3 && !pos3){
            pos3 = true
        }
    }
    return password
}
buttonPasword.addEventListener("click", () => {
    let truePassword
    do{
        truePassword = generatePassword()
    }while(!pos0 && !pos1 && !pos2 && !pos3)
    console.log(truePassword)
    const temmplate = `
                        Contrseña:
                        <span>${truePassword}</span>
                    `
    passResult.innerHTML = temmplate
})