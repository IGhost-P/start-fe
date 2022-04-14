import { createEl } from "../../util/createEl.js";

export function RandomShow({ $target, initialState }) {
  this.state = initialState;
  this.$showText = createEl("p", "show-text", 0);
  $target.appendChild(this.$showText);

  this.randomLocation = function (max, min) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = function () {
    const value = this.randomLocation(this.state.max, this.state.min);

    let count = this.$showText.innerText;

    setInterval(() => {
      if (count < value) {
        this.$showText.innerText = `+${count++};
      } else if (count > value) {
        this.$showText.innerText = count--;
      } else {
        return;
      }
    }, 50);
  };
}
