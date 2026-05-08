const display = document.getElementById("display");
const historyList = document.getElementById("historyList");
const themeToggle = document.getElementById("themeToggle");

function appendValue(value){
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function deleteLast(){
  display.value = display.value.slice(0,-1);
}

function calculate(){

  try{

    let result = eval(display.value);

    addToHistory(display.value + " = " + result);

    display.value = result;

  }
  catch{
    display.value = "Error";
  }

}

function addToHistory(entry){

  const li = document.createElement("li");

  li.textContent = entry;

  historyList.prepend(li);

}

document.addEventListener("keydown",(e)=>{

  const key = e.key;

  if(
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "." ||
    key === "%"
  ){
    appendValue(key);
  }

  else if(key === "Enter"){
    calculate();
  }

  else if(key === "Backspace"){
    deleteLast();
  }

  else if(key === "Escape"){
    clearDisplay();
  }

});

themeToggle.addEventListener("click",()=>{

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    themeToggle.textContent = "☀️";
  }
  else{
    themeToggle.textContent = "🌙";
  }

});