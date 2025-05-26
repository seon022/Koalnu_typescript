let b: { name: string; age?: number } = { name: "noona" };
let c: { name: string; age: number } = { name: "noona", age: 23 };

// console.log(b.name);
// b.name = "coding";

let fruits: string[] = ["banana", "apple"];
let numbers: number[] = [1, 2, 3, 4];
let num: Array<number> = [1, 2, 3, 4];

let students: { name: string; age: number; isStudent?: boolean }[] = [
	{
		name: "noona",
		age: 13,
		isStudent: false,
	},
	{
		name: "john",
		age: 13,
	},
];

// 튜플
let tuple: [string | number | boolean, number];
tuple = [23, 23];
