let myURL = document.getElementById("myURL");
let myPhoto = document.getElementById("myPhoto");
let analyseAll = document.getElementById("btnAnalyseAll");
let analyseFaces = document.getElementById("btnAnalyseFace");
let analyseImage = document.getElementById("btnAnalyseImg");
let analyseTags = document.getElementById("btnAnalyseTags");
let myText = document.getElementById("myText");


let imageURL = myPhoto.src;
myText.innerHTML = "<p> ages go here </p>";
myURL.innerHTML = imageURL ; 
// to do: use arrays, arrays of records, loops

// using the AI library

//analyse all button
analyseAll.addEventListener("click", function() {
    ImageAPI.analyseFaces(imageURL, function (data) {
        console.log(data);
    })
})

//analyse faces button
analyseFaces.addEventListener("click", function() {
    ImageAPI.analyseFaces(imageURL, function (data) {

        for(let i=0; i < data.length; i++) {
            let age = data[i].faceAttributes.age;
            myText.innerHTML += "face " + (i + 1) + ": " + age + "<br>";
        }
    })
})

//analyse images button
analyseImage.addEventListener("click", function() {
    ImageAPI.analyseImage(imageURL, function (data) {
        console.log(data);
        // myText.innerHTML = data[1].faceAttributes.age;

    })
})

//list tags button
analyseTags.addEventListener("click", function() {
    ImageAPI.analyseImage(imageURL, function (data) {
        let tags = data.description.tags;
        myText.innerHTML = "here is what i see: " + tags;
        // for(let i=0; i < data.length; i++) {
        //     let tags = data[i].description.tags;
        //     myText.innerHTML += "here is what i see: " + tags;
        // }
    })
})

var faces;
faces = [
    {
    // "age": data[0].faceAttributes.age,
    "gender": 1,
    "happiness": 1,
    },
    {
    // "age": data[1].faceAttributes.age,
    "gender": 1,
    "happiness": 1,
    }
]

// faces.push allows you to add more objects into the variable
// faces.push(
//     {
//     "age": 12,
//     "gender:" "",
//     "happiness": 0.4
//     }
// )

// put data collected from APIs into a variable which is an array of records with a function so that it doesn't parse from them every time. instead lets us store it and call it at any point just locally 

// Input requirements:

// Supported image formats: JPEG, PNG, GIF, BMP.
// Image file size must be less than 4MB.
// Image dimensions should be greater than 50 x 50.