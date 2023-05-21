let city;
city = "Київ";
city = "Львів";
let address = city;
console.log(address);
const inputNumber = Number(prompt("Введіть число:"));
if (inputNumber === 0) {
    console.log("Число 0.");
}
else if (inputNumber % 2 === 0) {
    console.log("Число парне.");
}
else {
    console.log("Число непарне.");
}
function max(...numbers) {
    let maxNumber = -Infinity;
    for (const number of numbers) {
        if (number > maxNumber) {
            maxNumber = number;
        }
    }
    return maxNumber;
}
console.log(max(5, -2));
console.log(max(5, -2, 30, 6));
function getSqrt(number) {
    if (typeof number === 'undefined') {
        return 'Будь ласка, введіть число!';
    }
    if (typeof number === 'string') {
        return 'Повинно бути числове значення.';
    }
    if (number < 0) {
        return 'Введіть додатнє число.';
    }
    const sqrt = Math.sqrt(number);
    return `Квадратний корінь з ${number} дорівнює ${sqrt}.`;
}
console.log(getSqrt(25));
console.log(getSqrt('шість'));
console.log(getSqrt(-2));
console.log(getSqrt(undefined));
