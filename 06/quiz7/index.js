import App from "./App.js";
import { $ } from "./util/selector.js";

const $App = $(".box");

new App({ $target: $App });
