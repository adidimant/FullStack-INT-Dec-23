var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log("test");
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ isDone: true, valueToReturn: "SetTimeOut Finished" });
    }, 2000);
});
myPromise
    .then(function (Obj) {
    console.log("First then call");
    return Obj;
})
    .then(function (obj) {
    console.log("second then call, here's the object: " + obj.isDone + ", " + obj.valueToReturn);
})["catch"](function (err) {
    console.error("something went wrong", err);
});
//HW Q1.2
var LoadNewPokemonBtn = document.querySelector("#LoadNewPokemonBtn");
var PokemonNameDiv = document.querySelector("#PokemonName");
var pokemonMovesDiv = document.querySelector("#pokemonMoves");
var pokemonImgDiv = document.querySelector("#pokemonImg");
var soundBtn = document.querySelector("#soundBtn");
function getPokemonData() {
    return __awaiter(this, void 0, void 0, function () {
        var randomNum, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    randomNum = Math.floor(Math.random() * 1023 + 1);
                    return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/" + randomNum)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Pokemon name: " + data.name + ", pokemon id: " + data.id);
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function translatePokemonData(data) {
    var pokemon = {};
    pokemon.pokemonName = data.name;
    console.log(" pokemon name " + pokemon.pokemonName);
    //image
    pokemon.pokemonImg = data.sprites.front_default;
    console.log(" pokemon Image " + pokemon.pokemonImg);
    //moves
    pokemon.pokemonMoves = data.moves.map(function (overAllMove) { return overAllMove.move.name; });
    pokemon.pokemonSound = data.cries.latest || data.cries.legacy || '';
    // console.log(pokemon)
    return pokemon;
}
function updateUI(translatedData) {
    PokemonNameDiv.textContent = translatedData.pokemonName;
    pokemonImgDiv.src = translatedData.pokemonImg;
    pokemonMovesDiv.innerHTML = "";
    translatedData.pokemonMoves.forEach(function (pokemonMove) {
        var para = document.createElement("p");
        para.textContent = pokemonMove;
        pokemonMovesDiv.appendChild(para);
    });
}
function pokemonApi() {
    return __awaiter(this, void 0, void 0, function () {
        var data, translatedData_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getPokemonData()];
                case 1:
                    data = _a.sent();
                    translatedData_1 = translatePokemonData(data);
                    // console.log(translatedData)
                    //UPDATE
                    updateUI(translatedData_1);
                    soundBtn.addEventListener("click", function removesDuplicateaddEventListeners() {
                        // translatedData.pokemonSound = ''
                        var audio = new Audio(translatedData_1.pokemonSound);
                        audio.volume = 0.3;
                        audio.play();
                        soundBtn.removeEventListener('click', removesDuplicateaddEventListeners);
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
LoadNewPokemonBtn.addEventListener("click", pokemonApi);
