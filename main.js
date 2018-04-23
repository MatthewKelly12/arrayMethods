

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

function makePlanets(whichPlanet) {
    const sectionPlanets = document.getElementById("planets");
    let plan = document.createElement("p");
    plan.textContent = whichPlanet;
    sectionPlanets.appendChild(plan);
}

planets.forEach(makePlanets);


const upperCasePlanets = planets.map(
    function makeUpperCase (thePlanet) {
       let firstLett = thePlanet.charAt(0).toUpperCase();
       let restName = thePlanet.slice(1);
       let wholeName = firstLett + restName;
       return wholeName;
    }
)
console.log(upperCasePlanets);

upperCasePlanets.forEach(makePlanets);

const planetEl = document.getElementById("planets");


const ePlanets = planets.filter(
    function eCheck (thisPlanet) {
      let eWords = (thisPlanet.includes("e") === true);
      return eWords;
    }
)

console.log(ePlanets);

ePlanets.forEach(makePlanets);



// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const wordSentence = words.reduce(
    function (thisWord, nextWord) {
      return  thisWord + " " + nextWord;
    }
)

console.log(wordSentence);
