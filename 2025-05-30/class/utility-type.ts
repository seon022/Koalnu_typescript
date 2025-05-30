// 유틸리티 타입

// 1. Omit
// 빼는거!

interface User {
	id: number;
	name: string;
	email: string;
	password: string;
	age: number;
}
// interface PublicUser {
// 	id: number;
// 	name: string;
// 	email: number;
// }

type PublicUser = Omit<User, "password" | "age">;
// User가 업데이트 되어도 Password만 빼진 상태로 업데이트되니까! 편함

let userProfile: PublicUser = {
	id: 12,
	name: "122",
	email: "",
};

// 2. Pick
// 필드네임 바뀌어도 업데이트 되니까 편함.
type BasicUserInfo = Pick<User, "id" | "name">;

// 3.Partial  ~ ? optional하게 만들어줌
interface Address {
	street: string;
	city: string;
	country: string;
}
const updateAddress = (address: Partial<Address>) => {
	console.log(address);
};
updateAddress({ street: "23" });
