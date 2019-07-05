
window.onscroll = function(){
	myFunction()
}

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction(){
	if(window.pageYOffset > sticky){
		header.classList.add("sticky");
	}else{
		header.classList.remove("sticky");
	}
}



window.onscroll = function(){
	scrollFunction()
}

function scrollFunction(){
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		document.getElementById("myHeader2").style.fontSize = "30px";
	}else{
		document.getElementById("myHeader2").style.fontSize = "90px";
	}
}
