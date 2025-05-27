// TypeScript에서만 사용하는 타입: enum (열거형 타입)

// enum은 정해진 값들의 집합을 타입으로 선언할 수 있는 기능이다.
// 예: 성별, 상태값 등 고정된 값이 필요한 경우에 유용하다.

enum Gender {
	FEMALE = "Female",
	MALE = "Male",
}

// 값 생략 시 자동으로 숫자가 할당된다. (0부터 시작)
enum SearchType {
	Date, // 0
	Keyword, // 1
	Order, // 2
}

console.log(SearchType.Date); // 0
console.log(SearchType.Keyword); // 1
console.log(SearchType.Order); // 2

// const enum
const enum FastSearchType {
	Date,
	Keyword,
	Order,
}

const search = FastSearchType.Keyword;
// 컴파일 후에는 const search = 1; 로 변환됨

// ----------------------------------------------
// 일반 enum vs const enum 차이점
// ----------------------------------------------

// enum:
// - 컴파일되면 JS에서 객체로 변환됨
// - 런타임에도 존재
// - 트리 쉐이킹 불가 (사용하지 않아도 번들에 포함됨)

// const enum:
// - 객체로 변환되지 않고 상수값으로 치환됨
// - 컴파일 타임에 값이 인라인됨
// - 트리 쉐이킹 가능 (사용하지 않으면 번들에서 제거됨)
