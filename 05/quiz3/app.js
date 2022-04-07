console.log("App is running");
// helper function
const $ = (selector) => document.querySelector(selector);

const App = () => {
  $addRed = $(".add-red");
  $addBtn = $(".add-btn");
  $deleteBtn = $(".delete-btn");
  $textBtn = $(".text-btn");
  $resetBtn = $(".reset-btn");
  $toggleBtn = $(".toggle-btn");
  $imageBtn = $(".image-btn");
  $body = $("body");
  const $element = document.createElement("div");
  $element.className = "box-container";
  $body.appendChild($element);

  // Problem 1
  $addRed.addEventListener("click", (e) => {
    $box = document.getElementsByClassName("box");
    for (let i = 0; i < $box.length; i++) {
      $box[i].classList.add("red");
    }
  });

  // Problem 2
  $addBtn.addEventListener("click", (e) => {
    $element.innerHTML += `<div class ="box"></div>`;
  });

  // Problem 3
  $deleteBtn.addEventListener("click", (e) => {
    $box = $(".box");
    if (!$box) return;
    $element.querySelector(".box").remove();
  });

  // Problem 4
  $textBtn.addEventListener("click", (e) => {
    $text = $("input");
    $box = document.getElementsByClassName("box");
    for (let i = 0; i < $box.length; i++) {
      $box[i].textContent = $text.value;
    }
  });

  // Problem 5
  $resetBtn.addEventListener("click", (e) => {
    $element.innerHTML = "";
  });

  // Problem 6
  $toggleBtn.addEventListener("click", (e) => {
    $box = document.getElementsByClassName("box");
    for (let i = 0; i < $box.length; i++) {
      $box[i].classList.toggle("behind");
    }
  });

  //Problem 7
  $imageBtn.addEventListener("click", (e) => {
    $box = document.getElementsByClassName("box");

    if ($box.length < 1) {
      $element.innerHTML += `<div class ="box"></div>`;
    }
    for (let i = 0; i < $box.length; i++) {
      $box[i].innerHTML =
        '<img src="./69NjYBH.png" alt="star" width= "100%" heigth="100%"/>';
    }
  });
};
App();
