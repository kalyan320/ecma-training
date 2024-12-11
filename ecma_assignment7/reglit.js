let regex = /^ab+c$/;

console.log(regex.test("abc"));
console.log(regex.test("abbbbbbc"));
console.log(regex.test("abbb"));
console.log(regex.test("adbc"));
console.log(regex.test("abbbb"));
console.log(regex.test("aaabc"));