export function renderGoblin(goblin) {
    const goblinEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const faceEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblin.name;
    hpEl.textContent = goblin.hp;
    hpEl.id = `GoblinHP${goblin.id}`;
    goblinEl.id = `DivId${goblin.id}`;


    faceEl.textContent = goblin.hp > 0 ? `>:)` : `X(`;
    // goblinEl.classList.add(`animate__animated`, `animate__flip`);
    // goblinEl.style.opacity = goblin.hp > 0 ? '1' : '0.5';
    goblinEl.append(nameEl, faceEl, hpEl);



    return goblinEl;
}