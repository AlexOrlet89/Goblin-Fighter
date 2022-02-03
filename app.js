// import functions and grab DOM elements
const defeatedGoblinsEl = document.getElementById('defeatedGoblins');
const heroHPEl = document.getElementById('heroHP');
const formEl = document.getElementById('form');
const goblinsEl = document.getElementById('goblins');
// let state>> you've killed 0 goblins you have 10 hp and there's one goblin named Ross from friends who has 666 health. CRUCIAL!! 

let deadGoblins = 0;
let HP = 10;
let goblins = [
    { id: 1, name: 'Ross from Friends', hp: 666 }
];
let currentId = 2;



// set event listeners, we have an addNewGoblin form
//WHEN WE CLICK: we create an object with 3 kv pairs
// the id is taken from current id, which will be ++'d 
// the name is taken from name input
//hp is randomly generated
//this object is pushed onto goblins

//next we need to update the display with the goblins
// the first object in our array is sent through the for of loop
// the three kv pairs

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(formEl);
    //grab the name from the form..
    const name = data.get('goblin-name');
    // new goblin has name and random.math.cieling * 5 (1-6) hp
    const newGoblin = {

    }


}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
