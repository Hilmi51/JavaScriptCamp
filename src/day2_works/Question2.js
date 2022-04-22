function friendNumber(number1, number2) {
    let totalNumber = 0, totalNumber2 = 0;
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            totalNumber = totalNumber + i;
        }
    }
    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            totalNumber2 = totalNumber2 + i;
        }
    }
    if (number1 == totalNumber2 && number2 == totalNumber) {
        console.log("First number " + "(" + number1 + ")" + " and second number " + "(" + number2 + ")" + " friend number");
    } else {
        console.log("First number " + "(" + number1 + ")" + " and second number " + "(" + number2 + ")" + " are not friend numbers");
    }
}

friendNumber(220, 284);
friendNumber(221, 286);