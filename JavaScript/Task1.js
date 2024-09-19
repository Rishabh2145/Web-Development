let obj = {}
let str = "Hello"
for(let i = 0; i < str.length;i++){
    if(str.charAt(i) in obj){
        obj[str.charAt(i)]++
    }
    else{
        obj[str.charAt(i)]=1
    }
}
console.log(obj)