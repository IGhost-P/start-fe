// 2주차 실습

var name = "yangsangwoo";
console.log(name); // 이름을 찍는다. => 타입 스크립트 에러

var age = 76;
var isMan = "true";
var isMan1 = true;
var message = "hello" + name;

console.log(isMan);
console.log(isMan);

// object
var image = {};
image.width = 1;
image.height = 2;

image["width"] = 1;

// array
var arr = [1, 2, 3, 4, 5];
console.log(arr);

var person = {
  nick: "SW",
  age: 27,
  area: "jeju",
  sayHello: function () {
    console.log("hello world");
  },
};

person.sayHello();
