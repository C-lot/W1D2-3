const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const person = prompt("Welkom, wat is je naam?");

if (person != null) {
  displayMessage(
    `Hey ${person}!  Voer een nummer in van 0 tot 25 om te beginnen met raden...`
  );
}

let secretNumber = Math.trunc(Math.random() * 25) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);

  //no input
  if (!guess) {
    displayMessage(" Geen Nummer!");

    // correct
  } else if (guess === secretNumber) {
    displayMessage(
      `Gefeliciteerd je hebt gewonnen! Dag ${person}. Tot de volgende keer!`
    );
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }

  // niet correct
  else if (guess !== secretNumber) {
    displayMessage(
      guess > secretNumber ? "Te hoog! Raad opnieuw" : "Te laag! Raad opnieuw"
    );
  }
});
