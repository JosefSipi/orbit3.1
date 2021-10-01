import { setColor, changeInput } from '../index';

export const build = () => {


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


// -------------- options -------------------------------I

const optionDiv = document.createElement('div')
optionDiv.className = 'option-div'

const gearsDiv = document.createElement('div')
gearsDiv.className = 'gears-div';
gearsDiv.addEventListener('click', (event) => {

    let dropDown = event.currentTarget.parentElement.children[1]
    debugger
    if (dropDown.classList.value === 'visible-color-dd') {
        event.currentTarget.style.backgroundColor = 'black'
        dropDown.className = 'hidden-color-dd'
    } else {
        event.currentTarget.style.backgroundColor = 'rgb(39, 39, 39)'
        dropDown.className = 'visible-color-dd'
    }

})

const gears = document.createElement('img');
gears.className = "img-gears";
gears.setAttribute('src', 'src/images/gears1.png');
gears.setAttribute('alt', 'gears')


gearsDiv.appendChild(gears)
optionDiv.appendChild(gearsDiv)



// const optionsBtn = document.createElement('label')
// optionsBtn.className = 'options-label'
// optionDiv.appendChild(optionsBtn);

// const spanTxt = document.createElement('span')
// spanTxt.className = 'span-txt'
// spanTxt.innerText = 'Tools'
// optionsBtn.appendChild(spanTxt);

// const inputCheckBox = document.createElement('input')
// inputCheckBox.setAttribute('type', 'checkBox')
// inputCheckBox.className = 'input-check';
// optionsBtn.appendChild(inputCheckBox)

// const spanSlider = document.createElement('span')
// spanSlider.className = 'span-slider'
// optionsBtn.appendChild(spanSlider);

/* -------------- settings -------------------------------I */
const settingsDrop = document.createElement('div');
settingsDrop.className = 'hidden-color-dd'


const colorsdiv = document.createElement('div')
colorsdiv.className = 'colors-div-opt'
// ------ LEIDS BLAUW ----------
// ---- blue
const blueLabel = document.createElement('label')
blueLabel.innerText = 'Blue'
blueLabel.className = 'blue-label'

const blueRadioOpt = document.createElement('input')
blueRadioOpt.setAttribute('type', 'radio')
blueRadioOpt.setAttribute('name', 'color')
blueRadioOpt.className = 'input-radio-blue';
blueRadioOpt.addEventListener('click', () => setColor('0x001158'))
blueLabel.appendChild(blueRadioOpt)
colorsdiv.appendChild(blueLabel);
// ---- blue

// ---- green
const greenLabel = document.createElement('label')
greenLabel.innerText = 'Green'
greenLabel.className = 'green-label'

const greenRadioOpt = document.createElement('input')
greenRadioOpt.setAttribute('type', 'radio')
greenRadioOpt.setAttribute('name', 'color')
greenRadioOpt.className = 'input-radio-green';
greenRadioOpt.addEventListener('click', () => setColor('0x008060'))
greenLabel.appendChild(greenRadioOpt)
colorsdiv.appendChild(greenLabel);
// ---- green

// ---- brown
const brownLabel = document.createElement('label')
brownLabel.innerText = 'Brown'
brownLabel.className = 'brown-label'

const brownRadioOpt = document.createElement('input')
brownRadioOpt.setAttribute('type', 'radio')
brownRadioOpt.setAttribute('name', 'color')
brownRadioOpt.className = 'input-radio-brown';
brownRadioOpt.addEventListener('click', () => setColor('0x48202a'))
brownLabel.appendChild(brownRadioOpt)
colorsdiv.appendChild(brownLabel);
// ---- brown

// ---- orange
const orangeP = document.createElement('p');
orangeP.className = 'color-group-p'

const orangeRadioOpt = document.createElement('input')
orangeRadioOpt.setAttribute('id', 'orange')
orangeRadioOpt.setAttribute('type', 'radio')
orangeRadioOpt.setAttribute('name', 'color')
orangeRadioOpt.className = 'input-radio-orange';
orangeRadioOpt.addEventListener('click', () => setColor('0xed7d31'))
orangeP.appendChild(orangeRadioOpt)

const orangeLabel = document.createElement('label')
orangeLabel.setAttribute('for', 'orange')
orangeLabel.innerText = 'Orange'
orangeLabel.className = 'orange-label'
orangeP.appendChild(orangeLabel)

colorsdiv.appendChild(orangeP);
// ---- orange

// ---- pink
const pinkLabel = document.createElement('label')
pinkLabel.innerText = 'Pink'
pinkLabel.className = 'pink-label'

const pinkRadioOpt = document.createElement('input')
pinkRadioOpt.setAttribute('type', 'radio')
pinkRadioOpt.setAttribute('name', 'color')
pinkRadioOpt.className = 'input-radio-pink';
pinkRadioOpt.addEventListener('click', () => setColor('0xa64d79'))
pinkLabel.appendChild(pinkRadioOpt)
colorsdiv.appendChild(pinkLabel);
// ---- pink

// ------ LEIDS BLAUW ----------

// ---- red
// const redLabel = document.createElement('label')
// redLabel.innerText = 'Red'
// redLabel.className = 'red-label'

// const redRadioOpt = document.createElement('input')
// redRadioOpt.setAttribute('type', 'radio')
// redRadioOpt.setAttribute('name', 'color')
// redRadioOpt.className = 'input-radio-color1';
// redRadioOpt.addEventListener('click', () => setColor('0xFF2D00'))
// redLabel.appendChild(redRadioOpt)
// colorsdiv.appendChild(redLabel);
// ---- red

// ---- yellow
// const yellowLabel = document.createElement('label')
// yellowLabel.innerText = 'Yellow'
// yellowLabel.className = 'yellow-label'

// const yellowRadioOpt = document.createElement('input')
// yellowRadioOpt.setAttribute('type', 'radio')
// yellowRadioOpt.setAttribute('name', 'color')
// yellowRadioOpt.className = 'input-radio-yellow';
// yellowRadioOpt.addEventListener('click', () => setColor('0xF0FF00'))
// yellowLabel.appendChild(yellowRadioOpt)
// colorsdiv.appendChild(yellowLabel);
// ---- yellow

// ---- white
const whiteLabel = document.createElement('label')
whiteLabel.innerText = 'White'
whiteLabel.className = 'white-label'

const whiteRadioOpt = document.createElement('input')
whiteRadioOpt.setAttribute('type', 'radio')
whiteRadioOpt.setAttribute('name', 'color')
whiteRadioOpt.className = 'input-radio-white';
whiteRadioOpt.addEventListener('click', () => setColor('0xffffff'))
whiteLabel.appendChild(whiteRadioOpt)
colorsdiv.appendChild(whiteLabel);

// ---- white

// ---- remove
const removeLabel = document.createElement('label')
removeLabel.innerText = 'Remove'
removeLabel.className = 'remove-label'

const removeRadioOpt = document.createElement('input')
removeRadioOpt.setAttribute('type', 'radio')
removeRadioOpt.setAttribute('name', 'color')
removeRadioOpt.className = 'input-radio-remove';
removeRadioOpt.addEventListener('click', () => setColor('remove'))
removeLabel.appendChild(removeRadioOpt)
colorsdiv.appendChild(removeLabel);
// ---- remove

// ------------ robit controlls -------------------

let orbitControlls = document.createElement('div');
orbitControlls.className = 'orbit-cont-div';

// --------- y-axis ----------------
let yInput = document.createElement('input');
yInput.className ='y-input'
yInput.setAttribute('type', 'range')
yInput.setAttribute('step', '.001')
yInput.setAttribute('min', '.000')
yInput.setAttribute('max', '.050')
yInput.setAttribute('name', 'inputRange')
yInput.setAttribute('value', '.000')
yInput.addEventListener('change', (e) => changeInput(e))


let labelY = document.createElement('label');
labelY.innerText = 'Y-axis'

labelY.appendChild(yInput)
orbitControlls.appendChild(labelY)
// --------- y-axis ----------------

// --------- x-axis ----------------
let xInput = document.createElement('input');
xInput.className ='x-input'
xInput.setAttribute('type', 'range')
xInput.setAttribute('step', '.001')
xInput.setAttribute('min', '.000')
xInput.setAttribute('max', '.050')
xInput.setAttribute('name', 'inputRange')
xInput.setAttribute('value', '.000')
xInput.addEventListener('change', (e) => changeInput(e))


let labelx = document.createElement('label');
labelx.innerText = 'X-axis'

labelx.appendChild(xInput)
orbitControlls.appendChild(labelx)
// --------- x-axis ----------------

// ------------ robit controlls -------------------

settingsDrop.appendChild(colorsdiv);
settingsDrop.appendChild(orbitControlls);
optionDiv.appendChild(settingsDrop)
/* -------------- settings -------------------------------I */

/* -------------- settings -------------------------------I */
// const settingsDrop = document.createElement('div');
// settingsDrop.className = 'settings-div-dd'


// const colorsDiv = document.createElement('div')
// colorsDiv.className = 'colors-div-opt'

// // ---- red
// const redLabel = document.createElement('label')
// redLabel.innerText = 'Red'
// redLabel.className = 'red-label'

// const redCheckBox = document.createElement('input')
// redCheckBox.setAttribute('type', 'checkBox')
// redCheckBox.className = 'input-check-color1';
// redCheckBox.addEventListener('')
// redLabel.appendChild(redCheckBox)
// colorsDiv.appendChild(redLabel);

// // ---- red

// settingsDrop.appendChild(colorsDiv);
// optionDiv.appendChild(settingsDrop)
/* -------------- settings -------------------------------I */



document.body.appendChild(optionDiv)
// -------------- options -------------------------------I




}


// module.exports = {
//     build
// }
