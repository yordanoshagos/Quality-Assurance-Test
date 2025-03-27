const fizzBuzz = require("./fizzbuzz");

test("modulo",()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});

test("",()=>{
    expect(fizzBuzz(9)).toBe('Fizz');

});

test("",()=>{
    expect(fizzBuzz(25)).toBe('Buzz');
});