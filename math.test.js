const { add, subtract, multiply, divide } = require("./math");


test("adding two numbers",()=>{
    expect(add(5,5)).toBe(10);
});

test("subtracting two numbers",()=>{
    expect(subtract(50000,25567)).toBe(24433);
});
test("multiplying",()=>{
    expect(multiply(455,56)).toBe(25480);
});
test("dividing two numbers",()=>{
    expect(divide(100,20)).toBe(5);
});