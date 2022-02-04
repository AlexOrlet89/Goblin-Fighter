export function renderGoblin(goblin) {
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



    return goblinEl;
}