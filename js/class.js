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
            imgMove.style.height = "20px";
            imgMove.style.width = "20px";

            let btnMove = document.createElement('button');
            btnMove.id = "btnMove"+parseInt(this.Ident++);
            btnMove.style.height = "20px";
            btnMove.style.width = "20px";
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
                    containPost.PosX = containPost.style.left ;
                    containPost.PosY = containPost.style.top ;
                });

                btnMove.addEventListener('drag', function(event) {
                    event.preventDefault();
                        if (isDown) {
                            mousePosition = {
                
                            x : mouseX,
                            y : mouseY
                
                            };
                        containPost.style.left = (mousePosition.x + offset[0]) + 'px';
                        containPost.style.top  = (mousePosition.y + offset[1]) + 'px';
                        }
                });

            //Creation du bouton delete
            let imgDel = document.createElement('img');
            imgDel.src = "./img/delete.svg";
            imgDel.style.height = "20px";
            imgDel.style.width = "20px";

            let btnDel = document.createElement('button');
            btnDel.style.height = "20px";
            btnDel.style.width = "20px";
            btnDel.style.border = "none";
            btnDel.style.backgroundColor = this.CouleurFond;
            btnDel.style.marginLeft = "5px";
            btnDel.addEventListener('click', function(e){
                divContainer.removeChild(containPost);
            })

            //Creation du bouton resize
            let imgResize = document.createElement('img');
            imgResize.src = "./img/maximize-2.svg";
            imgResize.style.height = "20px";
            imgResize.style.width = "20px";

            let btnResize = document.createElement('button');
            btnResize.id = "btnResize"+this.Ident;
            btnResize.style.height = "20px";
            btnResize.style.width = "20px";
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
                    console.log(startY);
                }

                function drag(e){
                    //console.log(e);
                    containPost.style.width = startWidth + (mouseX - startX) + 'px';
                    containPost.style.height = startHeight + (mouseY - startY) + 'px';
                }

                function stopDrag(){
                    btnResize.removeEventListener('drag', drag);
                    btnResize.removeEventListener('dragend', stopDrag);
                    console.log(startY);               
                }
                
            //Creation du bouton Zup
            let imgZup = document.createElement('img');
            imgZup.src = "./img/chevrons-up.svg";
            imgZup.style.height = "20px";
            imgZup.style.width = "20px";

            let btnZup = document.createElement('button');
            btnZup.style.height = "20px";
            btnZup.style.width = "20px";
            btnZup.style.border = "none";
            btnZup.style.backgroundColor = this.CouleurFond;
            btnZup.style.marginLeft = "5px";
            btnZup.addEventListener('click', function(){
                containPost.style.zIndex++;
            })

            //Creation du bouton Zdown
            let imgZdown = document.createElement('img');
            imgZdown.src = "./img/chevrons-down.svg";
            imgZdown.style.height = "20px";
            imgZdown.style.width = "20px";

            let btnZdown = document.createElement('button');
            btnZdown.style.height = "20px";
            btnZdown.style.width = "20px";
            btnZdown.style.border = "none";
            btnZdown.style.backgroundColor = this.CouleurFond;
            btnZdown.style.marginLeft = "5px";
            btnZdown.addEventListener('click', function(){
                containPost.style.zIndex--;
            })


            //Ajout des éléments créés au DOM
            btnMove.appendChild(imgMove);
            btnDel.appendChild(imgDel);
            btnResize.appendChild(imgResize);
            btnZup.appendChild(imgZup);
            btnZdown.appendChild(imgZdown);
            contButon.appendChild(btnMove);
            contButon.appendChild(btnDel);
            contButon.appendChild(btnResize);
            contButon.appendChild(btnZup);
            contButon.appendChild(btnZdown);
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

