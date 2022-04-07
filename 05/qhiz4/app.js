function drag() {
  let dragging = false;

  let mouseX, mouseY;
  let eleX, eleY;

  let box = document.querySelector(".box");
  box.addEventListener("mousedown", mouseDown);
  box.style.top = 0;
  box.style.left = 0;

  function mouseDown(e) {
    e.preventDefault();
    const { pageX, pageY } = e;

    dragging = this;
    mouseX = pageX;
    mouseY = pageY;
    eleX = Number.parseInt(dragging.style.left);
    eleY = Number.parseInt(dragging.style.top);

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  }

  function mouseMove({ pageX, pageY }) {
    if (dragging) {
      deltaMouseX = pageX - mouseX;
      deltaMouseY = pageY - mouseY;

      dragging.style.left = deltaMouseX + eleX + "px";
      dragging.style.top = deltaMouseY + eleY + "px";
    }
  }

  function mouseUp(e) {
    dragging = false;

    document.removeEventListener("mouseup", mouseUp);
    document.removeEventListener("mousemove", mouseMove);
  }
}

drag();
