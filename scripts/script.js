var prv=2,
	shift=0,
	width=window.screen.width,
	height=window.screen.height;
window.onload = function() {
	var dad = document.getElementById("pics"),
		list = dad.getElementsByTagName('div');
	for (var i=0; i<list.length; i++) {
		(function(j){			
			list[j].onclick=function(){
				if(prv!=j){
					list[prv].style.width  = 200+"px";	
					list[prv].style.height = 200+"px";
					list[prv].style.marginTop = 100+"px";
					shift+=240*(prv-j);
					dad.style.left = (shift)+"px";
					list[j].style.width     = 450+"px";	
					list[j].style.height    = 450+"px";
					list[j].style.marginTop = 0+"px";
					prv=j;
				}
				// else {
				// 	list[j].style.marginTop = 0+"px";
				// 	list[j].style.position  = "absolute";
				// 	list[j].style.width     = 800+"px";	
				// 	list[j].style.height    = 600+"px";
				// 	list[j].style.zIndex    = 3;
				// }
			}
		})(i);
	}
}