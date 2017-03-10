var aBack = document.getElementById("aBack");
var timer1 = null;
aBack.onclick=function(){
	clearInterval(timer1)
	timer1 =setInterval(function(){
	    var h = document.body.scrollTop || document.documentElement.scrollTop;
	    var speed = Math.floor(-h/10);
	    if (document.body.scrollTop) {
	    	document.body.scrollTop=h+speed;
	    }else{
	    	document.documentElement.scrollTop=h+speed;
	    }
		if (h===0) {
			clearInterval(timer1);
		}
	},30)
}
window.onscroll=function(){
	var h = document.body.scrollTop || document.documentElement.scrollTop;
	if (h>400) {
		aBack.style.display="block";
	} else{
		aBack.style.display="none";
	}
}