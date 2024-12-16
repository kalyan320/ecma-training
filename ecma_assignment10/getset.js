class Car{
    constructor(brand){
        this.carName = brand;
    }

    get cname (){
        return this.carName;
    }

    set cname(x){
        this.carName = x;
    }
}

const myCar = new Car("Mahindra");
console.log(myCar.cname);
myCar.cname = "Ford";
console.log(myCar.cname);
