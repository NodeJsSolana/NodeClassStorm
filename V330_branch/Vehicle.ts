class Vehicle{
    name:string;
    type:any;
    constructor (name, type) {
        this.name = name;
        this.type = type;
    }
    getName () {
        return this.name;
    }
    getType () {
        return this.type;
    } 
}

var car = new Vehicle('Tesla', 'car');
console.log(car.getName()); // Tesla
console.log(car.getType()); 