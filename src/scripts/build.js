

const build = () => {
// -------------- header -------------------------------I
const header = document.createElement('header');

document.body.appendChild(header);

const div = document.createElement('div');

header.appendChild(div)

const resetButton = document.createElement('button');
resetButton.className = "reset-button";
resetButton.textContent = "Reset"
div.appendChild(resetButton);

const titleTXT = document.createElement('p');
titleTXT.textContent = "Orbit"
titleTXT.className = "titleTXT";
div.appendChild(titleTXT);

const instructionsDD = document.createElement('button');
instructionsDD.textContent = '?'

instructionsDD.className = "instructionsDD-button";
div.appendChild(instructionsDD);
// -------------- header -------------------------------I
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -------------- footer -------------------------------I

const footer = document.createElement('footer');
document.body.appendChild(footer);
const divfooter = document.createElement('div');
divfooter.className = "div-footer"
footer.appendChild(divfooter)


const gitHub = document.createElement('a');
gitHub.setAttribute( 'target', "_blank")
gitHub.setAttribute( 'href', "https://github.com/JosefSipi")
gitHub.className = "git-hub-tag";
gitHub.textContent = "gitHub"
divfooter.appendChild(gitHub);

// -------------- footer -------------------------------I


}

module.exports = {
    build
}