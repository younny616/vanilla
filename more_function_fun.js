function sayHello(name, age) {
    return `hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello('Nicolas', 14);

console.log(greetNicolas);

/*const math = {
    plus: function (a, b){
        return a + b;
    }
}

const plus = math.plus(5,5);
console.log(plus);*/

const math = {
    plus: function (a, b){
        return a + b;
    },
    minus: function (a, b){
        return a - b;
    },
    multi: function (a, b){
        return a * b;
    },
    divide: function (a, b){
        return a / b;
    },
    square: function (a, b){
        return a ** b;
    }
}

const plus = math.plus(5,5);
const minus = math.minus(5,5);
const multi = math.multi(5,5);
const divide = math.divide(5,5);
const square = math.square(5,5);
//console.log(plus, minus, multi, divide, square);
console.log(`returned values ${plus}, ${minus}, ${multi}, ${divide}, ${square}`);