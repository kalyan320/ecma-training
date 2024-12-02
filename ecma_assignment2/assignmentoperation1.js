let x = 20;
let y = 30;
console.log(x); //20

let z = x -= y;
/* 
    z=x=x-y
    z=x=20-30
    z=x=-10  y=30 

*/
console.log(x); //-10
console.log(y); //30
console.log(z); //-10
