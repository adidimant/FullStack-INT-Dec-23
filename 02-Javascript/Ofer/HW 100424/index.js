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
console.log(`first`);
//HW Q2
//HW Q3
function getDataFromOurServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://our-server.com");
        const data = yield response.json();
        return data;
    });
}
getDataFromOurServer()
    .then((data) => {
    const element = document.getElementById("user-data-el");
    element.innerHTML = data;
})
    .catch(err => {
    console.error(`Error fetching data: ${err}`);
});
