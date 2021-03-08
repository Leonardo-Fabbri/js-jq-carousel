$(document).ready(function(){
    $(".next").click (function() {
       nextimage();
    });

/* definisco gli oggetti interessati per le azioni che andranno a compiere */
    $(".prev").click (function() {
        previmage();
     });
});
/*faccio i passaggi sopra per specificare che solo quando 
andrò a cliccare verrano eseguiti i comandi  qui sotto*/
function nextimage() {
    console.log ("ha cliccato next");
    var img= $("img.active");
    img.removeClass("active")
/*salvo la mia imagine, poi SE sto guardando l'ultima
immagineallora sposta la classe active sulla prima.*/
    
    if (img.hasClass("last")) {
        $("img.first").addClass("active");
    }else {/*altrimenti sposta la classe active alla sucessiva*/
        img.next("img").addClass("active");
    }
}

function previmage() {
    console.log("ha cliccato prev");
    console.log ("ha cliccato next");
    var img= $("img.active");
    img.removeClass("active")

    if (img.hasClass("first")) {
        $("img.last").addClass("active");
    }else {
        img.prev("img").addClass("active");
    }

}