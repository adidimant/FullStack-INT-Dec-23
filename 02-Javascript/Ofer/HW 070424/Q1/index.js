"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("test");
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ isDone: true, valueToReturn: "SetTimeOut Finished" });
    }, 2000);
});
myPromise
    .then((Obj) => {
    console.log("First then call");
    return Obj;
})
    .then((obj) => {
    console.log(`second then call, here's the object: ${obj.isDone}, ${obj.valueToReturn}`);
})
    .catch((err) => {
    console.error("something went wrong", err);
});
//HW Q1.2
const LoadNewPokemonBtn = document.querySelector("#LoadNewPokemonBtn");
const PokemonNameDiv = document.querySelector("#PokemonName");
const pokemonMovesDiv = document.querySelector("#pokemonMoves");
const pokemonImgDiv = document.querySelector("#pokemonImg");
const soundBtn = document.querySelector("#soundBtn");
function getPokemonData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const randomNum = Math.floor(Math.random() * 1023 + 1);
            const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
            const data = yield response.json();
            console.log(`Pokemon name: ${data.name}, pokemon id: ${data.id}`);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    });
}
function translatePokemonData(data) {
    let pokemon = {};
    pokemon.pokemonName = data.name;
    console.log(` pokemon name ${pokemon.pokemonName}`);
    //image
    pokemon.pokemonImg = data.sprites.front_default;
    console.log(` pokemon Image ${pokemon.pokemonImg}`);
    //moves
    pokemon.pokemonMoves = data.moves.map((overAllMove) => overAllMove.move.name);
    pokemon.pokemonSound = data.cries.latest || data.cries.legacy || '';
    // console.log(pokemon)
    return pokemon;
}
function updateUI(translatedData) {
    PokemonNameDiv.textContent = translatedData.pokemonName;
    pokemonImgDiv.src = translatedData.pokemonImg;
    pokemonMovesDiv.innerHTML = "";
    translatedData.pokemonMoves.forEach((pokemonMove) => {
        const para = document.createElement("p");
        para.textContent = pokemonMove;
        pokemonMovesDiv.appendChild(para);
    });
}
function pokemonApi() {
    return __awaiter(this, void 0, void 0, function* () {
        //READ
        try {
            const data = yield getPokemonData();
            const translatedData = translatePokemonData(data);
            // console.log(translatedData)
            //UPDATE
            updateUI(translatedData);
            soundBtn.addEventListener("click", function removesDuplicateaddEventListeners() {
                // translatedData.pokemonSound = ''
                const audio = new Audio(translatedData.pokemonSound);
                audio.volume = 0.3;
                audio.play();
                soundBtn.removeEventListener('click', removesDuplicateaddEventListeners);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
LoadNewPokemonBtn.addEventListener("click", pokemonApi);
