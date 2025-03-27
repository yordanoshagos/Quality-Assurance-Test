const fizzBuzz = require("./fizzbuzz");


test("testing fizzBuzz",()=>{
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});
test("testing fizzBuzz",()=>{
    expect(fizzBuzz(9)).toBe("Fizz");
});
test("testing fizzBuzz",()=>{
    expect(fizzBuzz(10)).toBe("Buzz");
});









