//Create new goblin event listener
first grab the dom element for the new goblin button, in this case its a form with a button and a text input
next we are going to create an event listener for the submit button in the form.
we need e.preventdefault() to prevent the form from refreshing the page and grab the data from the form
next we grab the textinput from the data, this will be the name of our new goblin, which we will define next.
the new goblin will have an ID number based on a let state, a name from the textinput and an hp that is randomly generated.
let currentID = 1;
then we push newGoblin onto our goblins array
let goblins = [];

CREATING A DIV WITH OUR NEW GOBLIN'S DATA
we are going to create a function called renderGoblin, which will take our newGoblin and render a div with a class of goblin, and three paragraph elements appended to the div. the first p will have the (name:) the second paragraph will have a icon which will change depending on the (hp:) and then the actual (hp:) itself.

what happens when we click on new goblin
a div class is created with three separate within that class, one for name one for icon and one for a value that stands in for HP

// set event listeners, we have an addNewGoblin form
//WHEN WE CLICK: we create an object with 3 kv pairs
// the id is taken from current id, which will be ++'d 
// the name is taken from name input
//hp is randomly generated
//this object is pushed onto goblins

//next we need to update the display with the goblins
// the first object in our array is sent through the for of loop
// the three kv pairs