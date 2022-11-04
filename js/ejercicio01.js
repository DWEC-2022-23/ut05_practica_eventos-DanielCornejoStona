document.getElementById("numero").addEventListener("dblclick",triple);
document.getElementById("numero").addEventListener("mouseover",ratondentro);
document.getElementById("numero").addEventListener("mouseout",ratonfuera);
/*
document.getElementById("numero").ondblclick=triple;
document.getElementById("numero").onmouseover=ratondentro;
document.getElementById("numero").onmouseout=ratonfuera;
*/
function triple(){
    var numero = document.getElementById("numero").textContent;
    var num= new Number(numero);
    document.getElementById("numero").textContent= num*3;
       
}
function ratondentro(){
    document.getElementById("numero").style.color = "orange";
    document.getElementById("numero").style.backgroundColor = "blue";
    document.getElementById("numero").style.font= "30px sans-serif";
}
function ratonfuera(){
    document.getElementById("numero").style.color = "black";
    document.getElementById("numero").style.backgroundColor = "white";
    document.getElementById("numero").style.font= "18px liberation-serif";
}