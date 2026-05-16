
const e=document.getElementById("enter");
const cel=document.getElementById("cel");
const farh=document.getElementById("farh");
const kel=document.getElementById("kel");

e.onclick = function () {

   /* let c = Number(document.getElementById("value").value);
   if (c === '' || isNaN(c)) {
    window.alert("Please enter a valid number");
    return;
}
    */
    let c = document.getElementById("value").value;

    if (c.trim() === "" || isNaN(c)) {
        window.alert("Please enter a valid number");
        return;
    }

     c = Number(c);

    let celsius, fahrenheit, kelvin;

    if (cel.checked) {

        celsius = c;
        fahrenheit = (9 * celsius) / 5 + 32;
        kelvin = celsius + 273.15;

    } 

    else if (farh.checked) {

        fahrenheit = c;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    } 
    else if (kel.checked) {

        kelvin = c;
        celsius = kelvin - 273.15;
        fahrenheit = (9 * celsius) / 5 + 32;

    } 
    else {
        window.alert("Please select a unit");
        return;
    }

    document.getElementById("celius").textContent =
        `Celsius: ${celsius.toFixed(2)} °C`;

    document.getElementById("farnheit").textContent =
        `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;

    document.getElementById("kelvin").textContent =
        `Kelvin: ${kelvin.toFixed(2)} K`;
}