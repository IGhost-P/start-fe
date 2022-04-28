import { InputForm, LogTextArea } from "./components/index.js";
import { API } from "./util/api.js";
import { $ } from "./util/selector.js";

console.log("app is running");
export default function App({ $target }) {
  this.$inputForm = $(".url-form");
  this.$log = $("#log");

  const api = new API();

  this.state = {};

  this.setState = function (nextState) {
    this.state = nextState;
    logTextArea.setState(this.state);
  };

  const inputForm = new InputForm({
    $target: this.$inputForm,
    initialState: this.state,
    onSubmit: async (url) => {
      const HTML = await api.get(url, null);
      this.setState(HTML);
    },
  });

  const logTextArea = new LogTextArea({
    $target: this.$log,
    initialState: this.state,
  });
}
