import App from "./App.js";
import { $ } from "./util/selector.js";

const $app = $("#app");

new App({ $target: $app });
