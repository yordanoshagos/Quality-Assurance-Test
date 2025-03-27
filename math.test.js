const { add, subtract, multiply, divide } = require("./math")

test("adding two numbers",()=>{
    expect(add(5,5)).toBe (10);


});
test("subtracting two numbers", ()=>{
    expect(subtract(8,2)).toBe (6);
});
test("multiply two numbers", ()=>{
    expect(multiply(2,4)).toBe (8);
});
test("divide two numbers", ()=>{
    expect(divide(10,5)).toBe (2);
});