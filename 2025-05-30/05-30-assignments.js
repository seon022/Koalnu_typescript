// 유틸리티 타입 과제
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 함수 작성
function updateUserForm(user, updates) {
    return __assign(__assign({}, user), updates);
}
// 테스트 코드
var currentUser = {
    name: "Alice",
    email: "alice@example.com",
    password: "1234",
};
var updatedForm = { email: "new-email@example.com" };
console.log(updateUserForm(currentUser, updatedForm));
// 함수 작성
function getProfileSummary(user) {
    return { id: user.id, name: user.name };
}
// 테스트 코드
var userProfile = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    address: "123 Main St",
};
console.log(getProfileSummary(userProfile));
// 함수 작성
function filterSensitiveInfo(user) {
    var password = user.password, publicUser = __rest(user, ["password"]);
    return publicUser;
}
// 테스트 코드
var userInfo = {
    name: "Alice",
    email: "alice@example.com",
    password: "1234",
    role: "admin",
};
console.log(filterSensitiveInfo(userInfo));
// 1. `createTeamMember` 함수 작성
function createTeamMember(data) {
    var _a, _b, _c, _d;
    return {
        id: data.id,
        name: (_a = data.name) !== null && _a !== void 0 ? _a : "",
        email: (_b = data.email) !== null && _b !== void 0 ? _b : "",
        role: (_c = data.role) !== null && _c !== void 0 ? _c : "developer",
        isActive: (_d = data.isActive) !== null && _d !== void 0 ? _d : true,
    };
}
// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(members, filter) {
    return members.filter(function (member) {
        return member.role === filter.role && member.isActive === filter.isActive;
    });
}
// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(members) {
    return members.map(function (member) {
        var email = member.email, newInfo = __rest(member, ["email"]);
        return newInfo;
    });
}
// 테스트 코드
var members = [
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
var newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }
// 2. 필터링된 팀원 목록
var activeDesigners = filterTeamMembers(members, {
    role: "designer",
    isActive: true,
});
console.log("필터링", activeDesigners);
// 기대 출력: []
// 3. 민감한 정보 제거
var sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]
console.log("---------- record 타입 과제 -----------");
// 배송비 데이터 정의
var shippingCosts = {
    US: 10,
    EU: 15,
    ASIA: 20,
    AFRICA: 25,
};
// 배송비 계산 함수 작성
// costs객체안에 region 키의 존재 여부 확인하는게 지역코드 에러 상황 확인에 더 확실
// fail 수정 후 재제출
function calculateShippingCost(region, costs) {
    if (!(region in costs)) {
        throw new Error("Unsupported region code: ".concat(region));
    }
    return costs[region];
}
// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
try {
    console.log(calculateShippingCost("AUSTRALIA", shippingCosts)); // 에러 발생
}
catch (error) {
    console.error(error.message); // "Unsupported region code: AUSTRALIA"
}
// 🚀 2. 학생들의 점수를 기록하고 평균 점수를 계산하는 문제입니다.
// 학생 점수 데이터 정의
var scores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
};
// 평균 점수 계산 함수 작성
function calculateAverageScore(scores) {
    var sum = 0;
    for (var key in scores) {
        sum += scores[key];
    }
    var count = Object.keys(scores).length;
    return count === 0 ? 0 : sum / count;
}
// 테스트 코드
console.log(calculateAverageScore(scores)); // 85
// 🚀  문제 3. 쇼핑몰에서 각 제품의 이름과 가격을 매핑하고, 특정 제품의 가격을 업데이트하는 기능을 구현하세요.
// 제품 가격 데이터 정의
var prices = {
    Laptop: 1000,
    Phone: 500,
    Tablet: 300,
};
// 가격 업데이트 함수 작성
function updateProductPrice(prices, product, newPrice) {
    var _a;
    return __assign(__assign({}, prices), (_a = {}, _a[product] = newPrice, _a));
}
// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
