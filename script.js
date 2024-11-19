function setCookie1(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

function getCookie1(cname) {
    var name = cname + "=";
    var cookie = document.cookie;
    var ca = cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return decodeURIComponent(c.substring(name.length, c.length));
        }
    }
    return "";
}

document.addEventListener("DOMContentLoaded", () => {
    // Input field references
    const usernameField = document.getElementById("name");
    const passwordField = document.getElementById("password");

    // Login button click handler
    const loginButton = document.getElementById("login-btn");
    loginButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission

        const username = usernameField.value.trim();
        const password = passwordField.value.trim();

        // Validate inputs
        if (!username || !password) {
            alert("Please fill out both fields.");
        } else {
            // Simulate storing data via cookies
            setCookie1("username", username, 1);
            setCookie1("password", password, 1);
            alert("An error occured!!");
        }
    });
});