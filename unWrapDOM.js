let countVal=document.querySelector("#counter")

let inc = () => {
 let val=parseInt(countVal.innerText);  //getting text value & converting into string
 val+=1 //increasing the value
 countVal.innerText=val //sending value again
}
let dec = () => {
let val=parseInt(countVal.innerText);
val-=1;
countVal.innerText=val
}
