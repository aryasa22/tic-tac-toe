const fields = document.querySelectorAll("[data-field]");
const ket = document.querySelector("[data-game]");
const playBtn = document.querySelector("[data-play]");
const playerText = document.querySelector("[data-player]");
const turnText = document.querySelector("[data-turn]");

let count = 0;

const play = (field) => {
  if (ket.innerText !== "") return;
  if (count % 2 === 0 && field.innerText === "") {
    field.innerText = "X";
    turnText.innerText = "2";
    count++;
  } else if (count % 2 !== 0 && field.innerText === "") {
    field.innerText = "O";
    turnText.innerText = "1";
    count++;
  }
};

const check = () => {
  const blankFields = [...fields].filter((field) => {
    return field.innerText === "";
  });

  if (fields[0].innerText !== "") {
    if (
      fields[0].innerText === fields[1].innerText &&
      fields[0].innerText === fields[2].innerText
    ) {
      playBtn.classList.remove("hidden");
      playerText.classList.add("hidden");
      if (fields[0].innerText === "X") {
        ket.innerText = "Player 1 Wins";
      } else {
        ket.innerText = "Player 2 Wins";
      }
      return;
    }
    if (
      fields[0].innerText === fields[3].innerText &&
      fields[0].innerText === fields[6].innerText
    ) {
      playBtn.classList.remove("hidden");
      playerText.classList.add("hidden");
      if (fields[0].innerText === "X") {
        ket.innerText = "Player 1 Wins";
      } else {
        ket.innerText = "Player 2 Wins";
      }
      return;
    }
    if (
      fields[0].innerText === fields[4].innerText &&
      fields[0].innerText === fields[8].innerText
    ) {
      playBtn.classList.remove("hidden");
      playerText.classList.add("hidden");
      if (fields[0].innerText === "X") {
        ket.innerText = "Player 1 Wins";
      } else {
        ket.innerText = "Player 2 Wins";
      }
      return;
    }
  }

  if (fields[1].innerText !== "") {
    if (
      fields[1].innerText === fields[4].innerText &&
      fields[1].innerText === fields[7].innerText
    ) {
      playBtn.classList.remove("hidden");
      playerText.classList.add("hidden");
      if (fields[1].innerText === "X") {
        ket.innerText = "Player 1 Wins";
      } else {
        ket.innerText = "Player 2 Wins";
      }
      return;
    }
  }

  if (fields[2].innerText !== "") {
    if (
      fields[2].innerText === fields[4].innerText &&
      fields[2].innerText === fields[6].innerText
    ) {
      playBtn.classList.remove("hidden");
      playerText.classList.add("hidden");
      if (fields[2].innerText === "X") {
        ket.innerText = "Player 1 Wins";
      } else {
        ket.innerText = "Player 2 Wins";
      }
      return;
    }
    if (
      fields[2].innerText === fields[5].innerText &&
      fields[2].innerText === fields[8].innerText
    ) {
      playBtn.classList.remove("hidden");
      playerText.classList.add("hidden");
      if (fields[2].innerText === "X") {
        ket.innerText = "Player 1 Wins";
      } else {
        ket.innerText = "Player 2 Wins";
      }
      return;
    }
  }

  if (fields[3].innerText !== "") {
    if (
      fields[3].innerText === fields[4].innerText &&
      fields[3].innerText === fields[5].innerText
    ) {
      playBtn.classList.remove("hidden");
      playerText.classList.add("hidden");
      if (fields[3].innerText === "X") {
        ket.innerText = "Player 1 Wins";
      } else {
        ket.innerText = "Player 2 Wins";
      }
      return;
    }
  }

  if (fields[6].innerText !== "") {
    if (
      fields[6].innerText === fields[7].innerText &&
      fields[6].innerText === fields[8].innerText
    ) {
      playBtn.classList.remove("hidden");
      playerText.classList.add("hidden");
      if (fields[6].innerText === "X") {
        ket.innerText = "Player 1 Wins";
      } else {
        ket.innerText = "Player 2 Wins";
      }
      return;
    }
  }

  if (blankFields.length === 0) {
    ket.innerText = "Draw";
    playBtn.classList.remove("hidden");
    playerText.classList.add("hidden");
    return;
  }
};

fields.forEach((field) => {
  field.addEventListener("click", (e) => {
    play(e.target);
    check();
  });
});

playBtn.addEventListener("click", () => {
  count = 0;
  ket.innerText = "";
  fields.forEach((field) => {
    field.innerText = "";
  });
  playBtn.classList.add("hidden");
  playerText.classList.remove("hidden");
  turnText.innerText = "1";
});
