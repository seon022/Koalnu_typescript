/*
 ✅ 문제 1
 */

// 매개변수, 리턴타입 정의필요
function processInput(input: number[] | string[] | { message: string }) {
	if (Array.isArray(input)) {
		if (typeof input[0] === "number") {
			return (input as number[]).reduce((sum, num) => sum + num, 0);
		} else if (typeof input[0] === "string") {
			return (input as string[]).join("");
		}
	} else if (typeof input === "object" && "message" in input) {
		return input.message.toUpperCase();
	} else {
		throw new Error("올바르지 않은 입력 형식입니다.");
	}
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
try {
	console.log(processInput(42)); // 에러 발생
} catch (error) {
	console.error("Error:", error.message);
}

/*
 ✅ 문제 2
 */

class Car {
	brand: string;
	constructor(brand: string) {
		this.brand = brand;
	}
}
class Bike {
	type: string;

	constructor(type: string) {
		this.type = type;
	}
}

function processVehicle(vehicle: Car | Bike): string {
	if (vehicle instanceof Car) {
		return vehicle.brand.toUpperCase();
	} else if (vehicle instanceof Bike) {
		return `Bike: ${vehicle.type}`;
	}

	throw new Error("올바르지 않은 vehicle입니다.");
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
try {
	console.log(processVehicle("unknown")); // 에러 발생
} catch (error) {
	console.error("Error:", error.message);
}

/*
 ✅ 문제 3
 */
type Admin = {
	type: "admin";
	permissions: string[];
};

type User = {
	type: "user";
	email: string;
};

function processUser(user: Admin | User): string {
	if ("permissions" in user) {
		return user.permissions.join(",");
	} else if ("email" in user) {
		return user.email;
	}
	throw new Error("올바르지 않은 사용자입니다.");
}

console.log(processUser({ type: "admin", permissions: ["read", "write"] }));
console.log(processUser({ type: "user", email: "user@example.com" }));

try {
	console.log(processUser({ type: "guest" })); // 에러
} catch (error) {
	console.error("Error:", error.message);
}

/*
 ✅ 문제 4
 */

type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
	return (
		(shape as Rectangle).width !== undefined &&
		(shape as Rectangle).height !== undefined
	);
}

function calculateArea(shape: Rectangle | Circle): number {
	if (isRectangle(shape)) {
		return shape.width * shape.height;
	} else {
		return Math.PI * shape.radius * shape.radius;
	}
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)

/*
 ✅ 문제 5
 */
type Shape =
	| { type: "square"; side: number }
	| { type: "circle"; radius: number };

function calculate(shape: Shape): number {
	switch (shape.type) {
		case "square":
			return shape.side * shape.side;
		case "circle":
			return Math.PI * shape.radius * shape.radius;
		default:
			exhaustiveCheck(shape);
			return 0;
	}
}
function exhaustiveCheck(params: never) {
	throw new Error("매개변수 타입을 확인해주세요");
}
console.log(calculate({ type: "square", side: 5 }));
console.log(calculate({ type: "circle", radius: 7 }));

try {
	console.log(calculate({ type: "glgl" }));
} catch (error) {
	console.error("Error:", error.message);
}
