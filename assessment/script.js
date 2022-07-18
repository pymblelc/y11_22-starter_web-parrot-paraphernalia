let startCameraBtn = document.getElementById("startCamera");
let stopCameraBtn = document.getElementById("stopCamera");
let takePhotoBtn = document.getElementById("takePhoto");
let myWebcam = document.getElementById("webcam");
let myCanvas = document.getElementById("canvas");
let submitBtn = document.getElementById("submit");
let retakeBtn = document.getElementById("retake");
let canvasCtx = myCanvas.getContext("2d"); // this turns the 2d canvas image into something that can be analysed, aka a 'context'
// let snapSoundElement = document.getElementById('snapSound');

let webcamClass = new Webcam(myWebcam, "user", myCanvas); // class is like a function but SPECIAL


startCameraBtn.addEventListener("click", function() {
    webcamClass.start()
    .then((result) => {
        console.log("webcam started!");
    })
    .catch((error) => {
        console.log("error sadge");
    });
})

stopCameraBtn.addEventListener("click", function() {
    webcamClass.stop();
})

takePhotoBtn.addEventListener("click", function () {
    var picture = webcamClass.snap(); //what. why is it a variable
    webcamClass.stop();
  });

retakeBtn.addEventListener("click", function() {
    webcamClass.start();
    ctx.clearRect(0,0,canvas.width,canvas.height);
})
  // time to actually send this info to the api
  // canvas -> getcontext ('canvasCtx') -> blob -> api
submitBtn.addEventListener("click", function() {
    myCanvas.toBlob(function(blob) {
        console.log("blob-ified...")
        ImageAPI.analyseImageBlob(blob, (data) => {
          console.log(data);
          let tags = data.description.tags;
          tag
        })
    })
})


// 