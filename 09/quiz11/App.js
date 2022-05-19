import { InputForm, Result } from "./components/index.js";
import { API } from "./util/api.js";
import { $ } from "./util/selector.js";

console.log("app is running");
export default function App({ $target }) {
  this.$inputForm = $(".input-group");
  this.$result = $("#result");

  const api = new API();

  this.state = {
    searchText: "",
    result: [],
  };

  this.setState = function (nextState) {
    this.state = nextState;
    result.setState(this.state.result);
    console.log(this.state.result);
  };

  const inputForm = new InputForm({
    $target: this.$inputForm,
    initialState: this.state.searchText,
    onSubmit: async (text) => {
      const { documents } = await api.get(text);
      this.setState({ ...this.state, result: documents });
    },
  });

  const result = new Result({
    $target: this.$result,
    initialState: this.state.result,
  });
}
