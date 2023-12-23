let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let show = document.querySelector(".show");
let para = document.querySelector("#para");
let dynamic = document.querySelector('.dynamic');
let start = 0;


let setBtn = document.querySelector("#setTime");

setBtn.addEventListener("click", addDynamic);

function addDynamic() {
  if (para) {
    para.remove();
  }
  start++;
  let dynamic = document.createElement("div");
  dynamic.className = "dynamic";
  let set = document.createElement("div");
  set.innerText = "Time Left:";
  let inputs = document.createElement("div");
  inputs.className = "inputs";
  let input1 = document.createElement("div");
  input1.className = "input";
  let input2 = document.createElement("div");
  input2.className = "input";
  let input3 = document.createElement("div");
  input3.className = "input";
  inputs.append(input1, input2, input3);
  let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.addEventListener("click", deleteTimer);
  dynamic.append(set, inputs, btn);
  show.appendChild(dynamic);
  let hour = parseInt(hrs.value) || 0;
  let minute = parseInt(min.value) || 0;
  let second = parseInt(sec.value) || 0;
  let seconds = hour * 60 * 60 + minute * 60 + second;
  let id = setInterval(timerStart, 1000);
  
  function timerStart() {
    input1.innerHTML = `${parseInt(
      seconds / 3600
    )} <span class = "span">:</span>`;
    input2.innerHTML = `${parseInt(
      (seconds % 3600) / 60
    )} <span class = "span">:</span>`;
    input3.innerHTML = parseInt((seconds % 3600) % 60);
    seconds--;
    if (seconds < 0) {
      dynamic.className = "done";
      dynamic.innerHTML = `<h1>Times Up!</h1>`;
      dynamic.appendChild(btn);
      let utterance = new SpeechSynthesisUtterance("Times up!");
      if(start != 0){
      speechSynthesis.speak(utterance);
    }
      clearInterval(id);
    }
  }

  // timerStart(input1, input2, input3);
}

function deleteTimer(event) {
  let parent = event.target.parentNode;
  start--;
  if(start == 0){
    show.appendChild(para);
  }
  // console.log(parent);
  parent.remove();
}

// let id = setInterval(timerStart, 1000);
