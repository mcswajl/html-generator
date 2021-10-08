const { TestWatcher } = require("@jest/core")
const Manager = require("./lib/Manager")


TestWatcher('Test Manager Class', ()=>{
    const Josh = new Manager("Josh, 42, joshua.mcswain@mecknc.gov")
    const boolean;
    if(typeof Josh === "object"){
        boolean = true
    }else{
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(Adam.getRole()).toBe("Employee")
})