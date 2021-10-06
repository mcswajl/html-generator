class Engineer {
    constructor(name, id, email, github) {
        this.name = name
        this.id = id
        this.email = email
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