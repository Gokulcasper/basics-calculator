let display = document.getElementById("display");

function appendToDisplay(value){
display.value += value;
}
function clearDisplay(){
display.value = '';
}
function calculated(){
try{
    display.value = eval(display.value);
}
catch{
    display.value=value;
}
}
function appendToDisplay1(){
    display.value = display.value.slice(0,-1);
}