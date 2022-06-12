import { CHANGE_SPEED } from "../../constant/bugSpeed.js";
import { createEl } from "../../util/createEl.js";

export function CatchBox({ $target, addPoint, losePoint }) {
  this.bugHeight;
  this.bugWidth;

  this.randomLocation = function (max, min) {
    return (this.location = Math.floor(Math.random() * (max - min) + 1) + min);
  };

  this.render = function (top, left) {
    $target.querySelector(".bug")?.remove();
    this.box = createEl("div", "bug");
    $target.appendChild(this.box);

    this.box.style.top = top + "px";
    this.box.style.left = left + "px";
    this.bugHeight = Number(this.box.offsetHeight);
    this.bugWidth = Number(this.box.offsetWidth);
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
    this.top = this.randomLocation(
      this.bugHeight,
      $target.offsetHeight - this.bugHeight
    );
    this.left = this.randomLocation(
      this.bugWidth,
      $target.offsetWidth - this.bugWidth
    );
    this.render(this.top, this.left);
  }, CHANGE_SPEED);

  this.render();
}
