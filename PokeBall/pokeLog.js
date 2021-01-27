export function renderQuestLog(pokemon) {
    const encounters = pokemon.seen;
    const captures = pokemon.caught;
    const name = pokemon.name;

    const tr = document.createElement('tr');
    tr.classList.add('pokemon-result');

    const nameTd = document.createElement('td');
    const encountersTd = document.createElement('td');
    
    const capturesTd = document.createElement('td');
    

    nameTd.textContent = name.toUpperCase();
    encountersTd.textContent = encounters;
    capturesTd.textContent = captures;

    tr.append(nameTd, encountersTd, capturesTd);

    return tr;
}