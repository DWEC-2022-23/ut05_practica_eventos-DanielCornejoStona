document.getElementById("numero").ondblclick=triple;
function triple(){
    var numero = document.getElementById("numero").textContent;
    var num= new Number(numero);
    alert(num*3);   
}