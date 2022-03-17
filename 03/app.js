console.log("app is running!");

// var count = [10, 20, 30, 40, 50, 60, 70, 100];
// total = count.reduce((acc, cur) => acc + cur);
// console.log("평균값:", total / count.length);

// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// const makeMultiplicationTable = () => {
//   for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }
//   }
// };
// makeMultiplicationTable();

// const object = {
//   name: "ysw",
//   perform: function () {
//     console.log(`My name is ${this.name} !!!!`);
//   },
// };
// object.perform();
// let value;
// let valueList = [];
// while (value != 0) {
//   value = window.prompt(
//     "숫자를 입력하세요, 그만 입력하시려면 숫자 0을 입력하세요",
//     value
//   );
//   valueList.push(Number(value));
// }
// const answer = valueList.reduce((acc, cur) => acc + cur);
// alert(`숫자 합입니다! : ${answer}`);

if ("test") {
  //true 로 자동 변환
  console.log("true");
}

var a = 1;
var b = a;
b = 2;
console.log(a, b);

var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);

var a = { x: 1 };
var b = a;
b.x = 2;
console.log(a, b);

function callbyValue(count) {
  count = count + 2;
}
var count = 3;
callbyValue(count);
console.log(count);

function callbyReference(count) {
  count.push("2");
}
var count = ["1"];
callbyReference(count);
console.log(count);

구문;
// if 문
var isMan = true;
var gender = "";

if (isMan) {
  gender = "남자";
} else {
  gender = "여자";
}
var gender = isMan ? "남자" : "여자";

var obj = { a: 1, b: 2 };

for (var prop in obj) {
  console.log(prop, obj[prop]);
} // 성능이 좋지 않음

function log(str) {
  console.log(str);
  return str;
}

alert("alert");

var answer = prompt("hi", value);

var isDelete = confirm("삭제하시겠습니까?");
if (isDelete) {
  // ...
}

if (confirm("삭제하시겠습니까?")) {
  // ...
}

var enc = encodeURIComponent("카카오");
decodeURIComponent(enc);

isNaN("1");
parseInt("12");
parseInt("09", 10);
parseFloat("10.33");

function test() {
  console.log("test()");
}

var id = setTimeout(test, 1000);

var id = setInterval(test, 1000); // 반복, 하지만 성능이 안좋음

//setInterval 대체
function test() {
  console.log("test()");
  setTimeout(test, 1000);
}

var nick = "aji";

function test() {
  var age = 30;
  console.log(nick, age);
}

test();
console.log(age);

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 3));

var car = function () {};

// 익명 즉시실행함수, IIFE 패턴
(function () {
  //코드
})();

var text = "abc def ghi jkl abc def"; //
var testReg = /abc/; // 찾을 문자열
var result = testReg.test(text);

console.log(result); // true

// --------- CRUD 구현하기 ---------//
let todoList = [];
class CRUD {
  #todoList;

  constructor(todoList) {
    this.#todoList = todoList;
  }
  creat(item) {
    return (this.#todoList = [...this.#todoList, item]);
  }

  read() {
    return console.log(this.#todoList.map((el) => el));
  }
  upData(findItem, changItem) {
    return (this.#todoList = this.#todoList.map((el) => {
      if (el === findItem) {
        return changItem;
      } else return el;
    }));
  }
  Delete(removeItem) {
    return (this.#todoList = this.#todoList.filter((el) => el !== removeItem));
  }
}
const crud = new CRUD(todoList);
crud.creat("밥먹기");
crud.creat("공부하기");
crud.creat("잠자기");

crud.read();
crud.upData("밥먹기", "공부하기");
crud.read();
crud.Delete("잠자기");
crud.read();
