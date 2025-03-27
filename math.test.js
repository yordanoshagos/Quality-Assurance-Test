const { add, subtract, multiply, divide } = require("./math")

test("adding two numbers",()=>{
    expect(add(12,14)).toBe(26);
});
test("subracting two numbers", ()=>{
expect(subtract(100,63)).toBe(37)
})
test("multiply two numbers",()=>{
expect(multiply(10,4)).toBe(40)
})
test("divide two numbers",()=>{
    expect(divide(100,4)).toBe(25)
})