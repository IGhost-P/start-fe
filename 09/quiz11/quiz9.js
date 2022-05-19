import App from "./App.js";
import { $ } from "./util/selector.js";

const $App = $(".container");

new App({ $target: $App });
