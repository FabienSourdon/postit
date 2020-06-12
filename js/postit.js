let postit1 = new postit("0","0","0","10","300px","300px","#04B45F","#000000","Important : Révolutionner Javascript")
let postit2 = new postit("1","0","0","10","300px","300px","#cf1818","#FFFFFF","Mettre un terme a PHP")
let postit3 = new postit("2","0","0","10","300px","300px","#354cb4","#FFFFFF","Coder au bord de la piscine")


postit1.createPostit();
postit2.createPostit();
postit3.createPostit();
//postit1.resizePostit("500px", "500px");
postit1.movePostit("450", "710");
postit2.movePostit("250", "410");
postit3.movePostit("550", "1110");
//postit1.deleteContent()
//postit1.editPostit("blablabla")
//postit1.changePostitZ("8")
postit1.createPostit();
postit2.createPostit();
postit3.createPostit();