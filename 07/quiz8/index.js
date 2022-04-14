import App from "./App.js";
import { $ } from "./util/selector.js";

const $App = $(".wrap");

new App({ $target: $App });
