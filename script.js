// buttons
let counter = document.getElementById('counter');

let increment = document.getElementById('increment');
let increment10 = document.getElementById('increment10');

let save = document.getElementById('save');

let resetcount = document.getElementById('resetcount');

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

// listen to save btn
save.addEventListener('click', ()=>{
  let countstr = count + "-";
  saved.innerText += countstr;
})

// resetcount btn
resetcount.addEventListener('click', ()=>{
  count = 0;
  counter.innerText = count;
})

resetsaved.addEventListener('click', ()=>{
  saved.innerText = "";
})