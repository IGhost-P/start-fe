export function InputForm({ $target, initialState, onSubmit }) {
  this.state = initialState;

  $target.addEventListener("submit", (e) => {
    e.preventDefault();
    this.inputValue = $target.querySelector("input").value;
    onSubmit(this.inputValue);
  });
}
