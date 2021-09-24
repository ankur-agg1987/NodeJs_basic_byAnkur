const CalledExp = require('./called.js');

const myfunction = (a,b) => {
    console.log(`Value of A: ${a},
    and the Value of B: ${b},
    Value of PI from imported called.js file is: ${CalledExp.p}`);
}

module.exports.f = myfunction;