const numbers = [1, 2];

console.log(numbers);

const [x, y, z = 3] = numbers;
console.log(x);
console.log(y);
console.log(z);