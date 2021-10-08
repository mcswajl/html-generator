const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const Employee = require("./_test_/lib/Employee");
const Engineer = require("./_test_/lib/Engineer.js");
const Intern = require("./_test_/lib/Intern.js");
const Manager = require("./_test_/lib/Manager.js");
const myteam = ("myteam.html");
const writeFileAsync = util.promisify(fs.writeFile);

function initalize(){
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is your name?`
    },
    {
      type: "input",
      name: "id",
      message: `What is your ID?`
    },
    {
      type: "input",
      name: "email",
      message: `What is your email?`
    },
    {
      type: "input",
      name: "officeNumber",
      message: `What is your office number?`
    }
  ])
}
function buildmyTeam(){
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message:"Do you want to add another team member?",
      choices: ["Intern","Engineer","Manager","Employee","Quit"]
    }
  ]).then((answer)=> {
    if (answer.role === "Engineer"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is your Engineer's name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is your engineer's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `What is your Engineer's email?`
        },
        {
          type: "input",
          name: "github",
          message: `What is your engineer's GitHub??`
        }
      ]).then((answers)=>{
        let engineer = new Engineer(answers.name, answers.id, answers.email,answers.github);
        // myTeam.splice(myteam.length-1,0,engineer.getHTML());
        buildmyTeam();
      })
    }
    if (answer.role === "Intern"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is your intern's name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is your intern's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `What is your intern's email?`
        },
        {
          type: "input",
          name: "school",
          message: `What is your intern's school?`
        }
      ]).then((answers)=>{
        let intern = new Intern(answers.name, answers.id, answers.email,answers.school);
        // myteam.splice(myteam.length-1,0,intern.getHTML());
        buildmyTeam();
      })
    }
    if (answer.role === "Manager"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is your Manager's name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is your Manager's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `What is your Manager's email?`
        },
        {
          type: "input",
          name: "school",
          message: `What is your Manager's office number?`
        }
      ]).then((answers)=>{
        let intern = new Intern(answers.name, answers.id, answers.email,answers.officeNumber);
        // myteam.splice(myteam.length-1,0,intern.getHTML());
        buildmyTeam();
      })
    }
      if (answer.role === "Employee"){
        return inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: `What is your Employee's name?`
          },
          {
            type: "input",
            name: "id",
            message: `What is your Employee's ID?`
          },
          {
            type: "input",
            name: "email",
            message: `What is your Employee's email?`
          },
          {
            type: "input",
            name: "officenumber",
            message: `What is your Employee's office number?`
          }
        ]).then((answers)=>{
          let intern = new Employee(answers.name, answers.id, answers.email,answers.officeNumber);
          // myteam.splice(myteam.length-1,0,intern.getHTML());
          return printHTML(myteam);
        })
      }

      if (answer.role === "Quit"){
        return printHTML(myteam);
      }
  });
}
function printHTML(myteam){
  fs.writeFile("myTeam2.html",myteam, (err) => {
    if(err) {
      throw err;
    };
    console.log("My Team page has been constructed!");
  });
  // open("myTeam.html");
  };

initalize()
.then((answers)=>{
  const manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber);
  // myteam.splice(myteam.length-1,0,manager.getHTML());
  buildmyTeam();
});

// module.exports = index;