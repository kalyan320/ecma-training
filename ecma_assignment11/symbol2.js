let sym1 = Symbol("Key");
let obj = {
    name : "Kalyan",
    [sym1] : 35
}

console.log(obj);
console.log(obj[sym1]);