const fahr = document.querySelector("#result");
const celsius = document.querySelector("#number");
const convertBtn = document.querySelector("#butn");
const temp1 = document.querySelector("#temp1");
const temp2 = document.querySelector("#temp2");

window.addEventListener("load", () => {
    celsius.value = "";
    fahr.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
});

function convertToCelsius() {
    let inputValue = celsius.value;

    if (temp1.value === "fahrenheit" && temp2.value === "celsius") {
        const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
        fahr.innerHTML = `${FahrenheitToCelsius.toFixed(1)} `;
    } else if (temp1.value === "celsius" && temp2.value === "fahrenheit") {
        const Cel = ((inputValue * 9) / 5) + 32;
        fahr.innerHTML = `${Cel.toFixed(1)} `;
    } else {
        const same = (inputValue - 0);
        fahr.innerHTML = `${same.toFixed(1)} `;
    }
}
