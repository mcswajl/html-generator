// create the projects section
const generateProjects = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Project Description</h2>
      <div class="flex-row justify-space-between">
      ${projectsArr
        .filter(({ feature }) => feature)
        .map(({ name, description, languages, link}) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.map(language => language).join(',')}
            </h5>
            <p>## Description</p>
            <p>${description}</p>
            <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}

      ${projectsArr
        .filter(({ feature }) => !feature)
        .map(({ name, description, languages, link, usage, license, contribute}) => {
          console.log(languages);
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">Name - ${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <h3 class="portfolio-item-title text-light">Description</h3>
            <p>${description}</p>
            <h3 class="portfolio-item-title text-light">Usage</h3>
            <p>${usage}</p>
            <h3 class="portfolio-item-title text-light">License</h3>
            <p>${license}</p>
            <h3 class="portfolio-item-title text-light">Contributing</h3>
            <p/>${contribute}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}
    
      </div>
    </section>
  `;
};

// create the about section
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p> <img src="./src/images/headshot.jpg"></img></p>
      <p>${aboutText}</p>
    </section>
    
    
    <section class="screenshot" id="image">
    <h2 class="text-dark bg-primary p-2 display-inline-block">Screenshot of my READme.</h2>
        <img src="./src/images/screenshot.jpg"></img>
    </section>

    <section class="readmeasing" id="criteria">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Assignment Criteria</h2>
  
      <p>GIVEN a command-line application that accepts user input
      WHEN I am prompted for information about my application repository<br>
      THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions<br>
      WHEN I enter my project title<br>
      THEN this is displayed as the title of the README<br>
      WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions<br>
      THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests<br>
      WHEN I choose a license for my application from a list of options<br>
      THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under<br>
      WHEN I enter my GitHub username<br>
      THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile<br>
      WHEN I enter my email address<br>
      THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions<br>
      WHEN I click on the links in the Table of Contents<br>
      THEN I am taken to the corresponding section of the README<br>
      
  </p>
  </section>
  `;
};

{/* <section class="screenshot" id="image">
  <img src="./Develop/src/images/screenshot.jpg"></img>
</section> */}


// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./dist/style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateProjects(projects)}
      ${generateAbout(about)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">UNCC Coding Bootcamp 2021 by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};
