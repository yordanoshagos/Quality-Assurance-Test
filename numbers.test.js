const isEven = require("./numbers")

test("modulus of a number divided by 2 is 0",()=>{
    expect(isEven(6)).toBe(true)
})