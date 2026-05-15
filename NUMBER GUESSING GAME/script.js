let submit = document.getElementById("submit");
let min;
let max;
let no;
let attempt = 1;

submit.onclick = function () {

    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);

    if (min > max) {
        window.alert("Please enter a valid range");
        return;
    }
    document.getElementById("myh3").textContent="now start guessing";
    no = Math.floor(Math.random() * (max - min + 1)) + min;
};

const guessbut = document.getElementById("guess");
guessbut.onclick = function () {
    let guessedno = Number(document.getElementById("guessno").value);
    attempt++;
    if (guessedno > no) {
        document.getElementById("mypre1").textContent =
            `You guessed higher \n attempt number ->${attempt-1} `;
    } else if (guessedno < no) {
        document.getElementById("mypre1").textContent =
             `You guessed lower \n attempt number ->${attempt-1} `;
    } else {
        
        document.getElementById("mypre1").textContent =
            `You guessed correctly in ${attempt} attempts`;
        window.alert("You guessed correctly!");
        attempt=1;
    }
};
