// variables with "let" cannot be redeclared in the same scope

let  x=10;
{
    let x=20;
    console.log(x); // 20
}
console.log(x); // 10