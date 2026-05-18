const sub = document.getElementById("submit");

sub.onclick = function () {
    let num = document.getElementById("diceno").value;
    if(num<=0){
        window.alert("pls enter valid no of dices");
    }
    for (let i = 0; i < num; i++) {
        setTimeout(() => {
            let ran = Math.floor(Math.random() * 6) + 1;
            console.log(ran);
            document.getElementById("h3").textContent =
                `${i + 1} dice result is ${ran}`;
            const img = document.createElement("im");
            im.src = `${ran}.png`;
            im.alt = `Dice ${ran}`;
        }, i * 2000);
    }
}