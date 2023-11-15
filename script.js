var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function removeParent(evt) {
  evt.target.parentNode.remove();
}

function lineThrough(event) {
  event.target.classList.toggle("done");
}

ul.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    lineThrough(event);
  }
  if (event.target.className === "delete") {
    removeParent(event);
  }
  if (event.target.className === "del") {
    removeParent(event);
  }
});

function createListElement() {
  if (input.value.trim() !== "") {
    var li = document.createElement("li");
    li.textContent = input.value;

    var btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.className = "delete";
    btn.onclick = removeParent;

    li.appendChild(document.createTextNode(" "));
    li.appendChild(btn);
    ul.appendChild(li);

    input.value = "";
  }
}

function addListAfterClick() {
  createListElement();
}

function addListAfterKeypress(event) {
  if (input.value.trim() !== "" && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
