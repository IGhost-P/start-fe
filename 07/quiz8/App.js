import { MinMaxForm, RandomShow } from "./components/index.js";
import { createEl } from "./util/createEl.js";
import { $ } from "./util/selector.js";

export default function App({ $target }) {
  this.$box = $("#box");
  this.$form = $(".random-from");

  this.state = {};

  this.setState = function (nextState) {
    this.state = nextState;
    randomShow.setState(this.state);
  };

  const minMaxForm = new MinMaxForm({
    $target: this.$form,
    initialState: this.state,
    onSubmit: (nextState) => {
      this.setState(nextState);
    },
  });

  const randomShow = new RandomShow({ $target: this.$box, state: this.state });
}
