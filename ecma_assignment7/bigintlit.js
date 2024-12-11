// let n = 6464661484893314949461646431654636546161546155451155421552;
// console.log(n);

let person = {
    name : "Alice",
    age :30,
    address : null,
    getGreeting : function(){
        return `Hello, ${this.name}`
    }
};

console.log(person.address);
console.log(person.getGreeting());