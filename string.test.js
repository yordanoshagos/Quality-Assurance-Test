const reverseString = require("./string")

test("reverses a string",()=>{
    expect(reverseString("stop")).toBe("pots");
})
