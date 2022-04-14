import { Result } from "./components/index.js";
import { createEl } from "./util/createEl.js";
import { $ } from "./util/selector.js";

export default function App({ $target }) {
  this.$result = createEl("div", "result-content");
  this.$form = $(".multiplication-from");
  this.$input = $("#num");

  this.state = this.$input.value;

  this.setState = function (nextState) {
    this.state = nextState;
    result.setState(this.state);
  };

  this.$form.addEventListener("submit", (e) => {
    e.preventDefault();
    this.inputValue = this.$input.value;
    if (this.inputValue.trim() === "" || !!!Number(this.inputValue)) {
      return alert("숫자를 입력해주세요");
    }
    this.setState(this.inputValue);
    this.$input.focus();
  });

  $target.appendChild(this.$result);

  const result = new Result({
    $target: this.$result,
    operand: this.inputValue,
    setState: this.setState,
  });
}
