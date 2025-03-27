const isEven = require("./numbers")

test("Checking even numbers",()=>{
    expect(isEven(3)).toBe(false);

});
test("Checking even numbers",()=>{
    expect(isEven(12)).toBe(true);

});