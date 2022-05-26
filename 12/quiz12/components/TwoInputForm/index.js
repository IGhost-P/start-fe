export function TwoInputForm({ $target, initialState, onSubmit }) {
  this.state = initialState;

  $target.addEventListener("submit", (e) => {
    e.preventDefault();

    this.state.max = $target.querySelector(".max").value;
    this.state.min = $target.querySelector(".min").value;

    if (this.state === "") {
      alert("검색어를 입력해주세요");
      return;
    }

    onSubmit({ min: this.state.min, max: this.state.max });
    $target.querySelector(".max").value = "";
    $target.querySelector(".min").value = "";
  });
}
