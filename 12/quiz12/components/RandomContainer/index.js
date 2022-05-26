import { $targetSelector } from "../../util/selector.js";
import { TwoInputForm, Result } from "../../components/index.js";
import { random } from "../../util/random.js";
export function RanDomContainer({ $target }) {
  this.$ranDomInputForm = $targetSelector($target, "form");
  this.$result = $targetSelector($target, "#result");

  this.$ranDomSubMitBtn;

  this.state = {
    min: "",
    max: "",
  };

  this.setState = function (nextState) {
    this.state = nextState;
    result.setState(random(Number(this.state.min), Number(this.state.max)));
  };

  const ramdomMinInputForm = new TwoInputForm({
    $target: this.$ranDomInputForm,
    initialState: {
      min: this.state.min,
      max: this.state.max,
    },
    onSubmit: (nextState) => {
      this.setState(nextState);
    },
  });

  const result = new Result({
    $target: this.$result,
  });
}
