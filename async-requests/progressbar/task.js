const loadRequest = new XMLHttpRequest();
const fileInput = document.getElementById("file");
const formData = new FormData();
formData.append('file', fileInput.files[0]);


loadRequest.upload.onprogress = function(event) {
        console.log(event.loaded + ' / ' + event.total);
}

loadRequest.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
loadRequest.send(formData);