import { $targetSelector } from "../../util/selector.js";
import { InputForm, Result } from "../../components/index.js";
import { avg } from "../../util/avg.js";
export function AvgContainer({ $target }) {
  this.$avgInputForm = $targetSelector($target, "form");
  this.$result = $targetSelector($target, "#result");

  this.state = {
    searchText: "",
  };

  this.setState = function (nextState) {
    this.state = nextState;
    result.setState(
      avg(
        this.state.searchText
          .replace(/[\[\]']+/g, "")
          .split(",")
          .filter(Number)
          .map(Number)
      ).toFixed(1)
    );
  };

  const avgInputForm = new InputForm({
    $target: this.$avgInputForm,
    initialState: this.state.searchText,
    onSubmit: (searchText) => {
      this.setState({ searchText });
    },
  });

  const result = new Result({
    $target: this.$result,
  });
}
