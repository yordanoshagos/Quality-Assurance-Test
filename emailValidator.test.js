const isValidEmail = require("./emailValidator")
test("Checking validation of an email",()=>{
    expect(isValidEmail("yordanoshagos@gmail.com")).toBe(true);
});
test("Checking validation of an email",()=>{
    expect(isValidEmail("judygikuni@gmail.com")).toBe(true);
});
test("Checking validation of an email",()=>{
    expect(isValidEmail("mahderbeletebekele@gmail.com")).toBe(true);
});
test("Checking validation of an email",()=>{
    expect(isValidEmail("joylinewanjikukingori@gmail.com")).toBe(true);
});
test("Checking validation of an email",()=>{
    expect(isValidEmail("khembocarol@gmail.com")).toBe(true);
});
test("Checking validation of an email",()=>{
    expect(isValidEmail("madosiphele@gmail.com")).toBe(true);
});

