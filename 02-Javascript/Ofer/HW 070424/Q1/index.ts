console.log("test");

//HW Q1.1
interface ThenObjPass {
    isDone: boolean;
    valueToReturn: string;
}

const myPromise: Promise<ThenObjPass> = new Promise((resolve, reject) => {
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
        console.log(
            `second then call, here's the object: ${obj.isDone}, ${obj.valueToReturn}`
        );
    })
    .catch((err) => {
        console.error("something went wrong", err);
    });

//HW Q1.2
const LoadNewPokemonBtn = document.querySelector(
    "#LoadNewPokemonBtn"
) as HTMLButtonElement;
const PokemonNameDiv = document.querySelector(
    "#PokemonName"
) as HTMLParagraphElement;
const pokemonMovesDiv = document.querySelector(
    "#pokemonMoves"
) as HTMLDivElement;
const pokemonImgDiv = document.querySelector("#pokemonImg") as HTMLImageElement;
const soundBtn = document.querySelector("#soundBtn") as HTMLButtonElement;
async function getPokemonData() {
    try {
        const randomNum = Math.floor(Math.random() * 1023 + 1);
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomNum}`
        );
        const data = await response.json();
        console.log(`Pokemon name: ${data.name}, pokemon id: ${data.id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

interface PokemonDataInt {
    pokemonName: string;
    pokemonImg: string;
    pokemonMoves: string[];
    pokemonSound: string;
}

function translatePokemonData(data: any) {
    let pokemon = <PokemonDataInt>{};
    pokemon.pokemonName = data.name;
    console.log(` pokemon name ${pokemon.pokemonName}`)
    //image
    pokemon.pokemonImg = data.sprites.front_default;
    console.log(` pokemon Image ${pokemon.pokemonImg}`)
    //moves
    pokemon.pokemonMoves = data.moves.map(
        (overAllMove: any) => overAllMove.move.name
    );
    pokemon.pokemonSound = data.cries.latest || data.cries.legacy || '';
// console.log(pokemon)
    return pokemon;
}

function updateUI(translatedData: PokemonDataInt) {
    PokemonNameDiv.textContent = translatedData.pokemonName;
    pokemonImgDiv.src = translatedData.pokemonImg;
    pokemonMovesDiv.innerHTML = "";
    translatedData.pokemonMoves.forEach((pokemonMove: string) => {
        const para = document.createElement("p");
        para.textContent = pokemonMove;
        pokemonMovesDiv.appendChild(para);
    });
}

async function pokemonApi() {
    //READ
    try {
        const data = await getPokemonData();

        const translatedData = translatePokemonData(data);
        // console.log(translatedData)
        //UPDATE
        updateUI(translatedData);

        soundBtn.addEventListener("click",function removesDuplicateaddEventListeners ()  {
            // translatedData.pokemonSound = ''
            const audio = new Audio(translatedData.pokemonSound);
            audio.volume = 0.3;
            audio.play();
            soundBtn.removeEventListener('click', removesDuplicateaddEventListeners)
        });
    } catch (error) {
        console.log(error);
    }
}

LoadNewPokemonBtn.addEventListener("click", pokemonApi);
