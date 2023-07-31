let usersArray = [];
if (localStorage.getItem("users") != null) {
    usersArray = JSON.parse(localStorage.getItem("users"));
}
let email = document.getElementById("email");
let password = document.getElementById("password");
function login() {
    if (email.value == "" || password.value == "") {
        document.getElementById("empty").classList.replace("invisible", "visible");
        return
    }
    for (let i = 0; i < usersArray.length; i++) {
        if (email.value == usersArray[i].email &&
            password.value == usersArray[i].password) {
            window.location.href = "home.html"
            return
        }
        else {
            console.log("not");
            document.getElementById("empty").classList.replace("visible", "invisible");
            document.getElementById("error").classList.replace("invisible", "visible");
        }
    }
}