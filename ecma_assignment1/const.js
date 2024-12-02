//  variables with "const" cannot be redeclared
//  variables with const cannot be reassigned
//  variables with const have block scope

//reassigned
{
    const x=20;
    x=10;
    console.log(x); // 20
}
