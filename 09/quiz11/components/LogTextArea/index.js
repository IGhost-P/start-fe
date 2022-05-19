export function LogTextArea({ $target, initialState }) {
  this.state = initialState;

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = function () {
    $target.innerHTML = this.state;
  };
}
