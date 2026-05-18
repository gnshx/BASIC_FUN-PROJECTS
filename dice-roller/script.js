const sub = document.getElementById("submit");

sub.onclick = function () {
    let num = document.getElementById("diceno").value;
    const con=document.getElementById("imgs");
    con.innerHTML="";
    if(num<=0){
        window.alert("pls enter valid no of dices");
    }
    for (let i = 0; i < num; i++) {
        setTimeout(() => {
            let ran = Math.floor(Math.random() * 6) + 1;
            console.log(ran);
            document.getElementById("h3").textContent =
                `${i + 1} dice result is ${ran}`;
            const img = document.createElement("img");
            img.src = `${ran}.png`;
            img.alt = `Dice ${ran}`;
            con.appendChild(img);
        }, i * 1000);
    }
}