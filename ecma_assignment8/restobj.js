const person = {
    name: "John Doe",
    age: 30,
    city: "hyderabad",
    profession: "Developer"
};
const { name, ...details } = person;
console.log(name);
console.log(details);