function averageSequence(numbers) {
    let average = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        }
        average = (average + numbers[i]) / 2;
    }
    return average;
}

let numbers = [62, 87, 210, 6, 12];
console.log(averageSequence(numbers)); // Output: 43.06