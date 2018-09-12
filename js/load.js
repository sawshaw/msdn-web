$(function(){
		$("header").load("header.html",function() {
		});
		$("footer").load("footer.html",function(){
		});
});
function loadHtml(){
	try{
		xmlObj.load(xmldoc); //chrome浏览器在这一行会报错，document对象没有load()方法。
	}catch(e){ //捕捉异常
		//webkit BUG,chrome etc.
		xmlObj = new XMLHttpRequest(); //用AJAX中常见的套路来就可以解决了，不影响IE、FIREFOX的原生加载XML
		xmlObj.overrideMimeType("text/xml");
		xmlObj.open("GET", xmldoc, false);
		xmlObj.send(null);
		xmlResult = xmlObj.responseXML;
		return xmlResult;
	}
	return xmlObj.documentElement;
}