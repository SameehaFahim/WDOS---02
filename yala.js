fetch("yala.json")
    .then((response) => response.json())
    .then((data) => {
        if (localStorage.getItem("yalaData")) {
            return
        }
        //local storage
        localStorage.setItem("yalaData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("yalaData"));

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
});

document.getElementById("yalaTit1").innerHTML = data.main.sections[0].title;
document.getElementById("yalaTit2").innerHTML = data.main.sections[1].sections[0].title;
document.getElementById("yalaConp1").innerHTML = data.main.sections[1].sections[1].content[0].p1;
document.getElementById("yalaConp2").innerHTML = data.main.sections[1].sections[1].content[0].p2;

document.getElementById("yalaHot").innerHTML = data.main.sections[2].sections[0].sections[0].title;
document.getElementById("yalaHotcon").innerHTML = data.main.sections[2].sections[0].sections[2].content[0].p1;
document.getElementById("yalaHotcon1").innerHTML = data.main.sections[2].sections[0].sections[2].content[0].p2;

document.getElementById("yalaHotconp1").innerHTML = data.main.sections[3].sections[0].sections[0].title;
document.getElementById("yalaHotconp2").innerHTML = data.main.sections[3].sections[0].sections[2].content[0].p1;
document.getElementById("yalaHotconp3").innerHTML = data.main.sections[3].sections[0].sections[2].content[0].p2;


document.getElementById("yalaHotcon2").innerHTML = data.main.sections[4].sections[0].title;

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