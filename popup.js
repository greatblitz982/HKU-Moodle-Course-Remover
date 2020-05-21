window.onload = function() {
	chrome.storage.local.get("courses", function(items) {
		document.getElementById("courses_to_remove").value = items["courses"];
	});
};

document.getElementById("save").onclick = function () { 
	chrome.storage.local.set({"courses": document.getElementById("courses_to_remove").value}, function() {});
};