import { getPlanets } from "./api.js"
const sunTarget = document.querySelector(".sun")
const allPlanets = document.querySelectorAll(".spacebody")
const allPlanetsParent = document.querySelector("#master-of-space")
const allInfoParent = document.querySelector("#master-of-info")


const showPlanet = (planet) =>{
    allInfoParent.querySelector("#planet-name").innerText = planet.name
    allInfoParent.querySelector("#planet-latin").innerText = planet.latinName
    allInfoParent.querySelector("#planet-info").innerText = planet.desc
    allInfoParent.querySelector("#planet-circum").innerText = planet.circumference
    allInfoParent.querySelector("#article-temp-day").innerText = planet.temp.day
    allInfoParent.querySelector("#article-temp-night").innerText = planet.temp.night
    allInfoParent.querySelector("#distance").innerText = planet.distance
    const articleMoons = allInfoParent.querySelector("#article-moons")

    planet.moons.forEach(moon => {
        const moonParagraph = document.createElement("p")     
        moonParagraph.innerText = moon
        articleMoons.append(moonParagraph)
    });
        
    ['hide', 'show'].forEach(displayClass => {
        allPlanetsParent.classList.toggle(displayClass)
        allInfoParent.classList.toggle(displayClass)
    });
}



allPlanets.forEach((planet, index) => {
    console.log(index);
    
    planet.addEventListener('click', async () =>{
        const planets = await getPlanets()
        const planetToShow = planets[index]
        showPlanet(planetToShow)
        console.log(planetToShow);
    })
});