import { get as getStorage, set as setStorage } from "./utils/storage.js";
import { From, PrintTodos } from "./components/index.js";
import { $ } from "./utils/selector.js";

console.log("app is running");

export default function App({ $target }) {
  const $todos = $("#todos");
  const $form = $(".new-task");

  this.state = {
    todos: getStorage() || [],
  };

  this.setState = function (nextState) {
    console.log(nextState);
    this.state = nextState;

    printTodos.setState(this.state.todos);
    setStorage(this.state.todos);
  };

  const printTodos = new PrintTodos({
    $target: $todos,
    initialState: [...this.state.todos],
    onClick: (nextState) => {
      this.setState(nextState);
    },
  });

  const form = new From({
    $target: $form,
    onSubmit: (todo) => {
      this.setState({ todos: [...this.state.todos, todo] });
    },
  });
}
