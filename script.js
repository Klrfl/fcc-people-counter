// buttons
let counter = document.getElementById('counter');

// increment
let increment = document.getElementById('increment');
let increment10 = document.getElementById('increment10');
// decrement
let decrement = document.getElementById('decrement');
let decrement10 = document.getElementById('decrement10');

let save = document.getElementById('save');
let resetcount = document.getElementById('resetcount');

// paragraph for number and reset button
let saved = document.getElementById('saved');
let resetsaved = document.getElementById('resetsaved');

let count = 0;

// listen to increment btn
increment.addEventListener('click', ()=>{
  count += 1;
  counter.innerText = count;
})

// listen to increment10 btn
increment10.addEventListener('click', ()=>{
  count += 10;
  counter.innerText = count;
})

// listen to decrement btn
decrement.addEventListener('click', ()=>{
  count -=1;
  counter.innerText = count;
})

decrement10.addEventListener('click', ()=>{
  count -=10;
  counter.innerText = count;
})

let countstr;
// listen to save btn
save.addEventListener('click', ()=>{
  countstr = count + "–";
  saved.innerText += countstr;
})

// reset count and reset saved counts btn
resetcount.addEventListener('click', ()=>{
  count = 0;
  counter.innerText = count;
})

resetsaved.addEventListener('click', ()=>{
  saved.innerText = "";
})