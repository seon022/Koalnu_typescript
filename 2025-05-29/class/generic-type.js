// type ArrayType<T> = T[];
// // 타입을 호출할때 결정됨.
// const numberArray: ArrayType<number> = [1, 2, 3];
// const stringArray: ArrayType<string> = ["a", "b"];
var movie1 = { title: "", genre: "" };
var movie2 = { rate: 2 };
var pair = {
    first: "noona",
    second: 2,
    display: function () {
        console.log(this.first + "는" + this.second + "살입니다.");
    },
};
pair.display();
