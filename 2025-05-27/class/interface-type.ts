interface IStudent {
	name: string;
	age?: number;
}
// 인터페이스는 객체만 가능

type TStudent = {
	name: string;
	age?: number;
};
// 타입은 원시타입도 가능
// 타입은 객체, 함수, 배열, 튜플 타입 가능

type NewType = number | string;
type Tuple = [number, string];

let b: IStudent = { name: "noona" };
let c: TStudent = { name: "noona", age: 20 };

//  인터페이스, 타입 둘다 많이 사용함

// interface의 장점 - 확장 관계
interface IPerson {
	name: string;
	age: number;
	gender: string;
}

interface IForeinger extends IPerson {
	nationality: string;
}

// 타입에서도 확장 가능
type TForeinger = IPerson | { nationality: string; period: Date };

let american: TForeinger = {
	name: "John",
	age: 30,
	gender: "F",
	nationality: "usa",
};
