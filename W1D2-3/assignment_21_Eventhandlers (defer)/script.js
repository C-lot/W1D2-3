const btn = document.querySelector(".btn-alert");
const btnBackground = document.querySelector(".btn-change");
const background = document.querySelector(".blue-background");

btn.addEventListener("click", (btnClicked = (e) => alert("Button clicked")));

const changeBackground = () => {
  background.classList.add("red-background");
};

btnBackground.addEventListener("click", changeBackground);

//Toggle

const toggleColor = () => {
  background.classList.toggle("red-background");
};

btnBackground.addEventListener("click", toggleColor);
