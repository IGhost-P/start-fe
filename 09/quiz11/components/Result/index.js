export function Result({ $target, initialState }) {
  this.state = initialState;

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = function () {
    $target.innerHTML = this.makeMarkup();
  };

  this.makeMarkup = function (data) {
    const documents = this.state;
    const li = documents.map((doc) => {
      return `
                <li class="list-group-item"><a href="${doc.url}">${doc.contents}</a></li>
            `;
    });
    return `<ul class="list-group list-group-flush">${li.join("")}</ul>`;
  };
}
