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

    createPostit(){
    
        let divContainer = document.getElementById('contPost');
        let containPost = document.getElementById('postit'+this.Ident);
    
        if(containPost === null){
            
            containPost = document.createElement('div');
            containPost.id = 'postit'+this.Ident;
        }
    
        containPost.style.position = 'absolute';
        containPost.style.zIndex = this.PosZ;
        containPost.style.top = this.PosX;
        containPost.style.left = this.PosY;
        containPost.style.height = this.Long;
        containPost.style.width = this.Larg;
        containPost.style.backgroundColor = this.CouleurFond;
        containPost.style.color = this.CouleurTexte;
        containPost.style.boxShadow = "5px 5px 35px #000000";
        containPost.style.display = "flex";
        containPost.style.flexFlow = "column-reverse wrap"
        containPost.style.alignItems = "center";
        containPost.style.justifyContent = "space-between";
        
        let getP = document.getElementById('pId'+this.Ident);
        let contButon = document.createElement('div');

        if(getP == null){
            let pPostit = document.createElement('p');
            pPostit.id = "pId"+this.Ident;
            pPostit.style.paddingTop = "45%";
            pPostit.innerHTML = this.Contenu;
            

            let imgMove = document.createElement('img');
            imgMove.src = "./img/move.svg";
            imgMove.style.height = "15px";
            imgMove.style.width = "15px";

            let btnMove = document.createElement('button');
            btnMove.style.height = "15px";
            btnMove.style.width = "15px";
            btnMove.style.border = "none";
            btnMove.style.backgroundColor = this.CouleurFond;
            btnMove.style.marginLeft = "5px";

            let imgDel = document.createElement('img');
            imgDel.src = "./img/delete.svg";
            imgDel.style.height = "15px";
            imgDel.style.width = "15px";

            let btnDel = document.createElement('button');
            btnDel.style.height = "15px";
            btnDel.style.width = "15px";
            btnDel.style.border = "none";
            btnDel.style.backgroundColor = this.CouleurFond;
            btnDel.style.marginLeft = "5px";

            let imgResize = document.createElement('img');
            imgResize.src = "./img/maximize-2.svg";
            imgResize.style.height = "15px";
            imgResize.style.width = "15px";

            let btnResize = document.createElement('button');
            btnResize.style.height = "15px";
            btnResize.style.width = "15px";
            btnResize.style.border = "none";
            btnResize.style.backgroundColor = this.CouleurFond;
            btnResize.style.marginLeft = "5px";

            let imgEdit = document.createElement('img');
            imgEdit.src = "./img/edit.svg";
            imgEdit.style.height = "15px";
            imgEdit.style.width = "15px";

            let btnEdit = document.createElement('button');
            btnEdit.style.height = "15px";
            btnEdit.style.width = "15px";
            btnEdit.style.border = "none";
            btnEdit.style.backgroundColor = this.CouleurFond;
            btnEdit.style.marginLeft = "5px";

            let imgZidx = document.createElement('img');
            imgZidx.src = "./img/layers.svg";
            imgZidx.style.height = "15px";
            imgZidx.style.width = "15px";

            let btnZidx = document.createElement('button');
            btnZidx.style.height = "15px";
            btnZidx.style.width = "15px";
            btnZidx.style.border = "none";
            btnZidx.style.backgroundColor = this.CouleurFond;
            btnZidx.style.marginLeft = "5px";

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
            contButon.appendChild(pPostit);
            containPost.appendChild(contButon);
        }
        else{
            getP.innerHTML = this.Contenu;
            containPost.appendChild(getP);
        }
    
        divContainer.appendChild(containPost);
    }

    movePostit(newposX,newposY){
        this.PosX = newposX+"px";
        this.PosY = newposY+"px";
    }

    resizePostit(newLong, newLarg){
        this.Long = newLong;
        this.Larg = newLarg;
    }

    editPostit(newEntry){
        this.Contenu = newEntry;
    }

    deleteContent(){
        this.Contenu = "";
    }

    changePostitZ(newz){
        this.PosZ = newz;
    }
}

