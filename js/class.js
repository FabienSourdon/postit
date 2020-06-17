class postit{
    Ident;
    PosX;
    PosY;
    PosZ;
    Long;
    Larg;
    CouleurFond;
    CouleurTexte;
    Contenu;

    constructor(id,posx,posy,posz,lon,lar,colFond,colTxt,contentPost){
        this.Ident = id;
        this.PosX = posx;
        this.PosY = posy;
        this.PosZ = posz;
        this.Long = lon;
        this.Larg = lar;
        this.CouleurFond = colFond;
        this.CouleurTexte = colTxt;
        this.Contenu = contentPost;
    }

    // Fonction de création de postit
    createPostit(){
        
        let divContainer = document.getElementById('contPost');
        let containPost = document.getElementById('postit'+parseInt(this.Ident));
    
        if(containPost === null){
            
            containPost = document.createElement('div');
            containPost.id = 'postit'+parseInt(this.Ident++);
        }
    
        containPost.style.position = 'absolute';
        containPost.style.zIndex = this.PosZ;
        containPost.style.top = this.PosX+"px";
        containPost.style.left = this.PosY+"px";
        containPost.style.height = this.Long+"px";
        containPost.style.width = this.Larg+"px";
        containPost.style.backgroundColor = this.CouleurFond;
        containPost.style.color = this.CouleurTexte;
        containPost.style.boxShadow = "5px 5px 35px #000000";
        containPost.style.display = "flex";
        containPost.style.flexFlow = "column-reverse wrap";
        containPost.style.alignItems = "center";
        containPost.style.justifyContent = "space-between";
        
        let getP = document.getElementById('pId'+this.Ident);
        let contButon = document.createElement('div');


        if(getP == null){

            //Creation du texte
            let pPostit = document.createElement('p');
            pPostit.id = "pId"+this.Ident++;
            pPostit.style.paddingTop = "45%";
            pPostit.innerHTML = this.Contenu;
            pPostit.contentEditable = true;
            
            //Creation du bouton move
            let imgMove = document.createElement('img');
            imgMove.src = "./img/move.svg";
            imgMove.style.height = "30px";
            imgMove.style.width = "30px";

            let btnMove = document.createElement('button');
            btnMove.id = "btnMove"+parseInt(this.Ident++);
            btnMove.style.height = "30px";
            btnMove.style.width = "30px";
            btnMove.style.border = "none";
            btnMove.style.backgroundColor = this.CouleurFond;
            btnMove.style.marginLeft = "5px";
            
                //Ajout de listener sur le bouton move
                var mousePosition;
                var offset = [this.PosX,this.PosY];
                var isDown = false;

                btnMove.addEventListener('dragstart', function(e){
                    isDown = true;
                    offset = [
                        containPost.offsetLeft - e.clientX,
                        containPost.offsetTop - e.clientY
                    ];
                });

                btnMove.addEventListener('dragend', function() {
                    isDown = false;
                    containPost.posX = containPost.style.left ;
                    containPost.posY = containPost.style.top ;
                });

                btnMove.addEventListener('drag', function(event) {
                    event.preventDefault();
                    if (isDown) {
                        mousePosition = {
            
                        x : event.clientX,
                        y : event.clientY
            
                        };
                    containPost.style.left = (mousePosition.x + offset[0]) + 'px';
                    containPost.style.top  = (mousePosition.y + offset[1]) + 'px';
                }
                });

            //Creation du bouton delete
            let imgDel = document.createElement('img');
            imgDel.src = "./img/delete.svg";
            imgDel.style.height = "30px";
            imgDel.style.width = "30px";

            let btnDel = document.createElement('button');
            btnDel.style.height = "30px";
            btnDel.style.width = "30px";
            btnDel.style.border = "none";
            btnDel.style.backgroundColor = this.CouleurFond;
            btnDel.style.marginLeft = "5px";

            //Creation du bouton resize
            let imgResize = document.createElement('img');
            imgResize.src = "./img/maximize-2.svg";
            imgResize.style.height = "30px";
            imgResize.style.width = "30px";

            let btnResize = document.createElement('button');
            btnResize.id = "btnResize"+this.Ident;
            btnResize.style.height = "30px";
            btnResize.style.width = "30px";
            btnResize.style.border = "none";
            btnResize.style.backgroundColor = this.CouleurFond;
            btnResize.style.marginLeft = "5px";
            btnResize.addEventListener('dragstart', initDrag, false);

                //creation Resize
                var startX, startY, startWidth, startHeight;

                function initDrag(e){
                    startX = e.clientX;
                    startY = e.clientY;
                    startWidth = parseInt(containPost.style.width);
                    startHeight = parseInt(containPost.style.height);
                    btnResize.addEventListener('drag', drag);
                    btnResize.addEventListener('dragend', stopDrag);
                    console.log(parseInt(containPost.style.height),parseInt(containPost.style.width));
                }

                function drag(e){
                    containPost.style.width = startWidth + (e.clientX - startX) + 'px';
                    containPost.style.height = startHeight + (e.clientY - startY) + 'px';
                    console.log(containPost.style.height);
                }

                function stopDrag(){
                    btnResize.removeEventListener('drag', drag);
                    btnResize.removeEventListener('dragend', stopDrag);
                    console.log(parseInt(containPost.style.height),parseInt(containPost.style.width));
                }
                
            //Creation du bouton edit
            let imgEdit = document.createElement('img');
            imgEdit.src = "./img/edit.svg";
            imgEdit.style.height = "30px";
            imgEdit.style.width = "30px";

            let btnEdit = document.createElement('button');
            btnEdit.style.height = "30px";
            btnEdit.style.width = "30px";
            btnEdit.style.border = "none";
            btnEdit.style.backgroundColor = this.CouleurFond;
            btnEdit.style.marginLeft = "5px";

            //Creation du bouton axeZ
            let imgZidx = document.createElement('img');
            imgZidx.src = "./img/layers.svg";
            imgZidx.style.height = "30px";
            imgZidx.style.width = "30px";

            let btnZidx = document.createElement('button');
            btnZidx.style.height = "30px";
            btnZidx.style.width = "30px";
            btnZidx.style.border = "none";
            btnZidx.style.backgroundColor = this.CouleurFond;
            btnZidx.style.marginLeft = "5px";

            //Ajout des éléments créés au DOM
            btnMove.appendChild(imgMove);
            btnDel.appendChild(imgDel);
            btnResize.appendChild(imgResize);
            btnEdit.appendChild(imgEdit);
            btnZidx.appendChild(imgZidx);
            contButon.appendChild(btnMove);
            contButon.appendChild(btnDel);
            contButon.appendChild(btnResize);
            contButon.appendChild(btnEdit);
            contButon.appendChild(btnZidx);
            containPost.appendChild(contButon);
            containPost.appendChild(pPostit);
        }
        else{
            getP.innerHTML = this.Contenu;
            containPost.appendChild(getP);
        }
    
        divContainer.appendChild(containPost);
    }
}

