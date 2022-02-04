const form = document.getElementById('form');
const goblinList = document.getElementById('goblins');

let currentID = 1;
let goblins = [];


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

