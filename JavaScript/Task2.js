let obj = {}
let str = prompt("Enter the String")
let string = str.toLowerCase();
for(let i = 0; i < string.length;i++){
    if(string.charAt(i) in obj){
        obj[string.charAt(i)]++
    }
    else{
        obj[string.charAt(i)]=1
    }
}
console.log(obj)