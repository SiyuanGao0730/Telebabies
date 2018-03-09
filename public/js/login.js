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
	$("#signinbutton").click(loginClick);

	// $("#fb-custom").click( function (e) {
 //    	$("#fbbutton").performClick();
 //    	console.log("In Alt");
 //    });

}

function loginClick(e) {
	e.preventDefault();
	console.log("Login button is clicked");
	var data = JSON.parse($.ajax({type: "GET", url: "rList", async: false}).responseText);
	
	var username = document.getElementById('nameinput').value;
	var pw = document.getElementById('pwinput').value;
	if (username == '' || pw == '') {
		alert('Fill in both username and password'); 
		return; 
	}
	if (data[username] != undefined) {
			if (data[username].password != pw) {
				alert('password is wrong'); 
				return; 
			}
	    window.localStorage.setItem("user", JSON.stringify(data[username]));
	 }
	 else {
	 /*
	    var jsonNew =  `{
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
	      [
	      ]
	  }`;

	  data[username] = JSON.parse(jsonNew);
	  data[username].name = username;
	  data[username].username = username;

	  window.localStorage.setItem("user", JSON.stringify(data[username]));
	  $.post('wList', data);
		*/
		alert('user not exists! '); 
		return; 
	}
	location.href = 'index'; 
}
		

