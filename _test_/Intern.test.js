const { TestWatcher } = require("@jest/core")
const Intern = require("./lib/Intern")


TestWatcher('Test Intern Class', ()=>{
    const Josh = new Intern("Josh, 42, joshua.mcswain@mecknc.gov")
    const boolean;
    if(typeof Josh === "object"){
        boolean = true
    }else{
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(Adam.getRole()).toBe("Employee")
})