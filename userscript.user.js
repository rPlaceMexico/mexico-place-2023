// ==UserScript==
// @name         r/MexicoPlace template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the canvas!
// @author       r/MexicoPlace Discord Server community
// @match        https://garlic-bread.reddit.com/embed
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    document.addEventListener('load', () => {
        document.querySelector('#shadow-root div.frame').appendChild((function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/francerz/mexico-place-2023/master/MexicoFTW_template.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })());
    }, false);

}