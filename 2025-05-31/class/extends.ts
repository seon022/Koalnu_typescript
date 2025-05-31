// extends 를 사용해서 조건부로 타입 결정

interface Track {
	type: "track";
	title: string;
}
interface Artist {
	type: "artist";
	name: string;
	debutYear: number;
}
// 유니언타입 단점 트랙 아티스트 합쳐저도 에러없음
// type을 넣어주면 둘중 한 타입으로만 가능
type SearchItem<T extends "track" | "artist"> = T extends "track"
	? Track
	: Artist;

const result: SearchItem<"track"> = {
	type: "track",
	title: "",
};

// inter 타입추론해줘~
type ReturnTypeOfFunction<T> = T extends (...args: any[]) => infer R
	? R
	: never;

function getUserInfo() {
	return { name: "alice", age: 23 };
}
// 제네릭타입으로는 "타입"만 들어갈 수 있으니까, typeof 함수 형태로 넣어야함.
type UserInfo = ReturnTypeOfFunction<typeof getUserInfo>;

// T ~ promise로 감싼 타입만 들어올 수 있다.
// 비동기호출 결과값이 promise로 담겨올때, 비동기처리를 통해서 들어온 데이터안의 타입추론론.
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type PromiseString = Promise<string>;

type Result = UnwrapPromise<PromiseString>;

// 배열안의 요소 추론할때
type ElementType<T> = T extends (infer U)[] ? U : T;
type ArrayOfNumbers = number[];

type SingleNumber = ElementType<ArrayOfNumbers>;

// as 타입추론 안됐을때 강제로 타입확정정해줌
let someValue: unknown = "Hello, world";

let newValue = someValue as string;

console.log(newValue.length);

const inputElement = document.querySelector("input");
// 타입스크립트를 컴파일할때는 index.html파일 모르니까까 null 또는 element 로 간주 input인지 모름.
// 확정해주면 에러 안남.
const input = inputElement as HTMLInputElement;

input.value = "23232dwsdfsd";
