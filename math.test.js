

const { add, subtract, divide, multiply } = require("./math")

test("adding two numbers",()=>{
    expect(add(3,5)).toBe(8);
});

test("subtructing two numbers",()=>{
    expect(subtract(8,3)).toBe(5);
});

test("dividing two numbers",()=>{
    expect(divide(4,2)).toBe(2);
});

test("multiplying two numbers",()=>{
    expect(multiply(8,1)).toBe(8);
});


