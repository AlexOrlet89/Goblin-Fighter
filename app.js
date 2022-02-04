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


let defeatedGoblins = 0;
let currentID = 3;
let goblins = [{
    name: `Randy Johnson`, id: 1, hp: 8
}, {
    name: `Terry Pendleton`, id: 2, hp: 7
}];
let heroHP = 10;


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



function displayGoblins() {
    goblinList.textContent = '';
    
    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        
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
const heroDie = Math.ceil(Math.random() * 6);

if (goblinDie > heroDie) {
    heroHP -= (goblinDie - heroDie);
    playStrike();
    alert(`swing and a miss!`);
        alert(`${goblin.name} hit you for ${(goblinDie - heroDie)} damage!`);
    }
    else if (heroDie > goblinDie) {
        goblin.hp -= (heroDie - goblinDie);
        playHit();
        alert(`${goblin.name} tries to sneak one by ya!`);
        alert(`you hit ${goblin.name} for ${(heroDie - goblinDie)} damage!`);
        
    }
    else alert(`CLANG! ya'lls swords bounce off eachother or whatever.....`);
    
    const hpEl = document.getElementById(`GoblinHP${goblin.id}`);
    heroHPel.textContent = `${heroHP}`;
    hpEl.textContent = `${goblin.hp}`;
    displayGoblins();
    
    if (goblin.hp <= 0) {
        playCheer();
        defeatedGoblins++;
        defeatedGoblinsEl.textContent = defeatedGoblins;
    }

    if (heroHP <= 0) {
        alert(`You're overpowered by the goblins, they swarm you and take away your bat. You are cuffed and taken to a prison of some sort. In a week you will stand trial for the murder of ${defeatedGoblins} goblins and will likely face capital punishment. In your cell, in the dugout, you smile and await your next at-bat...`);

        location.reload();
    }

} 
displayGoblins();