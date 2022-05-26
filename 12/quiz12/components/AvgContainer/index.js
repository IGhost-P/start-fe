import { $targetSelector } from "../../util/selector.js";
import { InputForm, Result } from "../../components/index.js";
export function AvgContainer({ $target }) {
  this.$avgInputForm = $targetSelector($target, "form");
  this.$result = $targetSelector($target, "#result");

  this.state = {
    searchText: "",
    result: [],
  };

  this.setState = function (nextState) {
    this.state = nextState;
    moreBtn.setState(this.state);
    result.setState(athis.state.result);
  };

  const avgInputForm = new InputForm({
    $target: this.$avgInputForm,
    initialState: this.state.searchText,
    onInput: (searchText) => {
      this.setState({ searchText });
    },
  });

  const result = new Result({
    $target: this.$result,
    initialState: this.state.result,
  });
}
