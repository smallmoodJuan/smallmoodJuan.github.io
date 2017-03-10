window.onload = function(){
//		-----------选项卡-----------
		var li = document.getElementById("menu").querySelectorAll("li");
		var Div = document.getElementById("menu").children;
		var flag=true;
		for(var i=0;i<li.length;i++){
				li[i].index = i;
				li[i].onclick = function(){
					if(this.index==2){
						if(flag){
							Div[3].style.display="block";
							flag=false;
						}else{
							Div[3].style.display="none";
							flag=true;
						}
					}else{
						for(var j=0;j<2;j++){
							li[j].className = "";
							Div[j+1].style.display = "none";
						}
						this.className = "active";
						Div[this.index+1].style.display = "block";
					}
				}
			}
		
//		----------------返回顶部---------------
		var back =document.getElementById("back");
		back.onclick= function(){getIn()};
		var sky=document.getElementById("float");
		function getIn(){
			var timer;
			var ost =document.documentElement.scrollTop ||document.body.scrollTop;
			if(document.documentElement.scrollTop){
				document.documentElement.scrollTop = 0;
			}else{
				document.body.scrollTop = 0;
			}
		}
		window.onscroll=function (){
			if(document.documentElement.scrollTop + document.body.scrollTop>800){
				back.style.display="block";
				sky.style.display="block";
				
			}else{
				back.style.display="none";
				sky.style.display="none";
			}
		}
		
//		----------------点击此处返回------------------
		var Left = document.getElementById("ce").getElementsByClassName("ce_left")[0];
		var Ce = document.getElementById("ce");
		var True = document.getElementById("true");
		Left.onclick = function(){
			if(Ce.style.display == "none"){
				Ce.style.display = "block";
			}else{
				Ce.style.display = "none"
			}
		}
		True.onclick = function(){
			if(Ce.style.display = "block"){
				Ce.style.display = "none";
			}
		}
		
//		----------------小菜单------------------
//		var Ul = document.getElementById("dian");
//		var Sub = document.getElementById("subMenu");
//		Ul.onclick = function(){
//			if(Sub.style.display == "none"){
//				Sub.style.display = "block";
//			}else{
//				Sub.style.display = "none";
//			}
//		}
		
		$(function(){
			$(".ul").on("click",function(){
				$("#subMenu").slideToggle(300);
			});
		});
		
//		---------------搜索----------------
		var Icon = document.getElementsByClassName("icon")[0];
		var sear = document.getElementById("search");
		Icon.onclick = function(){
			if(sear.style.display == "none"){
				sear.style.display = "block";
			}else{
				sear.style.display = "none";
			}
		}
		
//		--------------搜索返回---------------
		var Icon3 = document.getElementsByClassName("icon3")[0];
		var Search = document.getElementById("search");
		Icon3.onclick = function(){
			if(Search.style.display = "block"){
				Search.style.display = "none";
			}
		}
		
		
		
}