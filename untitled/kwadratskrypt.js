



function addRec() {
  if (!document.getElementsByClassName("rectangle-new")[0]) {
      const el = document.createElement("div");
      el.id = "rectangle-new";
      el.classList.add("rectangle-new");
      const div = document.querySelector("body");
      div.appendChild(el);
  } else {
      var el = document.getElementsByClassName('rectangle-new')[0];
      el.remove();
  }
}
