'use strict';

var data;


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	if (window.localStorage.getItem('user')) {
		location.href = 'indexB'; 
	}
	$("#signinbutton").click(loginClick);


}

function loginClick(e) {
	e.preventDefault();
	var data = JSON.parse($.ajax({type: "GET", url: "rList", async: false}).responseText);
	
	var username = document.getElementById('nameinput').value;
	var pw = document.getElementById('pwinput').value;
	if (username == '' || pw == '') {
		alert('Please enter both your username and password.'); 
		return; 
	}
	if (data[username] != undefined) {
			if (data[username].password != pw) {
				alert('Wrong password. Please try again.'); 
				return; 
			}
	    window.localStorage.setItem("user", JSON.stringify(data[username]));
	 }
	 else {
	 
		alert('User does not exist! '); 
		return; 
	}
	location.href = 'indexB'; 
}
		

