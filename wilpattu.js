fetch("wilpattu.json")
    .then((response) => response.json())
    .then((data) => {
        if (localStorage.getItem("wilpattuData")) {
            return
        }
        //local storage
        localStorage.setItem("wilpattuData", JSON.stringify(content));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("wilpattuData"));

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
});

document.getElementById("wilTit1").innerHTML = data.main.sections[0].title;
document.getElementById("wilTit2").innerHTML = data.main.sections[1].sections[0].title;
document.getElementById("wilConp1").innerHTML = data.main.sections[1].sections[1].content[0].p1;
document.getElementById("wilConp2").innerHTML = data.main.sections[1].sections[1].content[0].p2;
document.getElementById("wilConp3").innerHTML = data.main.sections[1].sections[1].content[0].p3;

document.getElementById("wilHot").innerHTML = data.main.sections[2].sections[0].sections[0].title;
document.getElementById("wilHotcon").innerHTML = data.main.sections[2].sections[0].sections[1].content[0].p1;
document.getElementById("wilHotcon1").innerHTML = data.main.sections[2].sections[0].sections[1].content[0].p2;

document.getElementById("wilHotconp1").innerHTML = data.main.sections[3].sections[0].sections[0].title;
document.getElementById("wilHotconp2").innerHTML = data.main.sections[3].sections[0].sections[1].content[0].p1;
document.getElementById("wilHotconp3").innerHTML = data.main.sections[3].sections[0].sections[1].content[0].p2;
document.getElementById("wilHotconp4").innerHTML = data.main.sections[3].sections[0].sections[1].content[0].p3;

document.getElementById("wilHotcon2").innerHTML = data.main.sections[4].sections[0].title;


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