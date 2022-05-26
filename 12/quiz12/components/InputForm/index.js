export function InputForm({ $target, initialState, onSubmit }) {
  this.state = initialState;

  console.log(this.state);
  $target.addEventListener("submit", (e) => {
    e.preventDefault();
    this.state = $target.querySelector("input").value;

    if (this.state === "") {
      alert("검색어를 입력해주세요");
      return;
    }

    onSubmit(this.state);
  });
}
