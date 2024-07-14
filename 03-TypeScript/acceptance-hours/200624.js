"use strict";
const obj1 = {
    1: '1',
    2: '2',
    3: '3'
};
const ob2 = {
    4: '4',
    5: '5',
};
const printObj = (obj) => {
    if (typeof obj == 'object' && !Array.isArray(obj) && obj != null) {
        console.log(obj);
    }
};
printObj([4354]);
