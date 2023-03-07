// buttons
const counterDisplay = document.getElementById("counter-display");

// negative number btn
const negative = document.getElementById("negative");
const resetcount = document.getElementById("resetcount");

// increment
const increment = document.getElementById("increment");
const increment10 = document.getElementById("increment10");
// decrement
const decrement = document.getElementById("decrement");
const decrement10 = document.getElementById("decrement10");

const save = document.getElementById("save");

// paragraph for number and reset button
const saved = document.getElementById("saved");
const resetsaved = document.getElementById("resetsaved");

let count = 0;

// ==== LISTEN TO BUTTONS ====

// listen to negative btn
let countToNegative = 0;
let negativeText = document.getElementById("negativeText");

// false initially, if clicked then set to true.
// if clicked AGAIN, then  set to false again
negative.addEventListener("click", () => {
  // set to true
  countToNegative += 1;

  negative.style.backgroundColor = "blue";
  negativeText.textContent = "ON";

  if (countToNegative !== 1) {
    countToNegative = 0;
    negative.style.backgroundColor = "transparent";
    negativeText.textContent = "OFF";
  }

  // reset count to 0
  if (count <= 0) {
    count = 0;
  }

  counterDisplay.textContent = count;
});

// listen to resetcount btn
resetcount.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// listen to increment btn
increment.addEventListener("click", () => {
  count += 1;
  counterDisplay.textContent = count;
});

// listen to increment10 btn
increment10.addEventListener("click", () => {
  count += 10;
  counterDisplay.textContent = count;
});

// listen to decrement btn
decrement.addEventListener("click", () => {
  // check if countToNegative is true
  if (countToNegative === 1) {
    count -= 1;
  } else {
    if (count > 0) {
      count -= 1;
    } else {
      count = 0;
    }
  }

  counterDisplay.textContent = count;
});

decrement10.addEventListener("click", () => {
  if (countToNegative === 1) {
    count -= 10;
  } else {
    if (10 >= count) {
      count = 0;
    } else {
      count -= 10;
    }
  }
  counterDisplay.textContent = count;
});

let countstr;
// listen to save btn
save.addEventListener("click", () => {
  countstr = count + "–";
  saved.textContent += countstr;
  // reset counterDisplay to 0
  count = 0;
  counterDisplay.textContent = count;
});

// reset saved entries btn
resetsaved.addEventListener("click", () => {
  saved.textContent = "";
});
