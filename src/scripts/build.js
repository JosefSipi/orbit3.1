

const build = () => {


// -------------- header -------------------------------I
const header = document.createElement('header');

document.body.appendChild(header);

const div = document.createElement('div');

header.appendChild(div);

const resetButton = document.createElement('button');
resetButton.className = "reset-button";
resetButton.textContent = "Reset";
div.appendChild(resetButton);

const titleTXT = document.createElement('p');
// titleTXT.addEventListener('click', refreshClick)
titleTXT.textContent = "Orbit";
titleTXT.className = "titleTXT";
div.appendChild(titleTXT);

const instructionsDD = document.createElement('button');
instructionsDD.className = "instructionsDD-button";


instructionsDD.textContent = '?'
div.appendChild(instructionsDD);

const backgroundBlur = document.createElement('div');
backgroundBlur.className = 'back-blur';
backgroundBlur.addEventListener('click', (e) => {
    e.preventDefault();
    backgroundBlur.style.display = 'none';
    instructionsModal.style.display = 'none';
})
document.body.appendChild(backgroundBlur)

instructionsDD.addEventListener('click', (e) => {
    e.preventDefault();
    instructionsDD.style.backgroundColor = "rgb(50, 50, 50, .21)";
    instructionsModal.style.display = 'block';
    backgroundBlur.style.display = 'block';
} )



const instructionsModal = document.createElement('div');
instructionsModal.className = "inst-modal";


document.body.appendChild(instructionsModal);

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
gitHub.setAttribute( 'target', "_blank");
gitHub.setAttribute( 'href', "https://github.com/JosefSipi");
gitHub.className = "logo-hub-tag";

const imageGitHub = document.createElement('img');
imageGitHub.className = "info-logo";
imageGitHub.setAttribute('src', '../../src/images/github.png');
imageGitHub.setAttribute('alt', 'gitHub Logo')

gitHub.appendChild(imageGitHub);
divfooter.appendChild(gitHub);

// ------- linkedIn --------------
const linkedIn = document.createElement('a');
linkedIn.setAttribute( 'target', "_blank")
linkedIn.setAttribute( 'href', "https://www.linkedin.com/in/joseph-sipiorski-590452195/");
linkedIn.className = "logo-hub-tag";

const imagelinkedIn = document.createElement('img');
// imagelinkedIn.setAttribute( 'target', "_blank")
// imagelinkedIn.setAttribute( 'href', "https://www.linkedin.com/in/joseph-sipiorski-590452195/");

imagelinkedIn.className = "info-logo-link";
imagelinkedIn.setAttribute('src', '../../src/images/linkedIn.png');
imagelinkedIn.setAttribute('alt', 'linkedIn Logo')

linkedIn.appendChild(imagelinkedIn);
divfooter.appendChild(linkedIn);

// ------- angelList ---------
const angelList = document.createElement('a');
angelList.setAttribute( 'target', "_blank")
angelList.setAttribute( 'href', "https://angel.co/u/joseph-sipiorski");
angelList.className = "logo-hub-tag";

const imageangelList = document.createElement('img');
imageangelList.className = "info-logo-link-angel";
imageangelList.setAttribute('src', '../../src/images/angelList.png');
imageangelList.setAttribute('alt', 'angelList Logo')

angelList.appendChild(imageangelList);
divfooter.appendChild(angelList);




// -------------- footer -------------------------------I


}

module.exports = {
    build
}