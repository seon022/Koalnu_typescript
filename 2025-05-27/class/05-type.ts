// any
// any 타입은 모든 타입을 허용
// 타입스크립트에서 굳이 왜 사용하는가?
// 아직 타입 정해지지 않았을때 사용. api명세서 안나왔을때 정도만 사용.

let a: any = 3;

// unknown
// 타입 잘 모를때 사용
let b: string = a;
// string타입이니까 unknown타입을 할당할 수 없음
// a가 any타입일 경우 에러가 나지 않지만, unknown타입일 경우 에러가 발생함

// b.toUpperCase();

let anyType: any;
let unknownType: unknown;

anyType = "hello";
unknownType = "hello";

console.log(anyType.toUpperCase()); // "HELLO"

if (typeof unknownType === "string") {
	console.log(unknownType.toUpperCase());
}
// 에러 발생: 'unknown' 타입에는 'toUpperCase'가 없습니다.
// 타입을 확정해주면 에러 발생하지 않음.

// void
// 함수 return이 없을때, 함수 타입은 void가 됨.
function double(a, b) {
	console.log(a, b);
}

// 언제 쓰는가? return값 없는 함수의 타입 지정할때
interface NewType {
	name: string;
	age: number;
	double: (a: number, b: number) => void;
	getAge: (age: number) => void;
}

// never
// 함수가 return이 있을 수가 없을 경우에 사용.
function infinite(): never {
	while (true) {}
}

function throwError(): never {
	throw new Error("항상 에러 던진다다");
}

type AorB = { a: number; b?: never } | { a?: never; b: number };
// 유니언타입의 단점
// 타입스크립트는 유니언 타입에서 모든 조합을 허용하기 때문에 a,b 둘다 와도 에러가 발생하지 않음
// a와 b 둘다 존재하면 안되는 경우
// 하나를 선택적으로 만들고, 그 값이 절대로 존재하지 않도록 never타입 사용.

let c: AorB = {
	a: 2,
};
