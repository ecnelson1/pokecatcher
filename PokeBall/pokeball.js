const POKELOG = 'POKELOG';
import { findByPokemon } from '../utils.js';


export function getPokeBalls() { // list of seen/caught
    let pokeBalls = JSON.parse(localStorage.getItem(POKELOG));

    if (!pokeBalls) {
        pokeBalls = [];
        localStorage.setItem(POKELOG, JSON.stringify(pokeBalls));
    }

    return pokeBalls; 
}

export function setPokeLog(newStats) {
    localStorage.setItem(POKELOG, JSON.stringify(newStats));
}

export function incrementSeen(_id) {
    const pokeBalls = getPokeBalls();

    // check to see if i've seen this before
    const pokeScan = findByPokemon(_id, pokeBalls);

    // if not initialize a new object
    if (!pokeScan) {
        const newPokemon = {
            _id: _id,
            seen: 1,
            caught: 0,
        };

        pokeBalls.push(newPokemon);
    } else {
        // if i've seen it, increment the seen
        pokeScan.seen++;
    }

    setPokeLog(pokeBalls);
}

export function incrementCaught(_id) {
    const pokeBalls = getPokeBalls();
    // check to see if i've seen this before
    const pokeScan = findByPokemon(_id, pokeBalls);

    pokeScan.caught++;

    setPokeLog(pokeBalls);
}