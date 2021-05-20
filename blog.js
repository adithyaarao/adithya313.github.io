var text = '<blogs><article>' + 
'<title>Laser Cooled Antimatter To Provide New Insights Into Nature.</title>'+
'<link>https://thehavok.com/laser-cooled-antimatter-new-insights/</link>' + 
'<imgsrc> https://thehavok.com/wp-content/uploads/2021/04/714c6fo8hnl-1.jpg </imgsrc>' + 
'<meta> The rate of technological development of us humans is so huge that we are today able to bend our limitations and explore beyond what is possible. As a breakthrough, we have today cooled down antimatter using lasers and have made it possible to widen our view of the universe. </meta>' + 
'</article>' +
'<article>' + 
'<title>Time: The reason behind the Gravitational Force</title>' + 
'<link>https://thehavok.com/time-the-reason-behind-the-gravitational-force/</link>' + 
'<imgsrc>https://thehavok.com/wp-content/uploads/2021/03/aef0c2bf417a0f0bcbe81faa65b3c0-768x768.jpg</imgsrc>' + 
'<meta>It is a huge misconception that curved space is the reason behind the gravitational force, people entirely forget that time is intricately woven into space and that it does play an important role in gravity. Read how TIME causes the force of gravity and not SPACE entirely.</meta>' +
'</article></blogs>';

var div = document.getElementById('list');
parser = new DOMParser();
xml = parser.parseFromString(text,"text/xml");
titles = xml.getElementsByTagName("title");
links = xml.getElementsByTagName("link");
imgsrcs = xml.getElementsByTagName("imgsrc");
metas = xml.getElementsByTagName("meta");
articles = xml.getElementsByTagName("article");

console.log(articles.length);

for(i=0;i<articles.length;i++){
	div.innerHTML = div.innerHTML + '<div class="blog"><a href="' + 
	links[i].childNodes[0].nodeValue + '"><h2 class="tit">' + 
	titles[i].childNodes[0].nodeValue + '</h2></a><div class="meimg"><div class="meta">' + 
	metas[i].childNodes[0].nodeValue + '</div><div class="image"><img class = "img" src = "' + 
	imgsrcs[i].childNodes[0].nodeValue + '"></div></div></div><br>';
}
