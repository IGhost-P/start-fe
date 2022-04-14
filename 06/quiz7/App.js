import { CatchBox } from "./components/index.js";
import { createEl } from "./util/createEl.js";
import { $ } from "./util/selector.js";

export default function App({ $target }) {
  this.$point = $("#point");
  this.$life = $("#life");
  this.state = {
    point: 0,
    life: 10,
  };

  this.setState = function ({ point, life }) {
    this.state = { point, life };
    this.$point.innerText = point;
    this.$life.innerText = life;

    if (life === 0) {
      alert("gameover");
      location.reload();
    }
  };

  this.addPoint = function () {
    this.setState({ point: this.state.point + 1, life: this.state.life });
  };

  this.losePoint = function () {
    this.setState({ point: this.state.point, life: this.state.life - 1 });
  };

  const catchBox = new CatchBox({
    $target,
    addPoint: () => this.addPoint(),
    losePoint: () => this.losePoint(),
  });
}
