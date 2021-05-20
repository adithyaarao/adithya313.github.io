function scrollheader(){
window.addEventListener("scroll", (event) => {
    scroly = this.scrollY;
    elems = document.getElementsByClassName('hb');
    if(scroly > 150){
    	document.getElementById('header').style.background = "white";
    	for(i=0; i<elems.length; i++){
    		elems[i].style.color = "black";
    		elems[i].style.border = "2px solid black";
    	}
    }
    else{
    	document.getElementById('header').style.background = "black";
    	for(i=0; i<elems.length; i++){
    		elems[i].style.color = "white";
    		elems[i].style.border = "2px solid white";
    	}
    }

    leftc = document.getElementById('leftc');
    leftc.style.left = 2*scroly - 600 + "px";
    leftc.style.opacity = scroly/600;
});
}

function listenscroll(){
    window.addEventListener("scroll", (event) => {
    scroly = this.scrollY;
    leftc = document.getElementById('leftc');
    leftc.style.left = scroly - 600 + "px";
    leftc.style.opacity = scroly/600;
});
}

function createfluid(){
	var container = document.getElementById('fluidcont');
	var inner = '';
	var init = '<div class = "fluid" style = "height:';
	var end = 'vh;"></div>';
	var h=0;
	for(i=1; i<=10; i++){
		inner = inner + init + (60 + Math.random()*25) + end;
	}
	container.innerHTML = inner;
}
