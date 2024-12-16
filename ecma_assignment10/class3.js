class Car{
    constructor(name,year){
        this.carName = name;
        this.carYear = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.carYear;
    }
}

const myCar = new Car("tata",2014);

console.log(myCar.age());