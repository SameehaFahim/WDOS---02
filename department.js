
fetch("department.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        localStorage.setItem("departmentData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("departmentData"));

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
});

document.getElementById("mainT5").innerHTML = data.sections[0].content.intro.mainTitle;
document.getElementById("depPara1").innerHTML = data.sections[1].content.paragraphs;
document.getElementById("depProAreas1").innerHTML = data.sections[2].content.intro.mainTitle;
document.getElementById("depRit").innerHTML = data.sections[3].content.imageSections[0].images[0].title;
document.getElementById("depYala").innerHTML = data.sections[3].content.imageSections[0].images[1].title;
document.getElementById("depNat").innerHTML = data.sections[3].content.imageSections[1].images[0].title;
document.getElementById("depMin").innerHTML = data.sections[3].content.imageSections[1].images[1].title;
document.getElementById("depHik").innerHTML = data.sections[3].content.imageSections[2].images[0].title;
document.getElementById("depMar").innerHTML = data.sections[3].content.imageSections[2].images[1].title;
document.getElementById("depSin").innerHTML = data.sections[3].content.imageSections[3].images[0].title;
document.getElementById("depAdam").innerHTML = data.sections[3].content.imageSections[3].images[1].title;

document.getElementById("depMap").innerHTML = data.sections[4].content.intro.mainTitle;
