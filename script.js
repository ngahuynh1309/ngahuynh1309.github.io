const myPopup1 = document.getElementById("myPopup1");
const myPopup0 = document.getElementById("myPopup0");
const myPopup2 = document.getElementById("myPopup2");



function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "" || password == "") {
		alert("Username or Password cannot be empty!");

	}
	else if (username == "2022-09-21" && password == "3.1415926535897") {
		myPopup2.style.display = "block";
		myPopup2.addEventListener("click", () => {
			myPopup2.style.display = "none";
		});
	}
	else if (username == "2022-09-21" && password == "2.7182818284590") {
		myPopup1.style.display = "block";
		myPopup1.addEventListener("click", () => {
			myPopup1.style.display = "none";
			window.location.href = "hpbd.html";
		});

	}
	else {
		myPopup0.style.display = "block";
		myPopup0.addEventListener("click", () => {
			myPopup0.style.display = "none";
		});
	}


}