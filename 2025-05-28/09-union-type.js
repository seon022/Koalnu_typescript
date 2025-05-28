/*
 ✅ 문제 1
 */
// 매개변수, 리턴타입 정의필요
function processInput(input) {
    if (Array.isArray(input)) {
        if (typeof input[0] === "number") {
            return input.reduce(function (sum, num) { return sum + num; }, 0);
        }
        else if (typeof input[0] === "string") {
            return input.join("");
        }
    }
    else if (typeof input === "object" && "message" in input)
        return input.message.toUpperCase();
    else {
        throw new Error("올바르지 않은 입력형식입니다.");
    }
}
// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
// console.log(processInput(42)); // 에러 발생
/*
 ✅ 문제 2
 */
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike(type) {
        this.type = type;
    }
    return Bike;
}());
function processVehicle(vehicle) {
    if (vehicle instanceof Car) {
        return vehicle.brand.toUpperCase();
    }
    else if (vehicle instanceof Bike) {
        return "Bike: ".concat(vehicle.type);
    }
    throw new Error("올바르지 않은 vehicle입니다.");
}
// 테스트 코드
var myCar = new Car("Tesla");
var myBike = new Bike("Mountain");
console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
function processUser(user) {
    if (user.type === "admin") {
        return user.permissions.join(",");
    }
    else if (user.type === "user") {
        return user.email;
    }
    throw new Error("올바르지 않은 사용자입니다.");
}
console.log(processUser({ type: "admin", permissions: ["read", "write"] }));
console.log(processUser({ type: "user", email: "user@example.com" }));
// 사용자 정의 타입 가드
function isRectangle(shape) {
    return (typeof shape === "object" &&
        shape !== null &&
        "width" in shape &&
        "height" in shape);
}
function calculateArea(shape) {
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    else {
        return Math.PI * shape.radius * shape.radius;
    }
}
// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)
