const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern")


test('Test Intern Class', ()=>{
    const Josh = new Employee("Josh, 42, joshua.mcswain@mecknc.gov")
    let boolean;
    if(typeof Josh === "object"){
        boolean = true
    }else{
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(Josh.getRole()).toBe("Employee")
})