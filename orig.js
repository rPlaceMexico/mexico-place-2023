// ==UserScript==
// @name         r/MexicoPlace template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the canvas!
// @author       r/MexicoPlace Discord Server community
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
console.log('SCRIPT r/MexicoPlace template');

function setImageElement() {
    let container =
        document.querySelector('garlic-bread-embed').shadowRoot.children[0]
        .querySelector('garlic-bread-canvas').shadowRoot.children[0];
    container.appendChild((function () {
        const i = document.createElement("img");
        i.src = "https://raw.githubusercontent.com/rPlaceMexico/mexico-place-2023/master/MexicoFTW_template.png";
        i.style = "position:absolute;left:0;top:0;image-rendering:pixelated;width:1500px;height:1000px;";
        console.log(i);
        return i;
    })());
}
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        setTimeout(setImageElement, 5000);
    }, false);

}