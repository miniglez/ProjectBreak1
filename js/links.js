const addLinkBtn = document.getElementById("addLinkBtn")
const linkList = document.getElementById("linkList")


const printLinks = () => {
    linkList.innerHTML = ""
    for (i = 0; i < localStorage.length; i++){
        const button = document.createElement("button")
        button.id =  localStorage.key(i)
        button.insertAdjacentText("beforeend", localStorage.key(i).toUpperCase())
        linkList.insertAdjacentElement("afterbegin", button)
        document.getElementById(localStorage.key(i)).addEventListener("click", () =>{
            window.open(localStorage.getItem(localStorage.key(i)),'_blank')
        })
    }
}

addLinkBtn.addEventListener("click", () => {
    const linkName = document.getElementById("linkName").value
    const linkUrl = document.getElementById("linkUrl").value
    localStorage.setItem(linkName, linkUrl)
    printLinks()
})

printLinks()