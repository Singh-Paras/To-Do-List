const inputBox = document.getElementById("input-box");
const list = document.getElementById("List");

function add() {
  if (inputBox.value === "") {
    var error = document.getElementById("error");
    error.play();
    setTimeout(() => {
      alert("Task can't be empty");
    }, 100);
  } else {
    var insert = document.getElementById("insert");
    insert.play();
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    let icon = document.createElement("I");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash-can");
    li.appendChild(icon);
  }
  inputBox.value = "";
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      var insert = document.getElementById("insert");
      insert.play();
    } else if (e.target.tagName === "I") {
      e.target.parentElement.remove();
      var audio = document.getElementById("clear-sound");
      audio.play();
    }
  },
  false
);

inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    add();
  }
});

const clear_button = document.getElementById("clear");
clear_button.addEventListener("click", function (e) {
  list.innerHTML = "";
  var audio = document.getElementById("clear-sound");
  audio.play();
});
