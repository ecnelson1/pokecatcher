import { findByPokemon } from './utils.js';

const POKELOG = 'POKELOG';

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

export function incrementSeen(pokebase) {
    const pokeBalls = getPokeBalls();

    // check to see if i've seen this before
    const pokeScan = findByPokemon(pokebase, pokeBalls);

    // if not initialize a new object
    if (!pokeScan) {
        const newPokemon = {
            name: pokebase,
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

export function incrementCaught(pokebase) {
    const pokeBalls = getPokeBalls();
    // check to see if i've seen this before
    const pokeScan = findByPokemon(pokebase, pokeBalls);
    pokeScan.caught++;

    setPokeLog(pokeBalls);
}