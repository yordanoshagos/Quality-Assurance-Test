const fizzBuzz = require("./fizzBuzz")

test("Testing fizzBuzz",()=>{
expect(fizzBuzz(15)).toBe("FizzBuzz");
});

test("Testing fizzBuzz",()=>{
    expect(fizzBuzz(9)).toBe("Fizz");
 });

 test("Testing fizzBuzz",()=>{
    expect(fizzBuzz(25)).toBe("Buzz");
    });