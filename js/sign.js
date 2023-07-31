let usersArray = [];
if (localStorage.getItem("users") != null) {
    usersArray = JSON.parse(localStorage.getItem("users"));
}
let email = document.getElementById("email");
let password = document.getElementById("password");
let username = document.getElementById("name");
function addUser() {
    document.getElementById("success").classList.replace("visible", "invisible");
    document.getElementById("error").classList.replace("visible", "invisible");
    document.getElementById("empty").classList.replace("visible", "invisible");
    if (username.value == "" || email.value == "" || password.value == "") {
        document.getElementById("empty").classList.replace("invisible", "visible");
        return
    }
    for (let i = 0; i < usersArray.length; i++) {
        if (email.value == usersArray[i].email) {
            document.getElementById("error").classList.replace("invisible", "visible");
            return
        }
    }
    let newUser = {
        name: username.value,
        password: password.value,
        email: email.value
    }
    usersArray.push(newUser)
    localStorage.setItem("users", JSON.stringify(usersArray));
    document.getElementById("success").classList.replace("invisible", "visible");
}