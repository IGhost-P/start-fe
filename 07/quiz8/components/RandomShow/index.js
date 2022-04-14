import { CHANGE_SPEED } from "../../../../06/quiz7/constant/bugSpeed.js";
import { createEl } from "../../util/createEl.js";

export function RandomShow({ $target, initialState }) {
  this.state = initialState;
  this.$showText = createEl("p", "show-text", 0);
  $target.appendChild(this.$showText);

  this.randomLocation = function (max, min) {
    return Math.floor(Math.random() * (max - 1 - min) + 1) + min;
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = function () {
    const value = this.randomLocation(this.state.max, this.state.min);

    let count = this.$showText.innerText;

    this.timer = setInterval(() => {
      console.log(value, count);
      if (count < value) {
        this.$showText.innerText = `+${count++}`;
      } else if (count > value) {
        this.$showText.innerText = `-${count--}`;
      } else if (count == value) {
        clearInterval(this.timer);
        return (this.$showText.innerText = count);
      }
    }, CHANGE_SPEED);
  };
}
