const selectBtn = document.getElementById("select");
const editBtn = document.getElementById("edit");
selectBtn.addEventListener("click", function () {
    const currentPage = document.getElementById("page").value;
    let jsonEditor = document.getElementById("textarea");
    console.log(currentPage)
    jsonEditor.value = localStorage.getItem(currentPage);


})

editBtn.addEventListener("click", function () {
    const currentPage = document.getElementById("page").value;
    const currentJSON = document.getElementById("textarea").value;
    localStorage.setItem(currentPage, currentJSON);
})