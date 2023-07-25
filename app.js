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
    console.log(1)
}