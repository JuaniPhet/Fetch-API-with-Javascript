
// Final Project Java Script 201 | Udemy
// write a code who select a random person from the api swapi.dev 
// and show some information when we click on a button.

// Selection
const nameSelected = document.getElementById("name");
const gender = document.getElementById("gender");
const height = document.getElementById("height");
const numberSelected = document.getElementById("numberSelected");
const button = document.querySelector(".generate-btn");

// Creating the event Listener on the button

button.addEventListener('click', (e) => {
    e.preventDefault();

    // define random Number. Notice that the swapi api /people has 83 persons.
    const randomNumber = Math.ceil(Math.random() * 83);

    // Know the selected person in the html file
    numberSelected.innerText = randomNumber;

    //I just wanna know which person was randomly selected
    console.log('Person ' + randomNumber + ' was selected');

    // create the fecth API to take person from the swapi api.
    fetch(`https://swapi.dev/api/people/${randomNumber}`)
        .then(response => response.json())
        .then(person => {
            console.log(person)
            // Set value to our element selected with DOM
            nameSelected.innerHTML = person['name'];
            gender.innerHTML = person['gender'];
            height.innerHTML = person['height'];
        })
})




