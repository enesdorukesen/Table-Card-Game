const cards = document.querySelectorAll(".card");
const red = document.querySelectorAll(".red");
const blue = document.querySelectorAll(".blue");
const counter1 = document.querySelector(".counter_1");
const counter2 = document.querySelector(".counter_2");
let redList = [];
let blueList = [];
const notification = document.querySelector(".notification");
const startBtn = document.querySelector(".start");
const backDrop = document.querySelector(".backdrop");
let check = false;
const alert = document.querySelector(".alert");

startBtn.addEventListener("click", () => {
  notification.style.display = "none";
  backDrop.style.display = "none";
  red.forEach((card) => {
    card.classList = "card red";
  });
  blue.forEach((card) => {
    card.classList = "card blue";
  });
  redList = [];
  blueList = [];
  counter1.textContent = 0;
  counter2.textContent = 0;
  gamePlay();
});

function gamePlay() {
  if (check) {
    return;
  } else {
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        card.classList.toggle("isflipped");
        console.log(card);
        const control = card.classList.contains("isflipped");
        const teamControl = card.classList.contains("red");

        if (control) {
          const number = Math.floor(Math.random() * 13) + 1;
          const imp = card.querySelector(".Implement");
          imp.innerHTML = number;
          if (teamControl) {
            redList.push(number);
            counter1.textContent = redList.reduce((total, num) => {
              return (total += num);
            }, 0);
          } else {
            blueList.push(number);
            counter2.textContent = blueList.reduce((total, num) => {
              return (total += num);
            }, 0);
          }
          if (counter1.textContent === "21") {
            setTimeout(function () {
              notification.style.display = "flex";
              backDrop.style.display = "flex";
              check = true;
              alert.textContent = "Player 1 wins!";
            }, 250);
          } else if (counter2.textContent === "21") {
            setTimeout(function () {
              notification.style.display = "flex";
              backDrop.style.display = "flex";
              check = true;
              alert.textContent = "Player 2 wins!";
            }, 250);
          }
        } else {
          const wasteNumber = parseInt(
            card.querySelector(".Implement").textContent
          );
          console.log(wasteNumber);
          if (teamControl) {
            const wasteIndex = redList.indexOf(wasteNumber);
            redList.splice(wasteIndex, 1);
            counter1.textContent = redList.reduce((total, num) => {
              return (total += num);
            }, 0);
          } else {
            const wasteIndex = blueList.indexOf(wasteNumber);
            blueList.splice(wasteIndex, 1);
            counter2.textContent = blueList.reduce((total, num) => {
              return (total += num);
            }, 0);
          }
          if (counter1.textContent === "21") {
            setTimeout(function () {
              notification.style.display = "flex";
              backDrop.style.display = "flex";
              check = true;
              alert.textContent = "Player 1 wins!";
            }, 250);
          } else if (counter2.textContent === "21") {
            setTimeout(function () {
              notification.style.display = "flex";
              backDrop.style.display = "flex";
              check = true;
              alert.textContent = "Player 2 wins!";
            }, 250);
          }
        }
      });
    });
  }
}

function killSwitch() {
  if (counter1.textContent === "21") {
    location.reload();
  }
}
