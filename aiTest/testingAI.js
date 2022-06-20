let analysePhoto = document.getElementById("myPhoto");
let analyseButton = document.getElementById("btnAnalyse");
let analyseAllButton = document.getElementById("btnAnalyseAll");
let textResult = document.getElementById("myText");

let imageURL = analysePhoto.src;
textResult.innerHTML = "<p> ages go here </p>";

// using the AI library

analyseAllButton.addEventListener("click", function() {
    ImageAPI.analyseFaces(imageURL, function (data) {
        console.log(data);
    })
})

analyseButton.addEventListener("click", function() {
    ImageAPI.analyseFaces(imageURL, function (data) {
        textResult.innerHTML = (data[0].faceAttributes.age);
        for(let i=0; i < data.length; i++) {
            let age = data[i].faceAttributes.age;
            textResult.innerHTML = "<p> age, from left to right </p>;";
        }
    })
})



//but with a for loop, so that it will repeat for each person without writing 
// everything or needing to know how many ppl there are
// for( initial  i, condition, how much you want i to change every loop)