/*
string
number
boolean
null
undefined
----------
symbol
bigint
*/

// let a: number = 3;
// a = 4;
// a = 9.0;
// a = -8.8;
// a = "string";

// 타입추론 - 타입스크립트가 자동으로 타입을 추론하는 것
// 개발자가가 명시적으로 보이는게 좋다.
// let a = true;
// a = false;
// a = 1;

let a: number = 3;
a = 4;

let b: null = null;
let c: undefined = undefined;
//  null과 undefined는 무슨 차이?
// 둘다 값이 없는것

// null은 의도적으로 값이 없음을 나타내는 것 - 값이 없다고 명시적으로 표현
// null은 값이 없음을 나타내는 타입
// undefined는 값이 할당되지 않은 상태, 아직 정의되지 않은 상태

function double(n: number) {
	return n * 2;
}
console.log(double(3));
