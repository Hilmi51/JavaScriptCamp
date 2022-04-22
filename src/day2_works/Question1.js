function findThePrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let prime = 0;
        for (let j = 1; j <= numbers[i] - 1; j++) {
            if (numbers[i] % j == 0) {
                prime++
            }
        }
        if (prime == 1) {
            console.log("Number: " + numbers[i] + " " + "is prime.")
        } else {
            console.log("Number: " + numbers[i] + " " + "isn't prime.")
        }
    }
}
findThePrime(2, 5, 8, 21, 13)
findThePrime(3, 5)