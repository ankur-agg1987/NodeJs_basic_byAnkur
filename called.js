// function expression
counter = function(arr){
    console.log(arr);
    return "Hello";
}

// function expression as arrow function
var adder = (a,b) =>{
    return a+b;
}

var pi =3.142;

module.exports.c = counter;
module.exports.a = adder;
module.exports.p = pi;