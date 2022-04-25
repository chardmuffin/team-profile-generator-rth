// create the projects section
const generateTeam = membersArr => {
    return `
      <section class="my-3" id="portfolio">
        <div class="flex-row justify-space-between">
        ${membersArr
          .map(member => {

            let iconRoleString = '<h3>Error</h3>';
            let line3String = '<p>Error</p>';

            switch (member.role) {
              case 'Manager':
                iconRoleString = '<h3 class="portfolio-item-title text-light"><i class="fa-solid fa-mug-hot mr-2"></i>Manager</h3>';
                line3String = `<p>Office Number: ${member.officeNumber}</p>`;
                break;
              case 'Engineer':
                iconRoleString = '<h3 class="portfolio-item-title text-light"><i class="fa-solid fa-glasses mr-2"></i>Engineer</h3>';
                line3String = `<p>GitHub: <a href="https://github.com/${member.github}" class="btn mt-auto" target="_blank"><i class="fab fa-github mr-2"></i>${member.github}</a></p>`;
                break;
              default:
                iconRoleString = '<h3 class="portfolio-item-title text-light"><i class="fa-solid fa-user-graduate mr-2"></i> Intern</h3>';
                line3String = `<p>School: ${member.school}</p>`;
                break;
            }

            return `
            <div class="shadow col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h2 class="member-name text-light">${member.name}</h2>
              ${iconRoleString}
              <div class="bg-secondary pt-3 pb-3 text-dark">
                <p>ID: ${member.id}</p>
                <p>Email: <a href="mailto:${member.email}" target="_blank">${member.email}</a></p>
                ${line3String}
              </div>
            </div>
          `;
          })
          .join('')}   
        </div>
      </section>
    `;
};
  
// export function to generate entire page
module.exports = templateData => {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${templateData[0].name}'s Team</h1>
        </div>
      </header>
      <main class="container my-5">
        ${generateTeam(templateData)}
      </main>
    </body>
    </html>
    `;
};