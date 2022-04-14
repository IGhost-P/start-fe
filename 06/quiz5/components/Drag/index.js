export function Drag({ $target, top, left }) {
  this.dragging = false;

  this.mouseX;
  this.mouseY;
  this.eleX;
  this.eleY;

  this.$box = $target;
  this.$box.addEventListener("mousedown", (e) => this.mouseDown(e));
  this.$box.style.top = top + "px";
  this.$box.style.left = left + "px";
  this.mouseDown = function (e) {
    e.preventDefault();

    this.dragging = true;

    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
    this.eleX = Number.parseInt(this.$box.style.left);
    this.eleY = Number.parseInt(this.$box.style.top);

    document.addEventListener("mousemove", (e) => this.mouseMove(e));
    document.addEventListener("mouseup", (e) => this.mouseUp(e));
  };

  this.mouseMove = function ({ pageX, pageY }) {
    if (this.dragging) {
      this.deltaMouseX = pageX - this.mouseX;
      this.deltaMouseY = pageY - this.mouseY;

      this.$box.style.left = this.deltaMouseX + this.eleX + "px";
      this.$box.style.top = this.deltaMouseY + this.eleY + "px";
    }
  };

  this.mouseUp = function (e) {
    this.dragging = false;

    document.removeEventListener("mouseup", (e) => mouseUp(e));
    document.removeEventListener("mousemove", (e) => mouseMove(e));
  };
}
