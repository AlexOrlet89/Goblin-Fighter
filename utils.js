// we need a function that creates something like this:
/* <div class="goblin">
    <p>Ross from friends</p>
    <p id="face1">>>>:))))</p>
    <p id="hp1">666</p>
    </div> */

export function renderGoblin(item) {

// declare elements individually
    const goblinEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const faceEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add(`goblin`);

    hpEl.id = `hp${item.id}`;
    nameEl.textContent = item.name;
    
    faceEl.id = `face`;
    faceEl.textContent = item.hp > 0 ? '😈' : '🔥';
    hpEl.textContent = item.hp;
    
    goblinEl.append(nameEl, faceEl, hpEl);
    return goblinEl;
}