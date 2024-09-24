const plus = document.getElementById('+')
const minus = document.getElementById('-')
const divsion = document.getElementById('/')
const multiple = document.getElementById('*')
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const res = document.getElementsByClassName('output')

function myPlus() {
    if (num1.value != '' && num2.value != '') {
        const result = document.getElementById('res');
        result.style.color = "black"
        const output = parseInt(num1.value) + parseInt(num2.value);
        result.innerText = output;
    }
    else {
        const result = document.getElementById('res');
        result.style.color = "red"
        result.innerText = "Invalid";
    }
}
function myMinus(){
    if (num1.value != '' && num2.value != '') {
        const result = document.getElementById('res');
        result.style.color = "black"
        const output = parseInt(num1.value) - parseInt(num2.value);
        result.innerText = output;
    }
    else {
        const result = document.getElementById('res');
        result.style.color = "red"
        result.innerText = "Invalid";
    }
}
function myMul(){
    if (num1.value != '' && num2.value != '') {
        const result = document.getElementById('res');
        result.style.color = "black"
        const output = parseInt(num1.value) * parseInt(num2.value);
        result.innerText = output;
    }
    else {
        const result = document.getElementById('res');
        result.style.color = "red"
        result.innerText = "Invalid";
    }
}
function myDiv(){
    if(num2.value == '0'){
        const result = document.getElementById('res');
        result.style.color = "red"
        result.innerText = "Error";
    }
    else if (num1.value != '' && num2.value != '') {
        const result = document.getElementById('res');
        result.style.color = "black"
        const output = parseInt(num1.value) / (parseInt(num2.value) || 1);
        result.innerText = output;
    }
    else {
        const result = document.getElementById('res');
        result.style.color = "red"
        result.innerText = "Invalid";
    }
}
plus.onclick = myPlus
minus.onclick = myMinus
multiple.onclick = myMul
divsion.onclick = myDiv