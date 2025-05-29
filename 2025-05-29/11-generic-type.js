// 🚀 문제1 .
// 매개변수, 리턴타입 정의 필요
function getFirstElement(array) {
    return array[0];
}
// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([{ name: "hi" }]));
console.log(getFirstElement([])); // undefined
// 🚀 문제 2.
// 매개변수, 리턴타입 정의 필요
function isNumberArray(array) {
    if (array.length === 0) {
        return true;
    }
    return array.every(function (el) { return typeof el === "number"; });
}
// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)
// 조건부 타입을 활용한 함수
function checkArrayType(value) {
    if (Array.isArray(value)) {
        return "This is an array.";
    }
    else {
        return "This is not an array.";
    }
}
// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."
// 🚀 문제 5.
function createObject(key, value) {
    var _a;
    return _a = {}, _a[key] = value, _a;
}
// 테스트 코드
console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }
