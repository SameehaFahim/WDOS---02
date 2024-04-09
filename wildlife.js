
fetch("wildlife.json")
    .then((response) => response.json())
    .then((data) => {
        if (!localStorage.getItem("wildlifeData")) {
            return
        }
        //local storage
        localStorage.setItem("wildlifeData", JSON.stringify(content));
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
document.getElementById("r").innerText = data.wildlifeLocations[0].description[0].p1;
document.getElementById("rr").innerHTML = data.wildlifeLocations[0].description[0].p2;


document.getElementById("wildNa2").innerHTML = data.wildlifeLocations[1].name;
document.getElementById("s").innerHTML = data.wildlifeLocations[1].description[0].p1;
document.getElementById("ss").innerHTML = data.wildlifeLocations[1].description[0].p2;

document.getElementById("wildNa3").innerHTML = data.wildlifeLocations[2].name;
document.getElementById("t").innerHTML = data.wildlifeLocations[2].description[0].p1;
document.getElementById("tt").innerHTML = data.wildlifeLocations[2].description[0].p2;

document.getElementById("wildNa4").innerHTML = data.wildlifeLocations[3].name;
document.getElementById("u").innerHTML = data.wildlifeLocations[3].description[0].p1;
document.getElementById("uu").innerHTML = data.wildlifeLocations[3].description[0].p2;

document.getElementById("wildNa5").innerHTML = data.wildlifeLocations[4].name;
document.getElementById("v").innerHTML = data.wildlifeLocations[4].description[0].p1;
document.getElementById("vv").innerHTML = data.wildlifeLocations[4].description[0].p2;

document.getElementById("wildNa6").innerHTML = data.wildlifeLocations[5].name;
document.getElementById("w").innerHTML = data.wildlifeLocations[5].description[0].p1;
document.getElementById("ww").innerHTML = data.wildlifeLocations[5].description[0].p2;


const editBtn = document.getElementById("editbtn");
if (!localStorage.getItem("currentUser")) {
    editBtn.classList.add("hiddenBtn");

}
editBtn.addEventListener("click", function () {
    window.open(
        "editor.html",
        "Editor",
        "width=600,height=400"
    )
});