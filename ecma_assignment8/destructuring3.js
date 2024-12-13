const person = {
    name: "John Doe",
    age: 30,
    city: "Hyderabad",
}

function greet({ name, city }) {
    console.log(`Hello, ${name} from ${city}`);
}

greet(person);