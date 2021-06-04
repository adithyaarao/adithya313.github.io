function scrollheader(){
window.addEventListener("scroll", (event) => {
    scroly = this.scrollY;
    elems = document.getElementsByClassName('hb');
    if(scroly > 100){
    	document.getElementById('header').style.background = "#ccc";
    	for(i=0; i<elems.length; i++){
    		elems[i].style.color = "black";
    		elems[i].style.border = "2px solid black";
    	}
    }
    else{
    	document.getElementById('header').style.background = "black";
    	for(i=0; i<elems.length; i++){
    		elems[i].style.color = "#ccc";
    		elems[i].style.border = "2px solid #ccc";
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
scrollheader();
listenscroll();
