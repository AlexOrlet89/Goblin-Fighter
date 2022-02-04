const form = document.getElementById('form');
const goblinList = document.getElementById('goblins');
const heroHPel = document.getElementById('heroHP');

let currentID = 1;
let goblins = [];
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

function renderGoblin(goblin) {
    const goblinEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const faceEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblin.name;
    hpEl.textContent = goblin.hp;
    hpEl.id = `GoblinHP${goblin.id}`;

    faceEl.textContent = goblin.hp > 0 ? `>:)` : `X(`;

    goblinEl.append(nameEl, faceEl, hpEl);

    goblinEl.addEventListener('click', () => {
        console.log('goblin clicked');
        goblinClick(goblin);
    });

    return goblinEl;
}

function displayGoblins() {
    goblinList.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

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
        alert(`${goblin.name} hit you for ${(goblinDie - heroDie)} damage!`)
    }
    else if (heroDie > goblinDie) {
        goblin.hp -= (heroDie - goblinDie);
        alert(`you hit ${goblin.name} for ${(heroDie - goblinDie)} damage!`);
    }
    else alert(`CLANG! ya'lls swords bounce off eachother or whatever.....`);

    const hpEl = document.getElementById(`GoblinHP${goblin.id}`);
    heroHPel.textContent = `${heroHP}`;
    hpEl.textContent = `${goblin.hp}`;

} 