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

const trainerPokedex = getPokeBalls();
const pokemonLabels = [];
const pokeSeen = [];
const pokecaught = [];

for (let pokemon of trainerPokedex){
    const label = pokemon.name;
    const seen = pokemon.seen;
    const caught = pokemon.caught;
    pokemonLabels.push(label);
    pokeSeen.push(seen);
    pokecaught.push(caught); 
} 

var pokeChart = document.getElementById('myChart').getContext('2d');
var chart = new Chart(pokeChart, {
    type: 'bar',
    data: {
        labels: pokemonLabels,
        datasets: [{
            label: 'Pokemon encounterd on your quest!',
            data: pokeSeen,
            backgroundColor: [
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(220, 20, 60, .4)',
                'rgba(255, 99, 132, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1
        },
        {
            label: 'Pokemon caught on your quest!',
            data: pokecaught,
            backgroundColor: [
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',

            ],
            borderColor: [
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
                'rgba(255, 215, 0, 1)',
            ],
            borderWidth: 1
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const newGame = document.getElementById('new-game');
newGame.addEventListener('click', () =>{
    localStorage.clear();
    alert('You have cleared your PokeDex! Gotta catch some Pokemon!');
    window.location = '../';
});
const continueTraining = document.getElementById('continue');
continueTraining.addEventListener('click', () =>{
    alert('You have caught a few Pokemon, but there is still room in your PokeDex, see if you can catch em all!');
    window.location = '../';
});
