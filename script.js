function checkNumber() {
let userInput = prompt("Numara giriniz: ");
let userOutput = Number(userInput);

if (isNaN(userOutput)) {
    let outputConvert = parseFloat(userInput);

    if (isNaN(outputConvert)) {
    console.log("Değer: " + outputConvert + ". Bu bir sayı değil. Girdiğiniz değerin tipi: " + typeof(userInput));
    }
    else {
    console.log("Değer: " + outputConvert + ". Bu sayı harflerle birlikte yazılmıştı ve string bir ifadeydi. Ancak tip dönüşümünden sonra: " + typeof(outputConvert) + " haline getirildi.");
    }

}else {
    console.log("Değer: " + userOutput + ". Bu bir sayıdır.");
}
}

checkNumber();