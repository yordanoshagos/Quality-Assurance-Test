const {add, subtract, divide, multiply} = require("./math")

test("adding two numbers",()=>{
    expect(add(5,5)).toBe (10);
    
});

test("subtracting two numbers",()=>{
    expect(subtract(8,4)).toBe (4);
    
});
test("dividing two numbers",()=>{
    expect(divide(16,4)).toBe (4);
});

test("multipling two numbers",()=>{
    expect(multiply(8,4)).toBe (32);
});


