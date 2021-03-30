var Vehicle = /** @class */ (function () {
    function Vehicle(name, type) {
        this.name = name;
        this.type = type;
    }
    Vehicle.prototype.getName = function () {
        return this.name;
    };
    Vehicle.prototype.getType = function () {
        return this.type;
    };
    return Vehicle;
}());
var car = new Vehicle('Tesla', 'car');
console.log(car.getName()); // Tesla
console.log(car.getType());
