var sp = document.getElementById("sp");
var div2 = document.getElementsByClassName("div2")[0];
sp.onclick = function (){
	if (div2.style.display == 'none') { 
			div2.style.display = "block"; 
		} else { 
			div2.style.display = "none"; 
		} 
}
div2.onclick = function(){
	div2.style.display = "none"
}
//var b= document.getElementById("b");
//var province = document.getElementById("province");
//b.onclick = function(){
//	if (province.style.display == 'none') { 
//			province.style.display = "block"; 
//		} else { 
//			province.style.display = "none"; 
//		} 
//}
//var icon1 = document.getElementsByClassName("icon5")[0];
//icon1.onclick = function(){
//	province.style.display = "none"
//}

var img2 = document.getElementsByClassName("img2")[0];
var div1 = document.getElementById("div1");
img2.onclick = function(){
	if (div1.style.display == 'none') { 
		div1.style.display = "block"; 
	} else { 
		div1.style.display = "none"; 
	} 
}
var btn = document.getElementById("btn");
btn.onclick = function(){
	div1.style.display = "none"
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
function play(){
	index=num-1;
	if(index==-1){
		index=img.length-1;//超出第一张图片就返回最后一张
	}
	move();//没有对象调用，this指向window
}
//手风琴
var menu = document.getElementById("menu"); 
var ps = menu.getElementsByTagName("p"); 
var uls = menu.getElementsByTagName("ul");
console.log(uls) 
for (var i in ps) { 
	ps[i].id = i; 
	ps[i].onclick = function() { 
		var u = uls[this.id]; 
		if (u.style.display == 'block') { 
			u.style.display = "none"; 
		} else { 
			u.style.display = "block"; 
		} 
	} 
} 
//无缝滚动
window.onload = function(){
	var content1 = document.getElementById("content_two");  
	
	var timer = null;   //定义控制器
	var step = 2;       //步长
	var width = content1.offsetWidth;   //定义宽度：ul的宽度
	
		content1.innerHTML += content1.innerHTML;   //复制图片：变成原来数量的2倍
		content1.style.left = -width+"px";    //距离左边的距离
		content1.style.width = width*2+"px";  //ul的宽度设置为原来的2倍。
	
	function move(){					
		var pos = -(width-=step);		 //设置一个数字，不停增大
		if(pos>0){
			width = content1.offsetWidth/2;		
			content1.style.left = -width+"px";
		}
		content1.style.left = pos+"px";			//ul距离左边的距离跟随数字变化
	}
	
	timer = window.setInterval(move,50);    //每10毫秒执行一次运动
	
	content1.onmouseover = function(){
		clearInterval(timer);
	}
	content1.onmouseout = function(){
		timer = window.setInterval(move,50);
	}
}