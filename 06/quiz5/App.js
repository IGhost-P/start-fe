import { Drag } from "./components/index.js";
import { createEl } from "./util/createEl.js";

export default function App({ $target }) {
  this.box = createEl("div", "box", "Drag Me!");
  this.box1 = createEl("div", "box box1", "Drag Me!");

  $target.appendChild(this.box);
  $target.appendChild(this.box1);

  const box = new Drag({ $target: this.box, top: 300, left: 100 });
  const box1 = new Drag({ $target: this.box1, top: 300, left: 400 });
}
