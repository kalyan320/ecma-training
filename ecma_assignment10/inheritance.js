class Car{
    constructor(brand){
        this.carName = brand;
    }
    present(){
        return "I have a "+this.carName;
    }
}

class Model extends Car{
    constructor(brand,carmodel){
        super(brand);
        this.carModel = carmodel;
    }
    show(){
        return this.present()+" and It is a "+this.carModel;
    }
}

let myCar = new Model("Tata","Punch");
console.log(myCar.show());