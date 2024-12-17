let age = Symbol("Key");
const person = {
    name : "Kalyan",
    [age] : 30,
    hobbies : ["reading","dancing","eating"],
    address : {
        street : "some address",
        city : "Hyderabad"
    }
}

console.log(JSON.stringify(person));
console.log(Object.keys(person));