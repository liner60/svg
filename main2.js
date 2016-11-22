// JavaScript Document
window.onload=function(){
	var svg1=document.getElementById("svg1");
    function nuomi(xpos,ypos,color){
		 svg1.innerHTML+='<path d="M'+(xpos-30)+' '+(ypos+25)+' q30 -25 60 0 q60 60 10 90 q-40 10 -80 0 q-50 -30 10 -90" style="fill:'+color+'"></path><circle cx="'+(xpos-25)+'" cy="'+(ypos+80)+'" r="6" style="fill:#000"></circle><circle cx="'+(xpos+25)+'" cy="'+(ypos+80)+'" r="6" style="fill:#000"></circle><circle cx="'+(xpos-23)+'" cy="'+(ypos+78)+'" r="2" style="fill:#fff"></circle><circle cx="'+(xpos+27)+'" cy="'+(ypos+78)+'" r="2" style="fill:#fff"></circle><ellipse cx="'+xpos+'" cy="'+(ypos+113)+'" rx="33" ry="7" style="fill:rgba(0,0,0,0.1)"></ellipse><ellipse cx="'+(xpos+10)+'" cy="'+(ypos+25)+'" rx="15" ry="7" style="fill:rgba(255,255,255,0.5);"></ellipse><path d="M'+(xpos-15)+' '+(ypos+82)+' c0 18 30 18 30 0" style="fill:#a826a2"></path><path d="M'+(xpos-9)+' '+(ypos+93)+' q9 -8 18 0 q-9 7 -18 0" style="fill:#e087e5;"></path>';
	}
	nuomi(150,35,"#2ecc71");
	nuomi(300,35,"#95A5A6");
	nuomi(450,35,"#9B59B6");
	nuomi(600,35,"#1ABC9C");
	nuomi(750,35,"#FFFF66");
}