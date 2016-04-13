var currentpos, timer;
function initialize() {
	timer = setInterval("scrollwindow ()", 30);
}
function sc() {
	clearInterval(timer);
}
function scrollwindow() {
	currentpos = document.body.scrollTop;
	window.scroll(0, ++currentpos);
	if (currentpos != document.body.scrollTop)
		sc();
}
document.onmousedown = sc
document.ondblclick = initialize
function getUrlParam1(name) {
	nk = "天天开心，";
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return nk;
}
function getUrlParam3(name) {
	nk = "越来越漂亮( ^_^ )";
	// http://yun.93me.com/ ����ṩPHP��������
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return nk;
}
function getUrlParam2(name) {
	nk = "---------杰二";
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return nk;
}
function ok() {
	var a = document.form1.elements;
	var b = a[0].name + "=" + escape(a[0].value) + "&" + a[1].name + "="
			+ escape(a[1].value) + "&" + a[2].name + "=" + escape(a[2].value);
	var c = window.location.href;
	var d = c.split("?");
	var e = d[0] + "?" + b;
	// http://yun.93me.com/ ����ṩPHP��������
	window.clipboardData.setData('Text', e);
	window.location.href = e;
}
function oCopy(obj) {
	obj.select();
	js = obj.createTextRange();
	js.execCommand("Copy");
	//alert("");
}
// http://yun.93me.com/ ����ṩPHP������
