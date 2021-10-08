const { TestWatcher } = require("@jest/core")
const Employee = require("./lib/Employee")


TestWatcher('Test EMployee Class', ()=>{
    const Josh = new Employee("Josh, 42, joshua.mcswain@mecknc.gov")
    const boolean;
    if(typeof Josh === "object"){
        boolean = true
    }else{
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(Adam.getRole()).toBe("Employee")
})