
fetch("index.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        localStorage.setItem("indexData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("indexData"));

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
});

document.getElementById("mainT1").innerHTML = data.imageSection.heading;
document.getElementById("indMp1").innerHTML = data.imageSection.heading2;

document.getElementById("indHed1").innerHTML = data.subSections[0].title;
document.getElementById("indCon1").innerHTML = data.subSections[0].content;

document.getElementById("indHed2").innerHTML = data.subSections[1].title;
document.getElementById("indCon2").innerHTML = data.subSections[1].content;

document.getElementById("indHed3").innerHTML = data.subSections[2].title;
document.getElementById("indCon3").innerHTML = data.subSections[2].content;

document.getElementById("indHed4").innerHTML = data.subSections[3].title;
document.getElementById("indCon4").innerHTML = data.subSections[3].content;

document.getElementById("indCon5").innerHTML = data.endSection.content;

document.getElementById("indProtectedAreas").innerHTML = data.protectedAreas.title;
document.getElementById("indProtectedAreas1").innerHTML = data.protectedAreas.content;

document.getElementById("indProtectedSpecies").innerHTML = data.protectedSpecies.title;
document.getElementById("indProtectedSpecies1").innerHTML = data.protectedSpecies.content;

document.getElementById("indLatestNews").innerHTML = data.latestNews.title;
document.getElementById("indLatestNews1").innerHTML = data.latestNews.content;



