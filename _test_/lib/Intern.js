class Intern {
    constructor(name, id, email, school) {
        this.name = name
        this.id = id
        this.email = email
        this.school = school

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
    gitSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}
module.exports = Intern