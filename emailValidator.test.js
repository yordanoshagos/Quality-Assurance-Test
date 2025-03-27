const isValidEmail = require("./emailValidator");

test("modulo",()=>{
    expect(isValidEmail()).toBe(false);
});