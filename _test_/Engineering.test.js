const { TestWatcher } = require("@jest/core")
const Engineer = require("./lib/Engineer")


TestWatcher('Test Engineer Class', ()=>{
    const Josh = new Engineer("Josh, 42, joshua.mcswain@mecknc.gov")
    const boolean;
    if(typeof Josh === "object"){
        boolean = true
    }else{
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(Adam.getRole()).toBe("Employee")
})