export function Result({ $target, operand, setState }) {
  this.answer;
  this.state = operand;

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = function () {
    const markup = this.makeMultiplicationTable(this.state);
    $target.innerHTML = markup;
  };

  this.makeMultiplicationTable = function (operand) {
    this.answer = "";
    for (let j = 1; j <= 9; j++) {
      this.answer += `${operand} x ${j} = ${operand * j}` + "<br>";
    }
    return this.answer;
  };
}
