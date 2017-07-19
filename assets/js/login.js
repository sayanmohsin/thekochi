document.getElementById("loginbtn").addEventListener('click',login,false);
function login(){
	var url = path+"/userLoginProcess";
	console.log(url);
	var username = document.getElementById("login-name").value;
	// alert(username);
	var password = document.getElementById("login-pass").value;
	// alert(password);
// $.post(url,{username: username, password: password});
// };
	$.post(url,
	{
		username: username,
		password: password
	},
	function(response){
			// here the response is in html
			// Replace the html with the new response
			 $("html").html(response);
	});
}
