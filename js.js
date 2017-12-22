//https://stackoverflow.com/questions/11163060/cannot-set-property-innerhtml-of-null
//load KO ou onload OK
window.onload= function(){
    document.getElementById("resultat").innerHTML = 5;
    console.log("in main js");
    //alert("in main JS alert");

    
    function bouton(){
	document.getElementById("boutonn").innerHTML =  "bouton pressé";
	//pr 5sec
	console.log("in bouton()");
    }

    var funn = function(){
	//closure
	console.log("in dup()");
    }


    function dup2(){
	
	console.log("in dup()");
    }


    function jsFile(){
	document.getElementById("jsfileResult").innerHTML =  "js.js";
	console.log("in jsFile");
	

    }
    jsFile();

    function callREST(){
	
	console.log("callREST");
    }
    function gameEngine(time){
	
	console.log("gameEngine");
    }
}
