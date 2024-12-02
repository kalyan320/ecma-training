//  variables with "const" cannot be redeclared
//  variables with const cannot be reassigned
//  variables with const have block scope

//redeclaration
{
    const x=20;
    const x=10;
    console.log(x); // error
}
