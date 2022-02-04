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
first we will create these elements, 1 div and 3 ps
we attach the goblin class to our div
the name and HP elements are given a text content of goblin.name and goblin.hp respectively. 
goblin faceis generated using a ternary, a shorthand if else. if the goblin hp is greater than zero, give it the string value of `:)`, else `:(`.
then, append  name face and hp elements to our goblin el and return the div

next we need to display this rendered div on the screen, this functino will be called displayGoblins. first we need to grab the element where we want the div to append and call it goblinList. this function will be passing objects in our goblins array through the rendergoblin function, which will give us a rendered div, which we will set to append to goblinList. 

we will first set for loop to loop through the array of goblins. each goblin that passes through renderGoblin is appended to goblin List

now we can call display goblin at the end of our eventlistener

Things we still need: 
defeated goblin count
hero hp to decrease
goblins need to be clickable. 

because the first two won't happen unless the goblins are clickable lets ford focus on that.

the goblinEl is going to be the displayed element clicked, so we go to where the goblinEl is created in renderGoblin and add a click eventlistener , and refer a function we haven't created yet called goblinClick, passing an argument which is the goblin object (id, name, hp).
