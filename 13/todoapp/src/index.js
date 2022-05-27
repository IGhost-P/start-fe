import App from "./App.js";
import { $ } from "./utils/selector.js";

const $App = $(".container");

new App({ $target: $App });
