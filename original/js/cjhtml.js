$(function() {
	var j =3;
	$("#pusa").append('<input type="text" class="abc1 input-small"><input type="text" class="abc2 input-small"><input type="text" class="abc3 input-small">');
	$("#addin").click(function() {
		if(j +=1){
			if(j < 10){	
			$('<input type="text" class="abc'+j+' input-small">').appendTo("#pusa");
			}else {
		
			}
		}
	});
 
	$("#b1").click(function() {
	abss=$(".abc1").val().length;
		if(abss!=0){	
		rearry();
			}
		reattr1();		
		result();		
	});
  
	function reattr1(){
		var vals= $("#at1").val();
		var vala = $("#val").val();
		$("#at2").html(vals);
		$("#at2 *").removeAttr(vala);
	};
	navs = new Array();
	function rearry(){
		var inputs = $("#pusa input").length;			
		for ( var s=0; s<inputs;s++) {
			var vaa=$(".abc"+(s +1)).val();	
			navs[s]="#at2 "+vaa;
		}
	};
	
	function result() {
		for ( var i = 0; i < navs.length; i++)
		{ 
			if(navs[i]!=="#at2 "+"") {       
			$( navs[i] ).each( function (){  
			var xx=$(this).html();
			$(this).replaceWith(xx);
			}) ;
		}
	}
	
	var stra = $("#at2").html(); 
		$("#rul").text(stra).addClass("oks");
		$("#copys").removeAttr("disabled");	  
	};
});
	


function copyVal()
{
	var Val=document.getElementById("rul");
	Val.select(); // 選擇對象
	document.execCommand("Copy"); // 執行瀏覽器複製命令
	alert("Copy completed");
}