const addLinkBtn = document.getElementById("addLinkBtn")
const linkList = document.getElementById("linkList")


const printLinks = () => {
    linkList.innerHTML = ""
    for (i = 0; i < localStorage.length; i++){
        const liLink = document.createElement("li")
        const button = document.createElement("a")
        button.classList.add("linkbutton")
        const closeButton = document.createElement("button")
        closeButton.innerText = "X"
        closeButton.classList.add("removeButton")
        closeButton.id = "close" + localStorage.key(i)
        button.id =  localStorage.key(i)
        button.href = localStorage.getItem(localStorage.key(i))
        button.insertAdjacentText("beforeend", localStorage.key(i).toUpperCase())
        liLink.insertAdjacentElement("beforeend", closeButton)
        liLink.insertAdjacentElement("afterbegin", button)
        linkList.insertAdjacentElement("beforeend", liLink)
        
        document.getElementById("close" + localStorage.key(i)).addEventListener("click", (i) => {
            removeElement(localStorage.key(i))
        })
        document.getElementById("close" + localStorage.key(i)).addEventListener("mouseenter", (i) => {
            document.getElementById(localStorage.key(i)).classList.toggle("disabled")
        })
        document.getElementById("close" + localStorage.key(i)).addEventListener("mouseleave", (i) => {
            document.getElementById(localStorage.key(i)).classList.toggle("disabled")
        })
    }
}

addLinkBtn.addEventListener("click", () => {
    const linkName = document.getElementById("linkName").value
    const linkUrl = document.getElementById("linkUrl").value
    localStorage.setItem(linkName, linkUrl)
    printLinks()
})

const removeElement = (a) => {
    localStorage.removeItem(a)
    printLinks()
}

printLinks()