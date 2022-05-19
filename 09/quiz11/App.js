import { InputForm, Result, MoreBtn } from "./components/index.js";
import { API } from "./util/api.js";
import { $ } from "./util/selector.js";

console.log("app is running");
export default function App({ $target }) {
  this.$inputForm = $(".input-group");
  this.$result = $("#result");
  this.moreBtn = $(".more-btn");

  const api = new API();

  this.state = {
    searchText: "",
    result: [],
    pageCount: 1,
  };

  this.setState = function (nextState) {
    this.state = nextState;
    moreBtn.setState(this.state);
    result.setState(this.state.result);
  };

  const inputForm = new InputForm({
    $target: this.$inputForm,
    initialState: this.state.searchText,
    onSubmit: async (text) => {
      const { documents } = await api.getSearch(text);
      this.setState({
        ...this.state,
        searchText: text,
        result: documents,
        pageCount: 1,
      });
    },
  });

  const result = new Result({
    $target: this.$result,
    initialState: this.state.result,
  });

  const moreBtn = new MoreBtn({
    $target: this.moreBtn,
    initialState: this.state,
    onClick: async () => {
      const { documents } = await api.getMore(
        this.state.searchText,
        this.state.pageCount++
      );
      this.setState({
        ...this.state,
        result: [...this.state.result, ...documents],
      });
    },
  });
}
