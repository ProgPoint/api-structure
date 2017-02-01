exports.escape=function(str){
	var entityMap = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': '&quot;',
		"'": '&#39;',
		"/": '&#x2F;',
		"'":'&apos;'
	};
	return String(str).replace(/[&<>"'\/]/g, function (s) {
		return entityMap[s];
	});
}
exports.unescape=function(str){
	var entityMap = {
		"&amp;":"&" ,
		"&lt;":"<",
		"&gt;":"<",
		'&quot;':"\"",
		'&#39;':"'",
		'&#x2F;':"/",
		'&apos;':"'",
		'lt;':"<",
		'gt;':">"
	};
	return String(str).replace(/(&amp;|$lt;|lt;|gt;|&gt;|&quot;|&#39;|&#x2F;|&apos;)/g, function (s) {
		return entityMap[s];
	});
}