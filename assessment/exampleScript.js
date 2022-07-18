document.getElementById("submit").addEventListener( // <button id="submit">Submit</button>
    "click",
    function () {
        let fileInput = document.getElementById("upload"); // <input type="file" id="upload">
        let blob = new Blob([fileInput.files[0]]);
        ImageAPI.analyseFacesBlob(
            blob,
            function (data) {
                console.log(data);
            }
        );
    }
);