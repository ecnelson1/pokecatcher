import { pokedex } from './Pokemon/pokedex.js';

export function getRandomPokemon(){
    const randomPokemon = Math.floor(Math.random() * pokedex.length);

    return pokedex[randomPokemon];
}
export function setThreePokemon() { 
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();
    while (pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo._id === pokeThree._id) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();  
    }

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

    return image;
}
