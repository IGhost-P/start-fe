import Drag from "./Drag.js";

const $ = (selector) => document.querySelector(selector);

const $box = $(".box");
const $box1 = $(".box1");

new Drag({ $target: $box });
new Drag({ $target: $box1 });
