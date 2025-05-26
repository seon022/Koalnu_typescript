//  Q1.----------------------
var userName = "Alice";
var userAge = 25;
var isAdmin = true;
// Q2.----------------------
var productName = "코알누의 타입스크립트";
var productPrice = 20000;
var isAvailable = true;
console.log("\uC0C1\uD488\uBA85 : ".concat(productName, ", \uAC00\uACA9: ").concat(productPrice, ", \uC7AC\uACE0 \uC5EC\uBD80: ").concat(isAvailable));
// Q3.----------------------
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(11, 4));
// Q4.----------------------
function stringifyValue(value) {
    return value === null || value === undefined
        ? "값이 없습니다."
        : value.toString();
}
console.log(stringifyValue("Hello"));
console.log(stringifyValue(23));
console.log(stringifyValue(null));
console.log(stringifyValue(undefined));
//  Q5.----------------------
function compareValues(a, b) {
    if (a === b) {
        return "엄격한 동등성";
    }
    else if (a == b) {
        return "느슨한 동등성";
    }
    else {
        return "동등하지 않음";
    }
}
// NaN 은 어떤 값과도 동등하지 않음! 자기 자신과도 같지 않다.
console.log(compareValues(23, "23")); // 느슨한 동등성
console.log(compareValues(null, undefined)); // 느슨한 동등성
console.log(compareValues(false, 0)); // 느슨한 동등성
console.log(compareValues(NaN, NaN)); // 동등하지 않음
console.log(compareValues(42, 42)); // 엄격한 동등성
// Q6.----------------------
function isPrimitive(value) {
    return value === null ||
        value === undefined ||
        typeof value == "string" ||
        typeof value == "number" ||
        typeof value == "boolean" ||
        typeof value == "symbol" ||
        typeof value == "bigint"
        ? true
        : false;
}
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
