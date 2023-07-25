let background = document.getElementById("display")
let resetButton = document.getElementById("resetButton")
let facts = {
    earth: ["Earth rotates at 1000 miles per hour.", "Earth is 4.5 billion years old.", "Earth has three layer: the crust, the mantle, and the core.", "71% of the Earth's surface is water.", "7.4 billion people live on Earth."],
    mars: ["Mars is covered in soil, rock, and dust made from iron oxide which gives the surface a red rusty color.", "Mars is home to Olympus Mons, a dormant volcano and the largest volcano and highest mountain in our solar system. It is 16 miles high and 600 km across the base, making it 3x the height of Mount Everest.", "As it’s so close to Earth, Mars is the planet that humans will most likely step foot on and explore first.", "Mars’ surface has many channels, plains, and canyons which could have been caused by water erosion (water wearing away the surface). This could be evidence that open water in liquid form once existed on the surface billions of years ago.", "Mars has north and south poles like earth. The polar ice caps are covered in a layer of frozen carbon dioxide (dry ice)."],
    saturn: ["You cannot stand on Saturn.", "Saturn would float in water because it is mostly made of gas.", "Saturn has more moons than any other planet in the solar system.", "A day on Saturn is only 10.7 hours and a year is 29 Earth years.", "The day Saturday was named after Saturn."],
    GJ_504b: ["It is the lowest-mass planet ever detected around a star.","It is 460 degrees Fahrenheit (237 Celsius) which causes the pink color."],
    "PSR_B1620-26_B": ["It takes 95 years to complete one orbit of its star,", "It is really old: 12.7 billion years old! It is the oldest planet that has ever been found by the scientists."]
}

resetButton.addEventListener("click", resetOutfit, false)

for (let planet of document.getElementsByClassName("planets")) {
    planet.addEventListener("click", changeWardrobe, false)
    planet.addEventListener("click", changeFacts, false)
}
for (let item of document.getElementsByClassName("items")) {
    item.addEventListener("click", changeItem, false)
}


function changeWardrobe() {
    let name = this.id
    for (let wardrobe of document.getElementsByClassName("wardrobe")) {
        wardrobe.style.setProperty("display", "none")
    }
    for (let wardrobe of document.getElementsByClassName(name)) {
        wardrobe.style.setProperty("display", "flex")
    }
    display.style.setProperty("background-image", "url("+name+"Background.png)")
}

function changeItem() {
    let type = this.className.split(" ")[1]
    let name = this.children[0].name
    console.log(name)

    if (type=="accessories") {
        document.getElementById("player_neck_accessories").style.setProperty("background-image", "url(nothingPERSON.png)")
        document.getElementById("player_shoes_accessories").style.setProperty("background-image", "url(nothingPERSON.png)")
        document.getElementById("player_back_accessories").style.setProperty("background-image", "url(nothingPERSON.png)")
        document.getElementById("player_waist_accessories").style.setProperty("background-image", "url(nothingPERSON.png)")
    }
    else {
        document.getElementById("player_"+type).style.setProperty("background-image", "url("+name+"PERSON.png)")
    }
}

function changeFacts() {
    let name = this.id
    let factsList = facts[name]
    document.getElementById("title").textContent = name[0].toUpperCase()+name.slice(1)
    let factsDiv = document.getElementById("facts")
    while(factsDiv.firstChild) {
        factsDiv.removeChild(factsDiv.firstChild)
    }
    for (let fact of factsList) {
        let li = document.createElement("li")
        li.textContent = fact
        factsDiv.appendChild(li)
    }
}

function resetOutfit() {
    document.getElementById("player_neck_accessories").style.setProperty("background-image", "url(nothingPERSON.png)")
    document.getElementById("player_shoes_accessories").style.setProperty("background-image", "url(nothingPERSON.png)")
    document.getElementById("player_back_accessories").style.setProperty("background-image", "url(nothingPERSON.png)")
    document.getElementById("player_waist_accessories").style.setProperty("background-image", "url(nothingPERSON.png)")
    document.getElementById("player_pants").style.setProperty("background-image", "url(nothingPERSON.png)")
    document.getElementById("player_shirts").style.setProperty("background-image", "url(nothingPERSON.png)")
    document.getElementById("player_hats").style.setProperty("background-image", "url(nothingPERSON.png)")
}