//  Q1.----------------------
var user = {
    name: "Alice",
    isAdmin: true,
};
user = {
    name: "Bob",
    age: 40,
    isAdmin: false,
};
// Q2.----------------------
var numbers = [1, 2, 3];
// numbers.push(4);
// numbers[0] = 42;
// Q3.----------------------
var products = [
    ["Laptop", 1000, true],
    ["Shoes", 50, false],
    ["Book", 20, true],
];
// Q3-1. 상품 이름과 가격만 반환,리턴타입 정의필요
function getProductNamesAndPrices(products) {
    var result = [];
    for (var i = 0; i < products.length; i++) {
        var _a = products[i], name_1 = _a[0], price = _a[1];
        result[i] = [name_1, price];
    }
    return result;
}
// Q3-2. 재고가 있는 상품만 반환,리턴타입 정의필요
function getAvailableProducts(products) {
    var result = [];
    for (var i = 0; i < products.length; i++) {
        var isAvailable = products[i][2];
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
function updateUser(user) {
    if (!user.age) {
        user.age = 18;
    }
    else {
        user.age = user.age;
    }
    return user;
}
// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }
// Q5. ----------------------
var newProducts = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Shoes", price: 50, category: "Fashion" },
    { name: "Book", price: 20 },
];
function getProductsByCategory(category) {
    var result = [];
    for (var i = 0; i < newProducts.length; i++) {
        var product = newProducts[i];
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
