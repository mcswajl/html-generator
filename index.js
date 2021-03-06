const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const promisify = require('util.promisify');
const Employee = require("./_test_/lib/Employee");
const Engineer = require("./_test_/lib/Engineer.js");
const Intern = require("./_test_/lib/Intern.js");
const Manager = require("./_test_/lib/Manager.js");
const myteam = ("myteam.html");
const writeFileAsync = util.promisify(fs.writeFile);
const employees = []

function initalize(){
  return inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: `What is your name?`
//     },
//     {
//       type: "input",
//       name: "id",
//       message: `What is your ID?`
//     },
//     {
//       type: "input",
//       name: "email",
//       message: `What is your email?`
//     },
//     {
//       type: "input",
//       name: "officenumber",
//       message: `What is your office number?`
//     }
  ])
}
function buildmyTeam(){
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message:"Do you want to add a team member? Please select a member type",
      choices: ["Intern","Engineer","Manager","No"]
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
        let engineer = new Engineer(answers.name, "ID:  " +  answers.id, "Email:  " + answers.email,"GitHub:  " + answers.github);
        employees.push(engineer)
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
        let intern = new Intern(answers.name, "ID:  " + answers.id, "Email:  " + answers.email,"School:  " + answers.school);
        employees.push(intern)
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
          name: "officenumber",
          message: `What is your Manager's office number?`
        }
      ]).then((answers)=>{
        let manager = new Manager(answers.name, "Name:  " + answers.id, "Email:  " + answers.email,"Office Number:  " + answers.officenumber);
        employees.push(manager)
        buildmyTeam();
      })
    }

      if (answer.role === "No"){
        console.log(employees)
        return writeToFile(employees);
      }
  });
}
function writeToFile(data){
  let cards = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Awesome Team</title>
    <!-- Latest compiled and minified CSS & JS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <script src="https://code.jquery.com/jquery.js"></script> -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  
  </head>
  
  <body>
  
    <div class="container container-fluid text-center">
      <div class="jumbotron bg-danger">
        <h1 class="bg-danger text-white">My Team</h1>
      </div>
      <div class="row">
  `
for (let i = 0; i < data.length; i++) {
  let indiv; 
  if (data[i].getRole() === 'Intern'){
    indiv = `<li class="list-group-item" id="School">${data[i].school}</li>`
  }
  else if (data[i].getRole() === 'Engineer'){
      indiv = `<li class="list-group-item" id="GitHub">
      <a href="url">${data[i].github}</a></li>`
  }
  else {
    indiv = `<li class="list-group-item" id="Office Number">${data[i].officenumber}</li>`
  }


  cards += `<div class="col-md-4">
  <div class="card bg-primary border-light shadow mb-3" style="max-width: 18rem; height: 22rem;">
      <div class="text-left card-header text-white">
          <h2 id="name">${data[i].name}
          <br>
          <img src="./src/images/list-task.svg"></img>${data[i].getRole()}</h2>
      </div>
      <div class="border border-secondary card-body bg-light align-content-center flex-wrap">
          <div>
              <ul class="text-left list-group list-group-flush">
                  <li class="list-group-item" id="id">${data[i].id}</li>
                  <li class="list-group-item" id="email">
                  <a href="url">${data[i].email}</a></li>
                  ${indiv}
              </ul>
          </div>
      </div>
  </div>
</div>
`

};
cards +=`</div>

</body>

</html>`

  fs.writeFile("./myTeam.html", cards, err => {
    if(err) {
      throw(err)
    }
    console.log("My Team page has been constructed!")
  });
  };

initalize()
.then((answers)=>{
  const manager = new Manager(answers.name, answers.id, answers.email,answers.officenumber);
  buildmyTeam();
});
