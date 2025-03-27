const isEven = require("./numbers")

test("checking if number is even",()=>{
    expect(isEven(4)).toBe(true)
})