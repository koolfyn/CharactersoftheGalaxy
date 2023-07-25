background = document.getElementById("display")

for (let planet of document.getElementsByClassName("planets")) {
    planet.addEventListener("click", changeWardrobe, false)
}
for (let item of document.getElementsByClassName("items")) {
    item.addEventListener("click", changeItem, false)
}


function changeWardrobe() {
    let name = this.id
    console.log(name)
    for (let wardrobe of document.getElementsByClassName("wardrobe")) {
        wardrobe.style.setProperty("display", "none")
        console.log("set none")
    }
    for (let wardrobe of document.getElementsByClassName(name)) {
        wardrobe.style.setProperty("display", "flex")
        console.log("set flex")
    }
    display.style.setProperty("background-image", "url("+name+"Background.png)")
}

function changeItem() {
    let type = this.className.split(" ")[1]
    let name = this.children[0].name
    console.log(name)
    document.getElementById("player_"+type).style.setProperty("background-image", "url("+name+"PERSON.png)")
}

    console.log(1)


let myModal = document.getElementById('myModal')
let myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
