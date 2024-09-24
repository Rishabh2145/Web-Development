const p1 = document.getElementById('+1')
const p2 = document.getElementById('+2')
const p5 = document.getElementById('+5')
const p10 = document.getElementById('+10')
const p100 = document.getElementById('+100')
const reset = document.getElementById('reset')

function myFunc(event){
    const current = document.getElementById("count")
    const val = parseInt(current.innerText)
    const from = event.target.name
    current.innerText = parseInt(from) + val
}
function Reset(){
    const current = document.getElementById("count")
    current.innerText = '0'

}

p1.onclick = myFunc
p2.onclick = myFunc
p5.onclick = myFunc
p10.onclick = myFunc
p100.onclick = myFunc
reset.onclick = Reset
