function scrollheader(){
window.addEventListener("scroll", (event) => {
    scroly = this.scrollY;
    elems = document.getElementsByClassName('hb');
    if(scroly > 100){
    	document.getElementById('header').style.background = "#f5f5f5";
    	for(i=0; i<elems.length; i++){
    		elems[i].style.color = "black";
    		elems[i].style.border = "2px solid black";
    	}
    }
    else{
    	document.getElementById('header').style.background = "transparent";
    	for(i=0; i<elems.length; i++){
    		elems[i].style.color = "#f5f5f5";
    		elems[i].style.border = "2px solid #f5f5f5";
    	}
    }

   
});
}

function listenscroll(){
    window.addEventListener("scroll", (event) => {
    scroly = this.scrollY;
    txt = document.getElementById("fluidtxt");
    txt.style.top = -scroly/1.75 -10 + "px";
    txt.style.opacity = 1.2- scroly/100;
});

}
scrollheader();
listenscroll();