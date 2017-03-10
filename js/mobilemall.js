//province
var sp = document.getElementById("sp");
var province = document.getElementById("province");
sp.onclick = function(){
	if (province.style.display == 'none') { 
		province.style.display = "block"; 
	} else { 
		province.style.display = "none"; 
	} 
}
var icon1 = document.getElementsByClassName("icon5")[0];
icon1.onclick = function(){
	province.style.display = "none"
}
//登录
var L = document.getElementById("L");
var login = document.getElementById("login");
L.onclick = function(){
	if (login.style.display == 'none') { 
		login.style.display = "block"; 
	} else { 
		login.style.display = "none"; 
	} 
}
var icon2 = document.getElementsByClassName("icon6")[0];
icon2.onclick = function(){
	login.style.display = "none"
}
var icon3 = document.getElementsByClassName("icon7")[0];
icon3.onclick = function(){
	login.style.display = "none"
}
//搜索
var span1 = document.getElementById("span1");
var search = document.getElementById("search");
span1.onclick = function(){
	if (search.style.display == 'none') { 
		search.style.display = "block"; 
	} else { 
		search.style.display = "none"; 
	} 
}
var icon = document.getElementsByClassName("icon3")[0];
icon.onclick = function(){
	search.style.display = "none"
}

//轮播
var num=0;  //旧图片的下标
var index;   //新图片的下标
var content=document.getElementById("slider");
var a=document.getElementById("slider").getElementsByTagName("a");
var pic=document.getElementById("pic");
var img=document.getElementById("pic").getElementsByTagName("img");
var timer=setInterval(autoMove,2000);
function autoMove(){
	index=num+1;
	if(index==img.length){
		index=0;//超出最后一张图片就返回第一张
	}
	move();//没有对象调用，this指向window
}
content.onmouseover=function(){
	clearInterval(timer);
}
content.onmouseout=function(){
    timer=setInterval(autoMove,2000);
}
for(var i=0;i<img.length;i++){
	a[i].index=i;//存储对应<a>的下标
	a[i].onmouseover=move; //有对象调用，this指向调用者
}
function move(){
	a[num].className="";
	a[this.index].className="point";
	img[num].className="";
	img[this.index].className="img";
	num=this.index;
}
//function play(){
//	index=num-1;
//	if(index==-1){
//		index=img.length-1;//超出第一张图片就返回最后一张
//	}
//	move();//没有对象调用，this指向window
//}