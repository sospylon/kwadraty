



function addRec() {
    let element = document.querySelector("#rectangle-new");
    if (element===null ) {
      const el = document.createElement("rectangle-new");
      el.id = "rectangle-new";
      el.classList.add("rectangle-new");
      const div = document.querySelector("body");
      div.appendChild(el);
  } else {
      let el = document.querySelector("#rectangle-new");
      console.log(element);
      document.body.removeChild(el);
  }
}
