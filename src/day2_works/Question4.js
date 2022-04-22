function primeNumbers() {
    for (let i = 0; i <= 1000; i++) {
        let counter = 0;
        for (let j = 1; j <= [i] - 1; j++) {
            if (i % j == 0) {
                counter++;
            }
        }
        if (counter == 1) {
            console.log("Number" + "(" + i + ")" + "is the prime number.")
        } else {
            console.log("Number" + "(" + i + ")" + "is not a prime number.")
        }
    }
}
primeNumbers()