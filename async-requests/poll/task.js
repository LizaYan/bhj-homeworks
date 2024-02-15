const pollRequest = new XMLHttpRequest();
pollRequest.addEventListener( "readystatechange", showPoll);
function showPoll() {
    const poll = document.getElementsByClassName("poll"); 
    if (pollRequest.readyState === pollRequest.DONE) {
        poll[0].firstElementChild.innerHTML = JSON.parse(pollRequest.response).data.title;
        for (let i = 0; i < JSON.parse(pollRequest.response).data.answers.length; i++) {
            poll[0].lastElementChild.insertAdjacentHTML("beforeEnd", "<button class='poll__answer'></button>");
            const answers = document.getElementsByClassName("poll__answer");
            answers[i].innerHTML = JSON.parse(pollRequest.response).data.answers[i];
            answers[i].addEventListener("click", () => alert("Спасибо, ваш голос засчитан!"))
        }
    }
  
}
    
pollRequest.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
pollRequest.send();