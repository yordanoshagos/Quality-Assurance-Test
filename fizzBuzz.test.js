const fizzBuzz = require("./fizzBuzz")

test("if a number is a multiple of 3 and 5",()=>{
    expect(fizzBuzz(15)).toBe("FizzBuzz")
})

test("if a number is a multiple of 3",()=>{
    expect(fizzBuzz(9)).toBe("Fizz")
})

test("if a number is a multiple of 5",()=>{
    expect(fizzBuzz(10)).toBe("Buzz")
})

