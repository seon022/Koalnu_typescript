// Q1. ----------------------------
interface IUser {
	id: number;
	name: string;
	email?: string;
}
type TUser = {
	id: number;
	name: string;
	email?: string;
};

const user: IUser = {
	id: 1,
	name: "Alice",
};

const userWithEmail: TUser = {
	id: 2,
	name: "Bob",
	email: "bob@example.com",
};

// Q2. ----------------------------
// User 타입을 작성하세요.
type User = {
	id: number;
	name: string;
	address: {
		city: string;
		zipCode: number;
	};
};

// User 타입을 사용하여 아래 객체를 작성하세요.
const user2: User = {
	id: 1,
	name: "Alice",
	address: {
		city: "Seoul",
		zipCode: 12345,
	},
};

// Q3. ----------------------------

interface UserInterface {
	id: number;
	name: string;
	email?: string;
}

interface Admin extends UserInterface {
	role: string;
}

const normalUser: UserInterface = {
	id: 1,
	name: "Alice",
	email: "alice@example.com",
};

const adminUser: Admin = {
	id: 2,
	name: "Bob",
	role: "Administrator",
};

// Q4. ----------------------------
// Product 타입 작성
type Product = {
	id: number;
	name: string;
	price: number;
};

// DiscountedProduct 타입 작성 (Product 확장)
type DiscountedProduct = Product & { discount: number };

const normalProduct: Product = {
	id: 1,
	name: "Laptop",
	price: 1000,
};

const discountedProduct: DiscountedProduct = {
	id: 2,
	name: "Smartphone",
	price: 800,
	discount: 10,
};

// Q5. ----------------------------
// Product 타입 작성
type TProduct = {
	id: number;
	name: string;
	price: number;
};

// Order 타입 작성
type Order = {
	orderId: number;
	products: TProduct[];
	totalPrice: number;
};

const order: Order = {
	orderId: 101,
	products: [
		{ id: 1, name: "Laptop", price: 1000 },
		{ id: 2, name: "Mouse", price: 50 },
	],
	totalPrice: 1050,
};

// Q6. ----------------------------
// BaseUser 인터페이스 작성
interface BaseUser {
	id: number;
	name: string;
}

// AdminUser 타입 작성
type AdminUser = BaseUser & {
	role: string;
};

// GuestUser 타입 작성
type GuestUser = BaseUser & {
	visitCount: number;
};

const admin: AdminUser = {
	id: 1,
	name: "Alice",
	role: "Administrator",
};

const guest: GuestUser = {
	id: 2,
	name: "Bob",
	visitCount: 5,
};
