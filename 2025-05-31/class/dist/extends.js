"use strict";
// extends 를 사용해서 조건부로 타입 결정
const result = {
    type: "track",
    title: "",
};
function getUserInfo() {
    return { name: "alice", age: 23 };
}
// as 타입추론 안됐을때 강제로 타입확정정해줌
let someValue = "Hello, world";
let newValue = someValue;
console.log(newValue.length);
const inputElement = document.querySelector("input");
// 타입스크립트를 컴파일할때는 index.html파일 모르니까까 null 또는 element 로 간주 input인지 모름.
// 확정해주면 에러 안남.
const input = inputElement;
input.value = "23232dwsdfsd";
//# sourceMappingURL=extends.js.map