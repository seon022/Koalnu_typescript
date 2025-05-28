// type Track = {
// 	title: string;
// 	releaseDate: string;
// };

// type Artist = {
// 	name: string;
// 	releaseDate: string;
// };

// type SearchResult = Track | Artist;

// interface SearchResponse {
// 	searchResults: Track | Artist;
// }

// let results: SearchResult[] = [
// 	{ title: "hello", releaseDate: "2025" },
// 	{ name: "world", releaseDate: "2025" },
// ];

// // 자유에는 책임이 따른다.
// // 유니언 타입 사용하면 한 타입에 없는 필드에 접근할 때 오류가 발생
// // 타입 좁히기 해줘야 한다.

// function getName(result: Track | Artist) {
// 	return result.title;
// }

// 1. typeof number,string, boolean, undefined
// typeof 단점은 원시타입만 사용할 수 있다는 것.
// type SearchType = number | string | object;

// function searchByKeyword(keyword: SearchType) {
// 	// 넘버로 들어오는 타입은 스트링으로 바꿔주기
// 	console.log(typeof keyword);
// }

// console.log(searchByKeyword({ name: "3" }));

// 2. instanceof
// instanceof는 클래스나 생성자 함수로 만든 객체에 대해서만 사용할 수 있다.
// 자바스크립트 타입에 내장된 객체 타입만 사용할 수 있다. 인스턴스만 사용가능능

// type Period = {
// 	start: string;
// 	end: string;
// };
// type SearchType = Period | Date;
// function getDate(day: SearchType): Date {
// 	if (day instanceof Date) return day;
// 	return new Date(day.start);
// }

// getDate(new Date("2025-04-28"));
// getDate({ start: "2025-04-28", end: "2025-05-28" });

// 3. in
// type Track = {
// 	title: string;
// 	releaseDate: string;
// };

// type Artist = {
// 	name: string;
// 	releaseDate: string;
// };

// function getName(result: Track | Artist) {
// 	if ("title" in result) return result.title;

// 	if ("name" in result) return result.name;
// }

// 4. is
// 타입 가드 함수, 타입확정에 많이 사용
// function 타입가드(변수: any): 변수 is 특정타입 {
// 	return 조건식(변수가 특정타입일 수 밖에 없는 조건식)
// }

// // return조건식을 패스해서 return 했다면 변수는 무조건 특정타입이다. 라고 정의할때 쓰는게 is이다.
// type Track = {
// 	title: string;
// 	releaseDate: string;
// };

// type Artist = {
// 	name: string;
// 	releaseDate: string;
// };

// // 타입을 가드하는 함수
// // 매번 if( in)문 사용하지 않아도 되고, 함수 가져다 쓰면 된다.
// // as는 타입 단언으로 타입을 가정하는것.

// function isTrack(result: Track | Artist): result is Track {
// 	return (result as Track).title !== undefined;
// }
// function isArtist(result: Track | Artist): result is Artist {
// 	return (result as Artist).name !== undefined;
// }
// function printInfo(result: Track | Artist) {
// 	if (isTrack(result)) {
// 		console.log(result.title);
// 	} else if (isArtist(result)) {
// 		console.log(result.name);
// 	}
// }

// // boolean이 아니라, is 쓰는 이유
// // 특정 타입으로 result를 정해주지 않으면, 필드를 사용하려고 할때 에러남. result가 Track인지 Artist라는 보장이 없다.

// 유니언 타입의 함정 1 ---------------------------------------------------------------------
// 합집합의 개념이라서 둘중 한 타입이 아니라 합친 타입이어도 일부만 일치해도 통과함.
// 그래서 타입 식별자를 붙여줌. 리터럴타입으로.

type Track = {
	type: "track";
	title: string;
	releaseDate: string;
};

type Artist = {
	type: "artist";
	name: string;
	debutDate: string;
};

const result: Track | Artist = {
	type: "track",
	title: "hey",
	releaseDate: "2024",
};
// title: "hey",
// releaseDate: "2024",까지만 보고 넘어감.

interface Radio {
	type: "radio";
	title: string;
	numberOfSongs: number;
}
// 유니언 타입 함정2--------------------------------------
// 유니언 타입 갯수가 늘어날 수록 타입별로 처리한 함수에 문제가 생길 경우가 많음.

type SearchResult = Track | Artist | Radio;

function getTypeName(result: SearchResult) {
	if (result.type === "track") return "트랙";
	else if (result.type === "artist") return "아티스트";
	else if (result.type === "radio") return "라디오";
	// radio타입을 지나치게 된다.
	else {
		exhaustiveCheck(result);
		return "결과";
	}
}

// 리턴이 있을 수 없는 값 never
// 이런 함수를 세팅해두면 타입이 늘어났을 경우, 에러 발생하는 걸 찾을 수 있다. 안정성 체크 가능능
function exhaustiveCheck(params: never) {
	throw new Error("에러");
}
