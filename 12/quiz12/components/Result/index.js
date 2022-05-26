export function Result({ $target, initialState }) {
  this.state = initialState;

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = function () {
    $target.innerHTML = this.makeMarkup();
  };

  this.makeMarkup = function () {
    return `
                <h1>${this.state}</h1>
            `;
  };
}
