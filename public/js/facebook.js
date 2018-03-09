var data = JSON.parse($.ajax({type: "GET", url: "rList", async: false}).responseText);
  

function checkLoginState() {
  FB.login(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480),email', changeUser);
  }
}

function changeUser(response) {

  var username = response.email;

  //case when user exists
  if (data[username] != undefined) {
    window.localStorage.setItem("user", JSON.stringify(data[username]));
  }
  else {
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
  data[username].name = response.name;
  data[username].username = response.email;
  data[username].picture = response.picture.data.url;

  window.localStorage.setItem("user", JSON.stringify(data[username]));
  $.post('wList', data);

	}
  location.href = '/index';


}
