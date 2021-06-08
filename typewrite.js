var s1 = 'Hi,';
var s2 = 'I am Adithya...'; 

var input = ' ';

var s3 = 'I belong to that creamy6not so creamy layer of people who love both physics and programming.';
var s4 = 'For me, Physics is 0';
var s5 = 'But I also love fiddling with coding and have fun...';

var heart = ['&#128512;', '&#128515;', '&#128522;', '&#128541;', '&#128536;', '&#128521;', '&#128538;', '&#128526', '&#128519', '&#129299', '&#129321', '&#128525;','&#128151'];



function buff(i,j){
	if(i==0){
		document.getElementById('head').innerHTML =  input;
		if(j==6){
			return;
		}
		else {
			setTimeout(function() {buff(1,j)}, 550);
		}
	}
	else{
		document.getElementById('head').innerHTML =  input.concat('_');
		if(j==2){
		setTimeout(function() {puts2(0)}, 550);
		}
		if(j==3){
		setTimeout(function() {puts3(0)}, 550);
		}
		if(j==4){
		setTimeout(function() {puts4(0)}, 550);
		}
		if(j==5){
		setTimeout(function() {puts5(0)}, 550);
		}

	}
}


function puts5(i){
	if(i==s5.length){
	setTimeout(function() {buff(0,6)}, 300);
	return;
	}

	input = input.concat(s5.charAt(i));
	document.getElementById('head').innerHTML = input.concat('_');
	setTimeout(function() {puts5(i+1)}, 150*(Math.random() + 0.5));
}

function hearts(i,j){
	document.getElementById('head').innerHTML = input.concat(heart[j]);
	if(j==heart.length-1){
		input = input.concat(heart[j]);
		setTimeout(function(){puts4(i+1);},300);
	}
	else{
		setTimeout(function(){hearts(i,j+1);},200);
	}
}

function puts4(i){
	if(i==s4.length){
		input = input.concat('<br><br>');
		document.getElementById('head').innerHTML =  input.concat('_');
		setTimeout(function() {buff(0,5)}, 300);
		return;
	}

	if(s4.charAt(i) == '0'){
		hearts(i,0);
		return;
	}
	else{
		input = input.concat(s4.charAt(i));
	document.getElementById('head').innerHTML = input.concat('_');
	setTimeout(function() {puts4(i+1)}, 150*(Math.random() + 0.5));
	}
}


function backspace(i,n){
	if(i==0){
		setTimeout(function(){puts3(n);}, 150*(Math.random() + 0.5));
		return;
	}
	input = input.slice(0,-1);
	document.getElementById('head').innerHTML = input.concat('_');
	setTimeout(function() {backspace(i-1,n)}, 150*(Math.random() + 0.5));
}


function puts3(i){
	if(i==s3.length){
		input = input.concat('<br><br>');
		document.getElementById('head').innerHTML =  input.concat('_');
		setTimeout(function() {buff(0,4)}, 300);
		return;
	}

	if(s3.charAt(i) == '6'){
		setTimeout(function(){backspace(6,i+1);},150*(Math.random() + 0.5));
		return;
	}

	input = input.concat(s3.charAt(i));
	document.getElementById('head').innerHTML = input.concat('_');
	setTimeout(function() {puts3(i+1)}, 150*(Math.random() + 0.5));
}



function puts2(i){

	if(i==s2.length){
		input = input.concat('<br><br>');
		setTimeout(function() {buff(0,3);}, 550);
		return;
	}

	input = input.concat(s2.charAt(i));
	document.getElementById('head').innerHTML = input.concat('_');
	setTimeout(function() {puts2(i+1)}, 150*(Math.random() + 0.5));
}




function puts1(i){

	if(i==s1.length){
		input = input.concat('<br>');
		document.getElementById('head').innerHTML =  input.concat('_');
		setTimeout(function() {buff(0,2)}, 300);
		return;
	}

	input = input.concat(s1.charAt(i));
	document.getElementById('head').innerHTML = input.concat('_');
	setTimeout(function() {puts1(i+1)}, 150*(Math.random() + 0.5));
}


function beg(i){
	if(i==0){
		document.getElementById('head').innerHTML = input.concat('_');
		setTimeout(function() {beg(1)}, 550);
	}
	else if(i == 1){
		document.getElementById('head').innerHTML = input;
		setTimeout(function() {beg(2)}, 550);
	}
	else{
		document.getElementById('head').innerHTML = input.concat('_');
		setTimeout(function() {puts1(0)}, 550);
	}
}

window.addEventListener("scroll", (event) => {
    scroly = this.scrollY;
    if(scroly>=100){
    	try{
    		document.getElementById('headtxt').setAttribute('id', 'head');
    		beg(0);
    	}

    	catch(err) {};
    }
    
});

