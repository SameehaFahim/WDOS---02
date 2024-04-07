
fetch("wildlife.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        localStorage.setItem("wildlifeData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("wildlifeData"));

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
});

document.getElementById("wildNa1").innerHTML = data.wildlifeLocations[0].name;
document.getElementById("wildDes1").innerHTML = data.wildlifeLocations[0].description;

document.getElementById("wildNa2").innerHTML = data.wildlifeLocations[1].name;
document.getElementById("wildDes2").innerHTML = data.wildlifeLocations[1].description;

document.getElementById("wildNa3").innerHTML = data.wildlifeLocations[2].name;
document.getElementById("wildDes3").innerHTML = data.wildlifeLocations[2].description;

document.getElementById("wildNa4").innerHTML = data.wildlifeLocations[3].name;
document.getElementById("wildDes4").innerHTML = data.wildlifeLocations[3].description;

document.getElementById("wildNa5").innerHTML = data.wildlifeLocations[4].name;
document.getElementById("wildDes5").innerHTML = data.wildlifeLocations[4].description;

document.getElementById("wildNa6").innerHTML = data.wildlifeLocations[5].name;
document.getElementById("wildDes6").innerHTML = data.wildlifeLocations[5].description;