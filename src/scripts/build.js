

const build = () => {
const header = document.createElement('header');
// const text = document.createTextNode('this is me testing the text node just');
// header.style.height = '30px';
// header.appendChild(text);
document.body.appendChild(header);

const div = document.createElement('div');

header.appendChild(div)

const resetButton = document.createElement('button');
resetButton.className = "reset-button";
div.appendChild(resetButton);

const instructionsDD = document.createElement('button');
instructionsDD.className = "instructionsDD-button";
div.appendChild(instructionsDD);

}

module.exports = {
    build
}