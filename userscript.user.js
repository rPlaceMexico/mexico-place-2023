// ==UserScript==
// @name         r/MexicoPlace template
// @namespace    http://tampermonkey.net/
// @downloadURL  https://github.com/rPlaceMexico/mexico-place-2023/raw/master/userscript.user.js
// @updateURL    https://github.com/rPlaceMexico/mexico-place-2023/raw/master/userscript.user.js
// @version      0.1
// @description  try to take over the canvas!
// @author       r/MexicoPlace Discord Server community
// @match        https://hot-potato.reddit.com/embed*
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
console.log('SCRIPT r/MexicoPlace template');
(function() {
    var i = document.createElement("img");
    var c = 0;
    var setImageElement =function() {
        var container = document.querySelector('garlic-bread-embed')
            .shadowRoot.children[0].querySelector('garlic-bread-canvas')
            .shadowRoot.children[0];
        console.log('DET');
        container.appendChild((function () {
            i.src = "https://raw.githubusercontent.com/rPlaceMexico/mexico-place-2023/master/MexicoFTW_template.png?c="+c++;
            i.style = "position:absolute;left:0;top:0;image-rendering:pixelated;width:100%;height:100%;";
            setTimeout(setImageElement, 300000);
            console.log(i);
            return i;
        })());
    }
    if (window.top !== window.self) {
        window.addEventListener('load', () => {
            setTimeout(setImageElement, 5000);
        }, false);
    }
})();