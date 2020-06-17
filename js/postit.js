let postit1 = new postit("0", "6", "390", "10", "300", "300", "#04B45F", "#000000", "Important : Révolutionner Javascript")
let postit2 = new postit("1", "6", "790", "10", "300", "300", "#cf1818", "#FFFFFF", "Mettre un terme a PHP")
let postit3 = new postit("2", "6", "1190", "10", "300", "300", "#354cb4", "#FFFFFF", "Coder au bord de la piscine")
let mouseX, mouseY;

let createVert = document.getElementById('postitVert');
createVert.addEventListener('click', function () {
    postit1.createPostit()
});

let createRouge = document.getElementById('postitRouge');
createRouge.addEventListener('click', function () {
    postit2.createPostit()
});

let createBleu = document.getElementById('postitBleu');
createBleu.addEventListener('click', function () {
    postit3.createPostit()
});

document.body.addEventListener('dragover', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
})