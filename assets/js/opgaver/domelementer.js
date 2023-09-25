/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
let redFig = document.getElementById("redFigure");
console.log(redFig);

let yellowFig = document.getElementById("yellowFigure");
console.log(yellowFig);


/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/


// din kode her
redFig.style.backgroundColor = "blue";
yellowFig.style.backgroundColor = "blue";


/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


// din kode her
let opgTwo = document.getElementById("opgaveTwo");
opgTwo.innerHTML = "<h2>Opgave 2.1 løsning</h2><p>Jeg har løst opgave 2.1</p>";

// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
let purpleFigs = document.getElementsByClassName("purpleFigures");
console.log(purpleFigs);

/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her
let purpleFigs2 = document.getElementsByClassName("purpleFigures");

let purpleFigsArray = Array.from(purpleFigs2);

purpleFigsArray.map(function(purpleFig) {
  purpleFig.style.backgroundColor = "red";
});



/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


// din kode her
// Konverter HTMLCollection til et array


// Gennemgå hvert "purpleFigures" element i arrayet
purpleFigsArray.forEach(function(purpleFig) {
  // Find det første <h3> element inde i "purpleFigures"
  let h3Element = purpleFig.querySelector("h3");

  // Ændre tekstindholdet til "RED"
  if (h3Element) {
    h3Element.innerHTML = "RED";
  }
});


/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// container
const container = document.getElementById('opgaveFour');

// overskrift (semantic element til overskrift)
const heading = document.createElement('h1');
heading.textContent = myData.name; // Indstil overskriftens tekst til dyrenavnet

//  billedelement
const image = document.createElement('img');
image.src = myData.image; // Indstil billedets kilde

// element til beskrivelsen
const description = document.createElement('p');
description.textContent = myData.description; // Indstil beskrivelsens tekst

// Tilføjelse af de oprettede elementer til containeren
container.appendChild(heading);
container.appendChild(image);
container.appendChild(description);




