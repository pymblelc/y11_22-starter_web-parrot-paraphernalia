// none of this works. lajsdklfjlajsdlfjasdjfa
let button = document.getElementById("btnMaths");
let div = document.getElementById("subjectDescText");
let projectsURL = document.getElementById("btnProjects");


button.addEventListener(
    "click", function () {
        div.innerHTML = "maths is pretty cool";
        button.style.backgroundColor = "grey";
    }
)



projectsURL.addEventListener(
    "click", function () {
        window.location.href = "aiTest/testingAI.html";
    }
)
