let actual = 0;
let j = 0;
function mostrar(n){
    let imagenes = document.getElementsByClassName("imagen");
    for(i = 0; i<imagenes.length; i++){
        if(imagenes[i].className.includes("actual")){
            imagenes[i].className = imagenes[i].className.replace("actual", "");
            break;
        }
    }
    actual = n;
    imagenes[n].className += " actual";
    j+=1;
    if(j==imagenes.length){
        j=0;
    }
}
function iniciar(){
    setInterval('mostrar(j)', 3000);
}