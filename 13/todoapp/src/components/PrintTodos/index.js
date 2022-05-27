export function PrintTodos({ $target, initialState, onClick }) {
  this.state = initialState;

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = function () {
    $target.innerHTML = this.makeMarkup();
  };

  this.makeMarkup = function () {
    return `
                <ul>
                    ${this.state
                      .map(
                        (todo, idx) => `
                        <li data-index="${idx}" class="${
                          todo.isDone ? "checked" : ""
                        }">
                            <button class="delete">×</button>
                            <input type="checkbox" class="toggle-checked" ${
                              todo.isDone ? "checked" : ""
                            } />
                            <span class="text">${todo.title}</span>
                        </li>
                    `
                      )
                      .join("")}
                </ul>
            `;
  };

  this.deleteTodo = function (index) {
    this.state.splice(index, 1);
  };

  this.toggleTodo = function (index) {
    this.state[index].isDone = !this.state[index].isDone;
  };

  $target.addEventListener("click", (e) => {
    const index = parseInt(e.target.parentNode.dataset.index, 10);
    if (e.target.className === "delete") {
      this.deleteTodo(index);
    } else if (e.target.className === "toggle-checked") {
      this.toggleTodo(index);
    }
    onClick({ todos: [...this.state] });
  });

  this.render();
}
