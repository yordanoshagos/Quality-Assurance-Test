const fizzBuzz = require("./fuzzBuzz")

test("multiple of 3 and 5",()=>{
    expect(fizzBuzz(30)).toBe("FizzBuzz");
})
test("multiple of 3 ",()=>{
    expect(fizzBuzz(27)).toBe("Fizz");
})
test("multiple of 5",()=>{
    expect(fizzBuzz(25)).toBe("Buzz");
})