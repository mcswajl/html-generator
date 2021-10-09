const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber

    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    gitEmail() {
        return this.email
    }
    gitofficeNumber() {
        return this.officenumber
    }
    getRole() {
        return "Manager"
    }
}
module.exports = Manager