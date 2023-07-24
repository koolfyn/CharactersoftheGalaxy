for (let planet of document.getElementsByClassName("planets")) {
    planet.addEventListener("click", changeWardrobe, false)
}
for (let clothe of document.getElementsByClassName("clothes")) {
    clothe.addEventListener("click", changeClothe, false)
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
}

function changeClothe() {
    
}