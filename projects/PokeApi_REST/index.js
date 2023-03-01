import getPokeData from "./components/pokeApi.js";
import pagination from "./components/pagination.js";

document.addEventListener("DOMContentLoaded", e =>{
    getPokeData(`https://pokeapi.co/api/v2/pokemon`);
});

document.addEventListener('click', e => {
    pagination(e);
})