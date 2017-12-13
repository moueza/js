//https://stackoverflow.com/questions/11163060/cannot-set-property-innerhtml-of-null
window.load= function(){
    document.getElementById("resultat").innerHTML = 5;
    console.log("in main js");
    alert("in main JS alert");
function dup(x){
  
    console.log("in dup()");
}
}
