var quequesvar = document.getElementById("queques_id");
var bolosvar = document.getElementById("bolos_id");
var porfoitsvar = document.getElementById("porfoits_id");
var pudinsvar = document.getElementById("pudins_id");
var moussesvar = document.getElementById("mousses_id");
var crepesvar = document.getElementById("crepes_id");
var docesvar = document.getElementById("doces_id");
var flansvar = document.getElementById("flans_id");
var browniesvar = document.getElementById("brownies_id");
var naosobremesasvar = document.getElementById("naosobremesas_id");
console.log(naosobremesasvar);

quequesvar.addEventListener("click", picdropdown);
bolosvar.addEventListener("click", picdropdown);
porfoitsvar.addEventListener("click", picdropdown);
pudinsvar.addEventListener("click", picdropdown);
moussesvar.addEventListener("click", picdropdown);
crepesvar.addEventListener("click", picdropdown);
docesvar.addEventListener("click", picdropdown);
flansvar.addEventListener("click", picdropdown);
browniesvar.addEventListener("click", picdropdown);
naosobremesasvar.addEventListener("click", picdropdown);

quequesvar.addEventListener("blur", justNo);
bolosvar.addEventListener("blur", justNo);
porfoitsvar.addEventListener("blur", justNo);
pudinsvar.addEventListener("blur", justNo);
crepesvar.addEventListener("blur", justNo);
docesvar.addEventListener("blur", justNo);
flansvar.addEventListener("blur", justNo);
browniesvar.addEventListener("blur", justNo);
naosobremesasvar.addEventListener("blur", justNo);

var classnavbar = document.getElementsByClassName("navbar");
var alldivs = classnavbar[0].querySelectorAll("div")

function picdropdown(){
	for (var i=0; i<alldivs.length; i++){
		$(alldivs[i]).hide(400);
	}
	//console.log(this); /*this = <a href="#" id="pudins_id">Pudins</a>*/
	var parent = this.parentNode;
	//console.log(parent);
	var divchild = parent.querySelector("div");
	$(divchild).show(400);
}

function justNo(){
	for (var i=0; i<alldivs.length; i++){
		$(alldivs[i]).hide(400);
	}
}