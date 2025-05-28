// 문제 1.

// Product 타입 정의
type Product = {
	id: number;
	name: string;
	price: number;
};

// Discount 타입 정의
type Discount = {
	discountPercentage: number;
};

type DiscountedProduct = Product & Discount;

function calculateDiscountedPrice(item: DiscountedProduct): number {
	return (item.price * (100 - item.discountPercentage)) / 100;
}

// 테스트 코드
const discountedProduct: DiscountedProduct = {
	id: 101,
	name: "Laptop",
	price: 1000,
	discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct)); // 800

// 문제 2.
// ContactInfo 타입 정의
type ContactInfo = {
	phone: string;
	address: string;
};

// OrderInfo 타입 정의
type OrderInfo = {
	orderId: number;
	items: string[];
};

type DetailInfo = ContactInfo & OrderInfo;

function printOrderSummary(order: DetailInfo): string {
	return `Order ${order.orderId} (Phone: ${order.phone})`;
}

// 테스트 코드
const orderDetails = {
	phone: "123-456-7890",
	address: "123 Main St",
	orderId: 2023,
	items: ["Laptop", "Mouse"],
};

console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"

// 문제 3.
// 기본 사용자 정보 타입 정의
type Profile = {
	id: number;
	name: string;
	email: string;
};

// 사용자 활동 기록 타입 정의
type Activity = {
	lastLogin: Date;
	actions: string[];
};
type UserData = Profile & Activity;

// 사용자 데이터를 병합하는 함수
function mergeUserData(profile: Profile, activity: Activity): UserData {
	return { ...profile, ...activity };
}
// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user: UserData): string {
	return `사용자 ${user.id} - ${user.name} (${user.email}) - 마지막 로그인: ${user.lastLogin}`;
}

// 테스트 코드
const profile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity = {
	lastLogin: new Date("2024-01-01T10:00:00Z"),
	actions: ["login", "viewed dashboard", "logout"],
};

console.log(mergeUserData(profile, activity));
const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"
