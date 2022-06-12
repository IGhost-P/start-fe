import { $targetSelector } from "../../utils/selector";

export function From({ $target, onSubmit }) {
  this.$input = $target.querySelector("input");

  $target.addEventListener("submit", (e) => {
    e.preventDefault();
    // todo 추가
    const todo = { title: this.$input.value, isDone: false };
    onSubmit(todo);

    // input 초기화
    this.$input.value = "";
  });
}
