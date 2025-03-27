const isValidEmail = require("./emailValidator")

test("to check if email is valid",()=>{
    expect(isValidEmail()).toBe(false)
})