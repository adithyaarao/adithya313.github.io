var txt = '';

var s1 = 'Hi,';
var s2 = 'I am Adithya...'; 

var txt2 = ''

var s3 = 'I belong to that creamy6not so creamy layer of people who love both physics and programming.';
var s4 = 'For me, Physics is 0';
var s5 = 'But again, I love fiddling with programming and have fun...';

var heart = '&hearts;'

function end2(i){
	if(i==0){
		document.getElementById('para').innerHTML =  txt2;
		setTimeout(function() {end2(1)}, 550);
	}
	else if(i==1){
		document.getElementById('para').innerHTML =  txt2.concat('&vert;');
		setTimeout(function() {end2(2)}, 550);
	}
	else{
		document.getElementById('para').innerHTML =  txt2;
		document.body.style.overflowY = 'visible';
		document.getElementById("skip").remove();
	}
}

function puts5(i){
	if(i==s5.length){
		setTimeout(function() {end2(0);}, 550);
		return;
	}

	txt2 = txt2.concat(s5.charAt(i));
	document.getElementById('para').innerHTML = txt2.concat('&vert;');
	setTimeout(function() {puts5(i+1)}, 150*(Math.random() + 0.5));
}

function buff4(i){
	if(i==0){
		document.getElementById('para').innerHTML =  txt2;
		setTimeout(function() {buff4(1)}, 550);
	}
	else{
		document.getElementById('para').innerHTML =  txt2.concat('&vert;');
		setTimeout(function() {puts5(0)}, 550);
	}
}

function puts4(i){
	if(i==s4.length){
		txt2 = txt2.concat('<br>');
		document.getElementById('para').innerHTML =  txt2.concat('&vert;');
		setTimeout(function() {buff4(0)}, 300);
		return;
	}

	if(s4.charAt(i) == '0'){
		txt2 = txt2.concat(heart);

	}
	else{
		txt2 = txt2.concat(s4.charAt(i));
	}
	document.getElementById('para').innerHTML = txt2.concat('&vert;');
	setTimeout(function() {puts4(i+1)}, 150*(Math.random() + 0.5));
}

function buff3(i){
	if(i==0){
		document.getElementById('para').innerHTML =  txt2;
		setTimeout(function() {buff3(1)}, 550);
	}
	else{
		document.getElementById('para').innerHTML =  txt2.concat('&vert;');
		setTimeout(function() {puts4(0)}, 550);
	}
}


function backspace(i,n){
	if(i==0){
		setTimeout(function(){puts3(n);}, 150*(Math.random() + 0.5));
		return;
	}
	txt2 = txt2.slice(0,-1);
	document.getElementById('para').innerHTML = txt2.concat('&vert;');
	setTimeout(function() {backspace(i-1,n)}, 150*(Math.random() + 0.5));
}


function puts3(i){
	if(i==s3.length){
		txt2 = txt2.concat('<br>');
		document.getElementById('para').innerHTML =  txt2.concat('&vert;');
		setTimeout(function() {buff3(0)}, 300);
		return;
	}

	if(s3.charAt(i) == '6'){
		setTimeout(function(){backspace(6,i+1);},150*(Math.random() + 0.5));
		return;
	}

	txt2 = txt2.concat(s3.charAt(i));
	document.getElementById('para').innerHTML = txt2.concat('&vert;');
	setTimeout(function() {puts3(i+1)}, 150*(Math.random() + 0.5));
}

function beg2(i){
	if(i==0){
		document.getElementById('para').innerHTML = txt2.concat('&vert;');
		setTimeout(function() {beg2(1)}, 550);
	}
	else if(i == 1){
		document.getElementById('para').innerHTML = txt2;
		setTimeout(function() {beg2(2)}, 550);
	}
	else{
		document.getElementById('para').innerHTML = txt2.concat('&vert;');
		setTimeout(function() {puts3(0)}, 550);
	}


}


function scroll(){
	document.getElementById( 'middiv' ).scrollIntoView();
	setTimeout(function() {beg2(0);}, 250);
}


function end(i){
	if(i==0){
		document.getElementById('head').innerHTML =  txt;
		setTimeout(function() {end(1)}, 550);
	}
	else if(i==1){
		document.getElementById('head').innerHTML =  txt.concat('&vert;');
		setTimeout(function() {end(2)}, 550);
	}
	else{
		document.getElementById('head').innerHTML =  txt;
		setTimeout(function() {scroll()}, 550);
	}
}

function puts2(i){

	if(i==s2.length){
		setTimeout(function() {end(0);}, 550);
		return;
	}

	txt = txt.concat(s2.charAt(i));
	document.getElementById('head').innerHTML = txt.concat('&vert;');
	setTimeout(function() {puts2(i+1)}, 150*(Math.random() + 0.5));
}

function buff(i){
	if(i==0){
		document.getElementById('head').innerHTML =  txt;
		setTimeout(function() {buff(1)}, 550);
	}
	else{
		document.getElementById('head').innerHTML =  txt.concat('&vert;');
		setTimeout(function() {puts2(0)}, 550);
	}
}

function puts1(i){

	if(i==s1.length){
		txt = txt.concat('<br>');
		document.getElementById('head').innerHTML =  txt.concat('&vert;');
		setTimeout(function() {buff(0)}, 300);
		return;
	}

	txt = txt.concat(s1.charAt(i));
	document.getElementById('head').innerHTML = txt.concat('&vert;');
	setTimeout(function() {puts1(i+1)}, 150*(Math.random() + 0.5));
}

function beg(i){
	if(i==0){
		document.getElementById('top').scrollIntoView();
		document.getElementById('head').innerHTML = txt.concat('&vert;');
		setTimeout(function() {beg(1)}, 550);
	}
	else if(i == 1){
		document.getElementById('head').innerHTML = txt;
		setTimeout(function() {beg(2)}, 550);
	}
	else{
		document.getElementById('head').innerHTML = txt.concat('&vert;');
		setTimeout(function() {puts1(0)}, 550);
	}


}

 setTimeout(function() {beg(0);}, 500);

/*var btn = document.getElementById("skip");

btn.addEventListener("mouseover", function() {
  this.textContent = "Skip";
})
btn.addEventListener("mouseout", function() {
  this.textContent = ">";
})*/

function skip(){
	document.getElementById("head").id = "heads";
	document.getElementById("para").id = "paras";
	var br = '<br>'
	document.getElementById("heads").innerHTML = s1.concat(br.concat(s2));
	document.getElementById('paras').innerHTML = 'I belong to that not so creamy layer of people who love both physics and programming.<br>For me, Physics is &hearts; <br>But again, I love fiddling with programming and have fun...';
	document.body.style.overflowY = 'visible';
	document.getElementById("skip").remove();
}
