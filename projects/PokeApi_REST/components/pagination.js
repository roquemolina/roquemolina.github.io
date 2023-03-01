import getPokeData from "./pokeApi.js";
let $main = document.querySelector("main"),
$backBtn = document.querySelector('#back'),
$nextBtn = document.querySelector('#next'),
$pags = document.querySelector("#pags"),
pokeF = 0,
pokeL = 20;

$pags.textContent = `Pokemons ${pokeF} to ${pokeL}`;


export default function pagination(e) {

    if(e.target == document.getElementById('back')) {
        if($backBtn.dataset.link === "null"){
            console.log('Last page');
            alert('Last page');
            
        } else {
            $main.innerHTML = '';
            getPokeData($backBtn.dataset.link);
            pokeF -= 20;
            pokeL -= 20;
            $pags.textContent = `Pokemons ${pokeF} to ${pokeL}`;
        };
    };

    if(e.target == document.getElementById('next')) {
        if($nextBtn.dataset.link === "null"){
            console.log('Last page');
            alert('Last page');
        } else {
            $main.innerHTML = '';
            getPokeData($nextBtn.dataset.link);
            pokeF += 20;
            pokeL += 20;
            $pags.textContent = `Pokemons ${pokeF} to ${pokeL}`;
        };
    }
};