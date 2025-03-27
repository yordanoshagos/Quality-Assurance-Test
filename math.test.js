const isEven = require("./math")
const { add, subtract, divide, multiply } = require("./math")

test("adding two numbers",()=>{
    expect(add(2,3)).toBe(5)
})

test("subtracting two numbers",()=>{
    expect(subtract(9,3)).toBe(6) 
})

test("dividing two numbers",()=>{
    expect(divide(10,2)).toBe(5)
})

test("mutliplying two numbers",()=>{
    expect(multiply(4,5)).toBe(20)
})
