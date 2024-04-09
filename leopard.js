
fetch("leopard.json")
    .then((response) => response.json())
    .then((data) => {
        if (localStorage.getItem("loepardData")) {
            return
        }
        //local storage
        localStorage.setItem("leopardData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("leopardData"));

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
});

document.getElementById("leoVen1").innerHTML = data.main_sections[0].title;
document.getElementById("leoYala1").innerHTML = data.main_sections[0].venues[0].name;
document.getElementById("leoYala2").innerHTML = data.main_sections[0].venues[0].description;
document.getElementById("leoHor1").innerHTML = data.main_sections[0].venues[1].name;
document.getElementById("leoHor2").innerHTML = data.main_sections[0].venues[1].description;
document.getElementById("leoKum1").innerHTML = data.main_sections[0].venues[2].name;
document.getElementById("leoKum2").innerHTML = data.main_sections[0].venues[2].description;
document.getElementById("leoWil1").innerHTML = data.main_sections[0].venues[3].name;
document.getElementById("leoWil2").innerHTML = data.main_sections[0].venues[3].description;
document.getElementById("leoThr").innerHTML = data.main_sections[1].title;
document.getElementById("leoTit1").innerHTML = data.main_sections[1].threats[0].title;
document.getElementById("leoDes1").innerHTML = data.main_sections[1].threats[0].description;
document.getElementById("leoTit2").innerHTML = data.main_sections[1].threats[1].title;
document.getElementById("leoDes2").innerHTML = data.main_sections[1].threats[1].description;

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