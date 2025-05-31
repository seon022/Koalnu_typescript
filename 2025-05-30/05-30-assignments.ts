// 유틸리티 타입 과제

// 🚀 문제1
type User = {
	name: string;
	email: string;
	password: string;
};

type UpdatedInfo = Partial<User>;

// 함수 작성
function updateUserForm(user: User, updates: UpdatedInfo): User {
	return { ...user, ...updates };
}

// 테스트 코드
const currentUser = {
	name: "Alice",
	email: "alice@example.com",
	password: "1234",
};
const updatedForm = { email: "new-email@example.com" };

console.log(updateUserForm(currentUser, updatedForm));
// 기대 출력: { name: "Alice", email: "new-email@example.com", password: "1234" }

// 🚀 문제 2.

type UserProfile = {
	id: number;
	name: string;
	email: string;
	address: string;
};

type ProfileInfo = Pick<UserProfile, "id" | "name">;

// 함수 작성
function getProfileSummary(user: UserProfile): ProfileInfo {
	return { id: user.id, name: user.name };
}

// 테스트 코드
const userProfile = {
	id: 1,
	name: "Alice",
	email: "alice@example.com",
	address: "123 Main St",
};

console.log(getProfileSummary(userProfile));
// 기대 출력: { id: 1, name: "Alice" }

// 🚀 문제 3.

// 1. 기본타입 정의
type TUser = {
	name: string;
	email: string;
	password: string;
	role: string;
};

// 2. Omit 활용
type PublicUser = Omit<TUser, "password">;

// 함수 작성
function filterSensitiveInfo(user: TUser): PublicUser {
	const { password, ...publicUser } = user;
	return publicUser;
}

// 테스트 코드
const userInfo = {
	name: "Alice",
	email: "alice@example.com",
	password: "1234",
	role: "admin",
};

console.log(filterSensitiveInfo(userInfo));
// 기대 출력: { name: "Alice", email: "alice@example.com", role: "admin" }

// 🚀 문제 4.

type TeamMember = {
	id: number;
	name: string;
	email: string;
	role: "developer" | "designer" | "manager";
	isActive: boolean;
};

// 1. `createTeamMember` 함수 작성
function createTeamMember(
	data: Partial<TeamMember> & Pick<TeamMember, "id">
): TeamMember {
	return {
		id: data.id,
		name: data.name ?? "",
		email: data.email ?? "",
		role: data.role ?? "developer",
		isActive: data.isActive ?? true,
	};
}

// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(
	members: TeamMember[],
	filter: Pick<TeamMember, "role" | "isActive">
): TeamMember[] {
	return members.filter(
		(member) =>
			member.role === filter.role && member.isActive === filter.isActive
	);
}

// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(
	members: TeamMember[]
): Omit<TeamMember, "email">[] {
	return members.map((member) => {
		const { email, ...newInfo } = member;
		return newInfo;
	});
}

// 테스트 코드
const members: TeamMember[] = [
	{
		id: 1,
		name: "Alice",
		email: "alice@example.com",
		role: "developer",
		isActive: true,
	},
	{
		id: 2,
		name: "Bob",
		email: "bob@example.com",
		role: "designer",
		isActive: false,
	},
	{
		id: 3,
		name: "Charlie",
		email: "charlie@example.com",
		role: "manager",
		isActive: true,
	},
];

// 1. 새 팀원 생성
const newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }

// 2. 필터링된 팀원 목록
const activeDesigners = filterTeamMembers(members, {
	role: "designer",
	isActive: true,
});
console.log("필터링", activeDesigners);
// 기대 출력: []

// 3. 민감한 정보 제거
const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]

console.log("---------- record 타입 과제 -----------");

// 14. record 타입 과제

// 🚀 문제 1. 전자상거래 플랫폼에서 지역 코드에 따른 배송비를 계산하는 로직을 작성하세요.

// 지역 코드 타입 정의
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";

// 배송비 데이터 정의
const shippingCosts: Record<RegionCode, number> = {
	US: 10,
	EU: 15,
	ASIA: 20,
	AFRICA: 25,
};

// 배송비 계산 함수 작성
// costs객체안에 region 키의 존재 여부 확인하는게 지역코드 에러 상황 확인에 더 확실

// fail 수정 후 재제출
function calculateShippingCost(
	region: RegionCode,
	costs: Record<RegionCode, number>
): number {
	if (!(region in costs)) {
		throw new Error(`Unsupported region code: ${region}`);
	}
	return costs[region];
}

// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
try {
	console.log(calculateShippingCost("AUSTRALIA" as RegionCode, shippingCosts)); // 에러 발생
} catch (error) {
	console.error(error.message); // "Unsupported region code: AUSTRALIA"
}

// 🚀 2. 학생들의 점수를 기록하고 평균 점수를 계산하는 문제입니다.

// 학생 점수 데이터 정의
const scores: Record<string, number> = {
	Alice: 85,
	Bob: 92,
	Charlie: 78,
};

// 평균 점수 계산 함수 작성
function calculateAverageScore(scores: Record<string, number>): number {
	let sum = 0;

	for (const key in scores) {
		sum += scores[key];
	}

	const count = Object.keys(scores).length;
	return count === 0 ? 0 : sum / count;
}

// 테스트 코드
console.log(calculateAverageScore(scores)); // 85

// 🚀  문제 3. 쇼핑몰에서 각 제품의 이름과 가격을 매핑하고, 특정 제품의 가격을 업데이트하는 기능을 구현하세요.

// 제품 가격 데이터 정의
const prices: Record<string, number> = {
	Laptop: 1000,
	Phone: 500,
	Tablet: 300,
};

// 가격 업데이트 함수 작성
function updateProductPrice(
	prices: Record<string, number>,
	product: string,
	newPrice: number
): Record<string, number> {
	return { ...prices, [product]: newPrice };
}

// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
