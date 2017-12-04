$(function(){
	
chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
	var urlParse=tabURL.substring(32,43);
    chrome.tabs.create({'url':'https://img.youtube.com/vi/'+urlParse+'/maxresdefault.jpg'});
});
});
