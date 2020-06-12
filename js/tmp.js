//creation auto postit
let mesPostit=[];

function createPostit(idt,px,py,lg,lr,colFd,colTx,cont){
    ajoutPostit = mesPostit.push(new postit(idt,px,py,lg,lr,colFd,colTx,cont));
    let containPost = document.getElementById('contPost');
    let creaPost = document.createElement('div');
    creaPost.className = 'postit'+idt;
    creaPost.style.paddingLeft = mesPostit[idt].PosX;
    creaPost.style.paddingTop = mesPostit[idt].PosY;
    creaPost.style.height = mesPostit[idt].Long;
    creaPost.style.width = mesPostit[idt].Larg;
    creaPost.style.backgroundColor = mesPostit[idt].CouleurFond;
    creaPost.style.color = mesPostit[idt].CouleurTexte;
    creaPost.innerHTML = mesPostit[idt].Contenu;
    containPost.appendChild(creaPost);
    //console.log(creaPost);
}

if(mesPostit.length !== 0){
    let btnAjout = document.getElementById('btnAdd');
    btnAjout.addEventListener('click',function(){createPostit((mesPostit.length+1),"0","0","300px","300px","#04B45F","#000000","lol")});

}
else{
    let btnAjout = document.getElementById('btnAdd');
    btnAjout.addEventListener('click',function(){createPostit((mesPostit.length),"0","0","300px","300px","#04B45F","#000000","lol")});
    
}

//bouton console log
let btnConsole = document.getElementById('btnCons');
btnConsole.addEventListener('click', function(){console.log(mesPostit)});

//Fonction déplacement
var divPostit = document.getElementById('postit0');
var mousePosition;
var offset = [divPostit.PosX,divPostit.PosY];
var isDown = false;

divPostit.addEventListener('mousedown', function(e){
    isDown = true;
    offset = [
        divPostit.offsetLeft - e.clientX,
        divPostit.offsetTop - e.clientY
    ];
}, true);

divPostit.addEventListener('mouseup', function() {
    isDown = false;
    postit1.positionX = divPostit.style.left ;
    postit1.positionY = divPostit.style.top ;
}, true);

divPostit.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        divPostit.style.left = (mousePosition.x + offset[0]) + 'px';
        divPostit.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);