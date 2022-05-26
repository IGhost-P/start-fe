export function MoreBtn({ $target, initialState, onClick }) {
  this.state = initialState;

  this.setState = function (nextState) {
    this.state = nextState;
    if (this.state.result[0] !== undefined) {
      $target.classList.remove("hide");
    } else {
      $target.classList.add("hide");
    }
  };

  $target.addEventListener("click", (e) => {
    onClick();
  });
}
