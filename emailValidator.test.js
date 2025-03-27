const isValidEmail = require("./emailValidator")

test("If it is a valid email",()=>{
    expect(isValidEmail()).toBe(false);
})