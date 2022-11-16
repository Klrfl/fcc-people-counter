// buttons
let counter = document.getElementById('counter');

// increment
let increment = document.getElementById('increment');
let increment10 = document.getElementById('increment10');
// decrement
let decrement = document.getElementById('decrement');
let decrement10 = document.getElementById('decrement10');

let save = document.getElementById('save');

// paragraph for number and reset button
let saved = document.getElementById('saved');
let resetsaved = document.getElementById('resetsaved');

let count = 0;

// listen to increment btn
increment.addEventListener('click', ()=>{
  count += 1;
  counter.textContent = count;
})

// listen to increment10 btn
increment10.addEventListener('click', ()=>{
  count += 10;
  counter.textContent = count;
})

// listen to decrement btn
decrement.addEventListener('click', ()=>{
  count -=1;
  counter.textContent = count;
})

decrement10.addEventListener('click', ()=>{
  count -=10;
  counter.textContent = count;
})

let countstr;
// listen to save btn
save.addEventListener('click', ()=>{
  countstr = count + "–";
  saved.textContent += countstr;
  // reset counter to 0
  counter.textContent = "0";
  count = 0;
})

resetsaved.addEventListener('click', ()=>{
  saved.textContent = "";
})