import pokedex from './Pokemon/pokedex.js';
import { incrementCaught, incrementSeen } from './PokeBall/pokeball.js';

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
    while (pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo._id === pokeThree._id) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();  
    }
    incrementSeen(pokeOne._id);
    incrementSeen(pokeTwo._id);
    incrementSeen(pokeThree._id);
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
        incrementCaught(pokemon._id);

        if (outings < 10) {
            setThreePokemon();
        } else {
            window.location = './PokeBall';
        }
    });

    return image;
}

export function findByPokemon(_id, pokedex) {
    for (let pokemon of pokedex) {
        if (pokemon._id === _id){
            return pokemon;
        }
    }}
