let startCameraBtn = document.getElementById("startCamera");
let takePhotoBtn = document.getElementById("takePhoto");
let myWebcam = document.getElementById("webcam");
let myCanvas = document.getElementById("canvas");
let submitBtn = document.getElementById("submit");
// const snapSoundElement = document.getElementById('snapSound');

let webcam = new Webcam(myWebcam, "user", myCanvas); // is this making a function

takePhotoBtn.addEventListener("click", function () {
  console.log("yep taking photo");
  webcam.snap();
  var picture = webcam.snap();
  
  // canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  // let image_data_url = canvas.toDataURL('image/jpeg');
});

webcam.start()
  .then((result) => {
    console.log("webcam started");
  })
  .catch((error) => {
    console.log("error");
  });

 
