const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github

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
    gitGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer