(function() {
    let container =
        document.querySelector('garlic-bread-embed').shadowRoot.children[0]
        .querySelector('garlic-bread-canvas').shadowRoot.children[0].children[0];
    
    let url = container.toDataURL();
    let link = document.createElement('a');
    link.href = url;
    link.download = 'MexicoFTW';
    link.click();
})();