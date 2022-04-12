document.getElementById("hide").onclick=function(){
    document.getElementById("show").style.display = "none";
    document.getElementById("pay").setAttribute("", "");
}
document.getElementById("display").onclick=function(){
    document.getElementById("show").style.display = "block";
    document.getElementById("pay").setAttribute("required", "");
}