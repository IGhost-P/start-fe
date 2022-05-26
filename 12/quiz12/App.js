import { AvgContainer } from "./components/index.js";
import { $ } from "./util/selector.js";

console.log("app is running");
export default function App({ $target }) {
  this.$avgInputForm = $(".avg");
  this.$randomInputForm = $(".random");
  this.$result = $("#result");

  this.state = {
    searchText: "",
    result: [],
  };

  this.setState = function (nextState) {
    this.state = nextState;
    moreBtn.setState(this.state);
    result.setState(this.state.result);
  };

  const avgContainer = new AvgContainer({
    $target: this.$avgInputForm,
    // initialState: this.state.searchText,
    // onInput: (searchText) => {
    //   this.setState({ searchText });
    // },
  });

  // const ranDomInputForm = new InputForm({
  //   $target: this.$avgInputForm,
  //   initialState: this.state.searchText,
  //   onInput: (searchText) => {
  //     this.setState({ searchText });
  //   },
  // });

  // const result = new Result({
  //   $target: this.$result,
  //   initialState: this.state.result,
  // });
}
