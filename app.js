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
