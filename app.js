for (let planet of document.getElementsByClassName("planets")) {
    planet.addEventListener("click", changeWardrobe, false)
}

function changeWardrobe() {
    console.log(1)
    let name = this.value
    console.log("1")
    for (let wardrobe of document.getElementsByClassName("wardrobe")) {
        wardrobe.style.setProperty("display", "none")
    }
    for (let wardrobe of document.getElementsByClassName(name)) {
        wardrobe.style.setProperty("display", "flex")
    }
}