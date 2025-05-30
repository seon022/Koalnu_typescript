//  record 타입
// 객체 타입에서도 무슨 키값, 무슨 필드가 올지 모르고, 필드 타입도 모를때, 객체 타입이 동적일때, 사용
// 각각 키와 값의 타입입
type StringNumberMap = Record<string, number>;

const example: StringNumberMap = {
	apple: 2,
	orange: 3,
	mango: 23,
};

type FruitColor = Record<"apple" | "mango" | "orange", string>;

const fruitColor: FruitColor = {
	apple: "red",
	orange: "orange",
	mango: "green",
};
// 타입이 바뀔 가능성 있을때 쓰면 좋음

type UserRole = "admin" | "user" | "guest";
type RolePermission = { admin: string; user: "string"; guest: string };

type RolePermission2 = Record<UserRole, string>;
// Record로 하면  UserRole변경되거나 추가할때, UserRole에만 추가변경하면 됨.

// 특정타입의 패턴이 반복될때도 쓸 수 있음.
type Product = { id: string; name: string; price: number };

type ProductInventory = Record<string, Product>;
// api가 확정되지 않았을때 쓰면 좋음
// 필드명은 정확히 뭔지 모르지만, 필드에 오는 데이터값은 알때

const inventoryResponse: ProductInventory = {
	apple: { id: "2", name: "apple", price: 23 },
	orange: { id: "2", name: "apple", price: 23 },
};
