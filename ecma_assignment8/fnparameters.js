function sum(...numbers) {
    let total = 0;
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(sum(1, 2, 3));
console.log(sum(4, 5, 8, 9));