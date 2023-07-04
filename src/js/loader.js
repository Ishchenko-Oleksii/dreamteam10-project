const loader = document.querySelector('.loader');
window.addEventListener('load', onLoad);

function onLoad() {
    loader.classList.add('hide-loader');
    // loader.remove();
}