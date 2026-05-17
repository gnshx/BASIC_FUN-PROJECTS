let c=0;
document.getElementById("img1").src="off.png"
const inc=document.getElementById("i");
const dec=document.getElementById("d");
const reset=document.getElementById("r");
const count=document.getElementById("c");

inc.onclick = function(){
c++;
document.getElementById("img1").src="on.png"
count.textContent=c;
if(c>1000){
    document.getElementById("img1").src="break.png"
    
}
}

dec.onclick = function(){
c--;
document.getElementById("img1").src="on.png"
count.textContent=c;
}
reset.onclick = function(){
c=0;
document.getElementById("img1").src="off.png"
count.textContent="count";
}