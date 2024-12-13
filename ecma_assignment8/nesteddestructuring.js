const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "Street Name",
        city: "Hyderabad",
    }
}
const { name, address: { street, city } } = person;

console.log(city);
console.log(street);
console.log(person);