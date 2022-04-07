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

    dragging = this;

    mouseX = e.pageX;
    mouseY = e.pageY;
    eleX = Number.parseInt(dragging.style.left);
    eleY = Number.parseInt(dragging.style.top);

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  }

  function mouseMove(e) {
    if (dragging) {
      deltaMouseX = e.pageX - mouseX;
      deltaMouseY = e.pageY - mouseY;

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
