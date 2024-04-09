let currentUser = localStorage.getItem("currentUser");


// Logout
document.getElementById("logoutBtn").addEventListener("click", function () {
    // Clearing the currentUser from local storage
    console.log("log")
     localStorage.removeItem("currentUser");
    // Redirecting to the login page 
    window.location.href = "login.html";
});

if (currentUser == null) {
    // i can do whatever i want
} else {
    //i can do whatever i want
    if (currentUser == "user") {
        document.getElementById("exampleSection").style.display = "none";
    } else {
        function sub(json_path) {

            let code = ``;
            for (let i = 0; i < json_path.length; i++) {
                code += `<li>${json_path[i]}</li>`;
            }
            return code;
        }

        document.getElementById("newsletter_emails").innerHTML = list_generator(subscriptions);

        // Assuming subscriptions is retrieved from local storage and is an array of email addresses
        const subscriptions = JSON.parse(localStorage.getItem("subscriptions"));

        // Check if subscriptions is not null and is an array
        if (subscriptions && Array.isArray(subscriptions)) {
            document.getElementById("exampleList").innerHTML = sub(subscriptions);
        } else {
            // Handle the case where subscriptions is not found or not an array
            console.error("Subscriptions data is missing or invalid.");
        }
    }
}
