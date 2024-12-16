class car{
    constructor(name,year){
        this.carname = name;
        this.caryear = year;
    }
}

const mycar = new car("tata",2024);

console.log(mycar.carname);
console.log(mycar.caryear);