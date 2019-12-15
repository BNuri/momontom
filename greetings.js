const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOW = "showing";

function saveName(name) {
  localStorage.setItem(USER_LS, name);
}

function handleEvent(event) {
  event.preventDefault();
  const currentName = input.value;
  console.log(currentName);
  paintGreeting(currentName);
  saveName(currentName);
}

function askForName() {
  form.classList.add(SHOW);
  form.addEventListener("submit", handleEvent);
}

function paintGreeting(text) {
  form.classList.remove(SHOW);
  greeting.classList.add(SHOW);
  greeting.innerText = `Good Day, ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
