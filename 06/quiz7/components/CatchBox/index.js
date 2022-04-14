import { createEl } from "../../util/createEl.js";

export function CatchBox({ $target, addPoint, losePoint }) {
  this.setState = function (nextState) {};
  this.randomLocation = function (max, min) {
    return (this.location = Math.floor(Math.random() * (max - min) + 1) + min);
  };

  this.render = function (top, left) {
    $target.querySelector(".bug")?.remove();
    this.box = createEl("div", "bug");
    $target.appendChild(this.box);

    this.box.style.top = top + "px";
    this.box.style.left = left + "px";
  };

  $target.addEventListener("click", (e) => {
    const $bug = e.target.closest(".bug");
    if ($bug) {
      addPoint();
    } else {
      losePoint();
    }
  });

  setInterval(() => {
    this.top = this.randomLocation(20, 380);
    this.left = this.randomLocation(20, 380);
    this.render(this.top, this.left);
  }, 1000);
}
