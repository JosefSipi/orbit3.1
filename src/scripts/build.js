
const build = () => {


// -------------- header -------------------------------I
const header = document.createElement('header');

document.body.appendChild(header);

const div = document.createElement('div');
div.id = "the-div"

header.appendChild(div);

// const resetButton = document.createElement('button');
// resetButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.location.reload();
// } );

// resetButton.className = "reset-button";
// resetButton.textContent = "Reset";

// div.appendChild(resetButton);

const titleTXT = document.createElement('p');
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
    instructionsDD.style.background = "none";
    instructionsModal.style.display = 'none';
})
document.body.appendChild(backgroundBlur)

instructionsDD.addEventListener('click', (e) => {
    e.preventDefault();
    instructionsDD.style.backgroundColor = "rgb(50, 50, 50, .21)";
    instructionsModal.style.display = 'flex';
    backgroundBlur.style.display = 'block';
} )

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    debugger
    if (window.location.href.includes('?reload=true')){

    } else {
        instructionsDD.style.backgroundColor = "rgb(50, 50, 50, .21)";
        instructionsModal.style.display = 'flex';
        backgroundBlur.style.display = 'block';
    }
})

//  ------------- instructions Modal ----------------


const instructionsModal = document.createElement('div');
instructionsModal.className = "inst-modal";
// ---------- titile -------------
const titleIns = document.createElement('p');
titleIns.className = 'title-ins';
titleIns.textContent = 'How it Works';
instructionsModal.appendChild(titleIns);

// ------------ first p -----------
const firstP = document.createElement('p');
firstP.className = 'section-p-f'
firstP.textContent = 'Left click will remove a cube'
instructionsModal.appendChild(firstP);

// ------------ second p -----------
const secondP = document.createElement('p');
secondP.className = 'section-p'
secondP.textContent = 'Hold "d" key - will remove any cube the mouse touches'
instructionsModal.appendChild(secondP);

// ------------ third p -----------
const thirdP = document.createElement('p');
thirdP.className = 'section-p'
thirdP.textContent = 'Hold "s" key - will prevent left click from removing cube'
instructionsModal.appendChild(thirdP);


// ------------ final p -----------
const finalP = document.createElement('p');
finalP.className = 'final-p'
finalP.textContent = 'move the cube around with the mouse and zoom in and out by scrolling'
instructionsModal.appendChild(finalP);


// ------------ final p2 -----------
const finalP2 = document.createElement('p');
finalP2.className = 'final-p';
finalP2.textContent = 'create any structure by removing cubes from the main cube';
instructionsModal.appendChild(finalP2);


// ------------------------ close x --------------------I

const theClosingX = document.createElement('p')
theClosingX.textContent = "X"
theClosingX.className = "close-x"
theClosingX.addEventListener('click', (e) => {
    e.preventDefault();
    backgroundBlur.style.display = 'none';
    instructionsDD.style.background = "none";
    instructionsModal.style.display = 'none';
})
instructionsModal.appendChild(theClosingX)

// ------------------------ close x --------------------I


document.body.appendChild(instructionsModal);

// -------------- header -------------------------------I


// -------------- footer -------------------------------I

const footer = document.createElement('footer');
document.body.appendChild(footer);
const divfooter = document.createElement('div');
divfooter.className = "div-footer"
footer.appendChild(divfooter)

const secondDiv = document.createElement('div')
secondDiv.className = "second-div-footer"
secondDiv.innerText = "By Joseph Sipiorski"
footer.appendChild(secondDiv)

const gitHub = document.createElement('a');
gitHub.setAttribute( 'target', "_blank");
gitHub.setAttribute( 'href', "https://github.com/JosefSipi");
gitHub.className = "logo-hub-tag";

const imageGitHub = document.createElement('img');
imageGitHub.className = "info-logo";
imageGitHub.setAttribute('src', 'src/images/github.png');
imageGitHub.setAttribute('alt', 'gitHub Logo')

gitHub.appendChild(imageGitHub);
divfooter.appendChild(gitHub);

// ------- linkedIn --------------
const linkedIn = document.createElement('a');
linkedIn.setAttribute( 'target', "_blank")
linkedIn.setAttribute( 'href', "https://www.linkedin.com/in/joseph-sipiorski-590452195/");
linkedIn.className = "logo-hub-tag";

const imagelinkedIn = document.createElement('img');
imagelinkedIn.setAttribute( 'target', "_blank")
imagelinkedIn.setAttribute( 'src', "src/images/linkedIn.png");

imagelinkedIn.className = "info-logo-link";
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
imageangelList.setAttribute('src', 'src/images/angelList.png');
imageangelList.setAttribute('alt', 'angelList Logo')

angelList.appendChild(imageangelList);
divfooter.appendChild(angelList);

// -------------- footer -------------------------------I

}


module.exports = {
    build
}
