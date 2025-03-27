const reverseString = require("./stringUtils");

test("reverse",()=>{
    expect(reverseString("cat")).toBe("tac");
});