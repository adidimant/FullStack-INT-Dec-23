const nambers = [1, 3, 2, 10, 14, 20, 31];

const oddnamber = nambers.filter((namber) => {
    if (namber % 2 == 1) {
        return true;
    }
    return false
});


const Detailspeople = [
    {firstname: 'ita', lastname: 'raskin', age: 28},
    {firstname: 'rivka', lastname: 'coen', age: 31},
    {firstname: 'israel', lastname: 'levi', age: 20},
    {firstname: 'shira', lastname: 'adri', age: 18},
    {firstname: 'mali', lastname: 'raskin', age: 25}
];

const Oddagefilter = Detailspeople.filter((namber) => namber.age % 2 == 1);




const someobj = Detailspeople.some((child) => {
    if (child.constructor == Object) {
        return true;
    }
    return false;
   });

const someobj1 = nambers.some((child) => {
    if (child.constructor == Object) {
        return true;
    }
    return false;
   });















