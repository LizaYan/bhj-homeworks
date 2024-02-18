const loadRequest = new XMLHttpRequest();
const form = document.getElementsByTagName("form");
const progress = document.getElementById("progress");
form[0].addEventListener("submit", submitFile);

function submitFile(event) {
    event.preventDefault(); 
    const formData = new FormData();
    const fileInput = document.getElementById("file");
    formData.append('file', fileInput.files[0]);
    loadRequest.upload.onprogress = function(event) {
        a = Number(event.loaded) / Number(event.total / 1000);
        let intervalId = setInterval(() => progress.value = a, 50);
    } 

    loadRequest.open("POST", "https://students.netoservices.ru/nestjs-backend/upload", true);
    loadRequest.send(formData);
   
}




