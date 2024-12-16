class car{
    constructor(name,year){
        this.carname = name;
        this.caryear = year;
    }
    age(x){
        return x - this.caryear;
    }
}

const date = new Date();
let ageyear = date.getFullYear();

const mycar = new car("tata",2021);

console.log(mycar.age(ageyear));