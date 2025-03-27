const reverseString = require("./stringUtils");

test("reverse",()=>{
    expect(reverseString("cat")).toBe ("tac");
    
});
test("reverse",()=>{
    expect(reverseString("Carol")).toBe ("loraC");
    
});