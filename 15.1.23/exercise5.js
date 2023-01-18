function Moyenne(numbers) {
    let avg = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        }
        avg = (avg + numbers[i]) / 2;
    }
    return avg;
}

let numbers = [62, 87, 210, 6, 12];
console.log(Moyenne(numbers)); 