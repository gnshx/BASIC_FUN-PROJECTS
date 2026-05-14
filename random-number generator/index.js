let min,max;
let submit=document.getElementById("submit");
let res=document.getElementById("r");
let r;
submit.onclick= function(){
min=document.getElementById("min").value;
max=document.getElementById("max").value;
if(min>max){
    window.alert("min cant be grater than max");

}
r= (Math.floor(Math.random() * max) ) ;
r++;
if(r<min){
    r=min;
}
res.textContent="random number is "+r;
console.log(min,max);
}

