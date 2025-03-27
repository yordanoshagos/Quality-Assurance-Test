const isEven = require("./numbers")

test("checking even numbers",()=>{
    expect(isEven(6)).toBe(true);
});