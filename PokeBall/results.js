import { getPokeBalls } from '../pokeball.js';
import { findByPokemon } from '../utils.js';
import { renderQuestLog } from './pokeLog.js';

const table = document.querySelector('tbody');

const QuestData = getPokeBalls();

for (let pokemon of QuestData) {
    const questPokemon = findByPokemon(pokemon.name, QuestData);
    const questResult = renderQuestLog(questPokemon);
    table.append(questResult);
}
const newGame = document.getElementById('new-game');
newGame.addEventListener('click', () =>{
    localStorage.clear();
    alert('You have cleared your PokeDex! Gotta catch some Pokemon!');
    window.location = '../';
});

