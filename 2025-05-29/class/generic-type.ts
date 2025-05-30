// type ArrayType<T> = T[];
// // // 타입을 호출할때 결정됨.
// const numberArray: ArrayType<number> = [1, 2, 3];
// const stringArray: ArrayType<string> = ["a", "b"];

// type CategoryResponse = {
// 	status: string;
// 	totalPage: 20;
// 	tatalResult: number;
// 	page: number;
//   data: {name:string}[]
// };

// type ApiResponse<T> = {
// 	status: string;
// 	totalPage: 20;
// 	tatalResult: number;
// 	page: number;
// 	data: T[];
// };
// type Movie = {
// 	name: string;
// };
// type MovieResponse = ApiResponse<Movie>;

// // // useState
// // // 초기값 타입 모름름
// // // function useState(초기화값) {
// // // 	return [값, 함수];
// // // }

// // // function useState<T>(초기화값:T):[T, 함수<T>] {
// // // 	return [값, 함수];
// // // }
// const [value2, setValue2] = useState<boolean>(false)

// interface Length {
// 	length: number;
// }
// // 반드시 length를 가진 타입 T
// function getValue< extends Length>(data: T) {
// 	console.log(data.length);
// }

// console.log(getValue("hello"));
// console.log(getValue(3)); // 에러남 number는 length없음

// // 1.조건부 타입 ⭐

// type IsString<T> = T extends string ? "yes" : "no";
// // // string타입이라면 아예 리터럴 타입으로

// type result1 = IsString<number>;

// // 2. mapped type ⭐
// type Movie = {
// 	title: string;
// 	genre: string;
// 	rate: number;
// };
// // 모든걸 다 옵셔널하게 바꾼것것
// type Subset<T> = {
// 	readonly [K in keyof T]?: T[K];
// };

// const movie1: Subset<Movie> = { title: "", genre: "" };
// const movie2: Subset<Movie> = { rate: 2 };

// interface Pair<T, U> {
// 	first: T;
// 	second: U;
// 	display(): void;
// 	// display: ()=> void  화살표함수수
// }
// const pair: Pair<string, number> = {
// 	first: "noona",
// 	second: 2,
// 	display() {
// 		console.log(this.first + "는 " + this.second + "살입니다.");
// 	},
// };
// pair.display();
