import { renderGoblin } from './utils.js';

const form = document.getElementById('form');
const goblinList = document.getElementById('goblins');
const heroHPel = document.getElementById('heroHP');
const defeatedGoblinsEl = document.getElementById('defeatedGoblins');


function playCheer() {
    new Audio(`assets/18364__jasinski__bb-claprhm.mp3`).play();
}
function playHit() {
    new Audio(`assets/214989__amishrob__baseballhitandcrowdcheer.mp3`).play();
}
function playStrike() {
    new Audio(`assets/45110__sanus-excipio__thats-it.wav`).play();
}


let defeatedGoblins = [];
let currentID = 6;
let goblins = [{
    name: `Randy Johnson`, id: 1, hp: 8
}, {
    name: `Terry Pendleton`, id: 2, hp: 7
}, {
    name: `Greg Maddux`, id: 3, hp: 5
}, {
    name: `Roger Clemens`, id: 4, hp: 6
}, {
    name: `Mario Soto`, id: 5, hp: 5
}];
let heroHP = 3;


form.addEventListener('submit', (e) => {
    console.log('click');
    e.preventDefault();
    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    const newGoblin = {
        id: currentID,
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };
    currentID++;

    goblins.push(newGoblin);

    displayGoblins();
});


alert(`It was but a week ago you found the strange baseball bat thrumming with energy in a dumpster outside an abandoned antique sporting goods store. It called to you like the board game in jumanji. Since then, you've only hit dingers against your friends. only yard bombs. The bat seems... more than just lucky, and you wonder if you could ever strikeout. Thats when you pass by a baseball convention at the local casino and decide to REALLY test it out..`);

function displayGoblins() {
    goblinList.textContent = '';
    
    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        if (goblin.hp <= 0) {
            goblinEl.style.opacity = '.5';
        //     goblinEl.classList.add(`animate__animated`, `animate__flip`);
        }
        
        goblinEl.addEventListener('click', () => {
            console.log('goblin clicked');
            goblinClick(goblin);
        });
        
        goblinList.append(goblinEl);
    }
}

function goblinClick(goblin) {

    if (goblin.hp <= 0) { alert('stop, stop!! ' + goblin.name + ' is already dead!'); 
        return;
    }

    const goblinDie = Math.ceil(Math.random() * 6);
    const heroDie = Math.ceil(Math.random() * 15);

    if (goblinDie > heroDie) {
        heroHP --;
        playStrike();
        alert(`swing and a miss!`);
        // alert(`${goblin.name} hit you for ${(goblinDie - heroDie)} damage!`);
    }
    else if (heroDie > goblinDie) {
        goblin.hp -= ((heroDie) - goblinDie);
        playHit();
        alert(`${goblin.name} tries to sneak one by ya!`);
        alert(`you hit the ball right back at ${goblin.name} for ${(heroDie - goblinDie)} damage!`);
        
    }
    else alert(`a line drive destoys a slot machine and coins fly out into the sky, the crowd goes utterly bonkers for it...`);
    
    const hpEl = document.getElementById(`GoblinHP${goblin.id}`);
    heroHPel.textContent = `${heroHP}`;
    hpEl.textContent = `${goblin.hp}`;
    displayGoblins();
    
    if (goblin.hp <= -7) {
        const goblinEl = document.getElementById(`DivId${goblin.id}`);
        playCheer();
        alert(`a thunderclap and a cloud of smoke replaces all of ${goblin.name} but his baseball cap, which is spinning around in the air just above where he once was. The crowd hoots and hollers and badger the remaining pitchers into throwing their heat.`);
        goblinEl.classList.add(`animate__animated`, `animate__flip`);
        // halfOpacity(goblin);
        defeatedGoblins.push(`${goblin.name}`);
        defeatedGoblinsEl.textContent = defeatedGoblins;
    }
    if (goblin.hp < 0 && goblin.hp > -3) {
        const goblinEl = document.getElementById(`DivId${goblin.id}`);
        playCheer();
        alert(`...and it bonks ${goblin.name} right on the noggin! a lump shoots straight up through his baseball cap and little birds whistle about it. Stars  fill up ${goblin.name}'s eyes and he falls over, much to the raucous amusement of the crowd, who demand more beefballs slammed out to center field`);
        goblinEl.classList.add(`animate__animated`, `animate__flip`);
        // halfOpacity(goblin);
        defeatedGoblins.push(`${goblin.name}`);
        defeatedGoblinsEl.textContent = defeatedGoblins;
    }
    if (goblin.hp < -3 && goblin.hp > -7) {
        const goblinEl = document.getElementById(`DivId${goblin.id}`);
        playCheer();
        alert(`....and it blows a hole right through ${goblin.name}'s chest!! The crowd goes crazy as he is carried off limply on a stretcher!! The fans are unfazed, baseball fans being notorious for their bloodlust...`);
        goblinEl.classList.add(`animate__animated`, `animate__flip`);
        // halfOpacity(goblin);
        defeatedGoblins.push(`${goblin.name}`);
        defeatedGoblinsEl.textContent = defeatedGoblins;
    }

    if (heroHP <= 0) {
        if (defeatedGoblins.length > 0) {
            alert(`You've finally struck out, just as security swarms you and takes your bat. You are cuffed and taken to a prison and in a week you will stand trial for the murder of ${defeatedGoblins} and will likely face capital punishment. In your cell, in the dugout, you smile and await your next at-bat...`);}

        else {
            alert(`You've struck out and made a fool of yourself in front of the legends of baseball and it's diehard fans... you die penniless on the streets and your family never speaks to you again...`);}
        alert(`thanks for playing :)`);
        location.reload();
    }

} 
displayGoblins();