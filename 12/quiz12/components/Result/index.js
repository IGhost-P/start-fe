export function Result({ $target }) {
  this.state = "";

  this.setState = function (nextState) {
    this.state = nextState;
    console.log(this.state);
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
