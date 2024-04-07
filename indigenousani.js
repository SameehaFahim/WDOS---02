
fetch("indigenousani.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        localStorage.setItem("indigenousaniData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("indigenousaniData"));

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
});

document.getElementById("aniTit1").innerHTML = data.sections[0].title;
document.getElementById("aniCon1").innerHTML = data.sections[0].content[0].p1;
document.getElementById("aniCon2").innerHTML = data.sections[0].content[0].p2;
document.getElementById("aniCon3").innerHTML = data.sections[0].content[0].p3;
document.getElementById("aniCon4").innerHTML = data.sections[0].content[0].p4;

document.getElementById("aniTit2").innerHTML = data.sections[1].title;
document.getElementById("aniTitSub").innerHTML = data.sections[1].sub_section.title;
document.getElementById("aniTitCon1").innerHTML = data.sections[1].sub_section.content[0].p1;
document.getElementById("aniTitCon2").innerHTML = data.sections[1].sub_section.content[0].p2;