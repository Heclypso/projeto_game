// sistema de loading
var main = document.getElementById('main-content');
var loader = document.getElementById('load');
window.addEventListener('load', function () {
    setTimeout(function () {
        main.style.display = "block";
        loader.style.display = "none";
    }, 2000);
});
