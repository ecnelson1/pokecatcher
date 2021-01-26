import pokedex from './Pokemon/pokedex.js';
import { incrementCaught, incrementSeen } from './pokeball.js';

let outings = 0;
export function getRandomPokemon(){
    const randomPokemon = Math.floor(Math.random() * pokedex.length);
    
    return pokedex[randomPokemon];
}
export function setThreePokemon() { 
    outings++;
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();
    while (pokeOne.pokebase === pokeTwo.pokebase || pokeOne.pokebase === pokeThree.pokebase || pokeTwo.pokebase === pokeThree.pokebase) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();  
    }
    incrementSeen(pokeOne.pokebase);
    incrementSeen(pokeTwo.pokebase);
    incrementSeen(pokeThree.pokebase);
    const img1 = aWildPokemonAppeared(pokeOne);
    const img2 = aWildPokemonAppeared(pokeTwo);
    const img3 = aWildPokemonAppeared(pokeThree);

    const div = document.getElementById('pokemon-display');

    div.textContent = '';

    div.append(img1, img2, img3);
}

export function aWildPokemonAppeared(pokemon) {
    const image = document.createElement('img');

    image.src = pokemon.url_image;

    image.classList.add('poke-pic');
    image.addEventListener('click', () => {
        incrementCaught(pokemon.pokebase);

        if (outings < 10) {
            setThreePokemon();
        } else {
            window.location = './PokeBall';
        }
    });

    return image;
}

export function findByPokemon(pokebase, pokedex) {
    for (let pokemon of pokedex) {
        if (pokemon.name === pokebase){
            return pokemon;
        }
    }}
