import { AvgContainer, RanDomContainer } from "./components/index.js";
import { $ } from "./util/selector.js";

console.log("app is running");
export default function App({ $target }) {
  this.$avgInputForm = $(".avg");
  this.$randomInputForm = $(".random");
  this.$result = $("#result");

  const avgContainer = new AvgContainer({
    $target: this.$avgInputForm,
  });

  const ranDomContainer = new RanDomContainer({
    $target: this.$randomInputForm,
  });
}
