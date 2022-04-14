import { createEl } from "../../util/createEl.js";

export function MinMaxForm({ $target, initialState, onSubmit }) {
  this.$minInput = $target.querySelector("#min");
  this.$maxInput = $target.querySelector("#max");
  this.state = initialState;

  $target.addEventListener("submit", (e) => {
    e.preventDefault();
    const nextState = {
      min: Number(this.$minInput.value),
      max: Number(this.$maxInput.value),
    };
    onSubmit(nextState);
  });
}
