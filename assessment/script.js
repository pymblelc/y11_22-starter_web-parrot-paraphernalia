let startCameraBtn = document.getElementById("startCamera");
let stopCameraBtn = document.getElementById("stopCamera");
let takePhotoBtn = document.getElementById("takePhoto");
let myWebcam = document.getElementById("webcam");
let myCanvas = document.getElementById("canvas");
let submitBtn = document.getElementById("submit");
// const snapSoundElement = document.getElementById('snapSound');

let webcam = new Webcam(myWebcam, "user", myCanvas); // is this making a function


startCameraBtn.addEventListener("click", function() {
    webcam.start()
    .then((result) => {
        console.log("webcam started!");
    })
    .catch((error) => {
        console.log("error D:");
    });
})

stopCameraBtn.addEventListener("click", function() {
    webcam.stop();
})

takePhotoBtn.addEventListener("click", function () {
    var picture = webcam.snap(); // what 
    webcam.stop();
  });

  submitBtn.addEventListener("click", function() {
        let blob = new Blob([fileInput.files[0]]);
        ImageAPI.analyseFacesBlob(blob,(data) => {
                console.log(data);
            }
        );
  })





