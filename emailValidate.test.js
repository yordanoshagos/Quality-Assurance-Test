const isValidEmail = require("./emailValidate");

test("validation",()=>{
    expect(isValidEmail()).toBe(false)
});