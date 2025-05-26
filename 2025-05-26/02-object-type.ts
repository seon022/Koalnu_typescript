//  Q1.----------------------
let user: { name: string; age?: number; isAdmin: boolean } = {
	name: "Alice",
	isAdmin: true,
};

user = {
	name: "Bob",
	age: 40,
	isAdmin: false,
};

// Q2.----------------------
let numbers: readonly number[] = [1, 2, 3];
// numbers.push(4);
// numbers[0] = 42;

// Q3.----------------------
const products: [string, number, boolean][] = [
	["Laptop", 1000, true],
	["Shoes", 50, false],
	["Book", 20, true],
];

// Q3-1. 상품 이름과 가격만 반환,리턴타입 정의필요
function getProductNamesAndPrices(
	products: [string, number, boolean][]
): [string, number][] {
	const result: [string, number][] = [];
	for (let i = 0; i < products.length; i++) {
		const [name, price] = products[i];
		result[i] = [name, price];
	}
	return result;
}

// Q3-2. 재고가 있는 상품만 반환,리턴타입 정의필요
function getAvailableProducts(
	products: [string, number, boolean][]
): [string, number, boolean][] {
	const result: [string, number, boolean][] = [];
	for (let i = 0; i < products.length; i++) {
		const isAvailable = products[i][2];
		if (isAvailable) {
			result.push(products[i]);
		}
	}
	return result;
}

// 테스트 코드
console.log(getProductNamesAndPrices(products));

console.log(getAvailableProducts(products));

// Q4.----------------------
function updateUser(user: { name: string; age?: number }): {
	name: string;
	age?: number;
} {
	if (!user.age) {
		user.age = 18;
	} else {
		user.age = user.age;
	}
	return user;
}

// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }

// Q5. ----------------------
const newProducts: { name: string; price: number; category?: string }[] = [
	{ name: "Laptop", price: 1000, category: "Electronics" },
	{ name: "Shoes", price: 50, category: "Fashion" },
	{ name: "Book", price: 20 },
];

function getProductsByCategory(category: string): string[] {
	const result: string[] = [];
	for (let i = 0; i < newProducts.length; i++) {
		const product = newProducts[i];
		if (product.category === category) {
			result.push(newProducts[i].name);
		}
	}
	return result;
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []
