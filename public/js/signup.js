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
		location.href = 'index'; 
	}
	$("#signinbutton").click(signupClick);

	// $("#fb-custom").click( function (e) {
 //    	$("#fbbutton").performClick();
 //    	console.log("In Alt");
 //    });

}

function signupClick(e) {
	e.preventDefault();

	var data = JSON.parse($.ajax({type: "GET", url: "rList", async: false}).responseText);
	
	var username = document.getElementById('username').value;
	var pw = document.getElementById('pw').value;
	var cpw = document.getElementById('cpw').value;
	var fn = document.getElementById('fullname').value;
	var phone = document.getElementById('phone').value;
	if (username == '' || pw == '' || cpw == '' || fn == '' || phone == '') {
		alert('Fill in all blanks'); 
		return; 
	}
	if (data[username] != undefined) {
		alert('This username has been used. Please try another.'); 
		return; 
	 }
	 if (pw != cpw) {
		alert('Passwords do not match. Please make sure you enter the right passwords.'); 
		return; 
	 }
 
		var jsonNew =  {
		"name":"Rick Ord",
		"username":"test123",
		"password":"123456",
		"phone":"",
		"picture":"http://jacobsschool.ucsd.edu/faculty/images/teacherawards/RickOrd.jpg",
	
		"recording": 
			[
			],
		

		"family":
			[
			],
		

   		"routine":
      		[ {"time":"06:00 PM","repeat":"daily","id":"0","on":false}
      		]
	};

	data[username] = jsonNew;
	data[username].name = fn;
	data[username].username = username;
	data[username].phone = phone;
	data[username].password = pw;
	data[username].routine = [];

	window.localStorage.setItem("user", JSON.stringify(data[username]));
	$.post('wList', data);

	location.href = 'indexB'; 
}
		

