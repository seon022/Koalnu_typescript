//  Q1.----------------------
let userName: string = "Alice";
let userAge: number = 25;
let isAdmin: boolean = true;

// Q2.----------------------
let productName: string = "코알누의 타입스크립트";
let productPrice: number = 20000;
let isAvailable: boolean = true;

console.log(
	`상품명 : ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`
);

// Q3.----------------------
function addNumbers(a: number, b: number): number {
	return a + b;
}
console.log(addNumbers(11, 4));

// Q4.----------------------
function stringifyValue(value: number | string | null | undefined): string {
	return value === null || value === undefined
		? "값이 없습니다."
		: value.toString();
}

console.log(stringifyValue("Hello"));
console.log(stringifyValue(23));
console.log(stringifyValue(null));
console.log(stringifyValue(undefined));

//  Q5.----------------------
function compareValues(a: unknown, b: unknown): string {
	if (a === b) {
		return "엄격한 동등성";
	} else if (a == b) {
		return "느슨한 동등성";
	} else {
		return "동등하지 않음";
	}
}

console.log(compareValues(23, "23")); // 느슨한 동등성
console.log(compareValues(null, undefined)); // 느슨한 동등성
console.log(compareValues(false, 0)); // 느슨한 동등성

console.log(compareValues(NaN, NaN)); // 동등하지 않음
// NaN 은 어떤 값과도 동등하지 않음! 자기 자신과도 같지 않다.

console.log(compareValues(42, 42)); // 엄격한 동등성

// Q6.----------------------
function isPrimitive(value: unknown): boolean {
	return (
		value === null ||
		value === undefined ||
		typeof value === "string" ||
		typeof value === "number" ||
		typeof value === "boolean" ||
		typeof value === "symbol" ||
		typeof value === "bigint"
	);
}

console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
