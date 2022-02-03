const form = document.getElementById(form);

let currentID = 1;
let goblins = [];


form.addEventListener('submit', (e) => {
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

    return goblinEl;

}