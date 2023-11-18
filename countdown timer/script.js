const endDate = "25 Dec 2023 12:00 Am";

document.getElementById("end_date").innerText = endDate;
const input = document.querySelectorAll('input');

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    let days = (Math.floor(diff / 3600 / 24));
    input[0].value = days;
    let hours = Math.floor((diff / 3600) % 24);
    input[1].value = hours;
    let minutes = Math.floor((diff / 60) % 60);
    input[2].value = minutes;
    let seconds = Math.floor((diff) % 60);
    input[3].value = seconds;
    
}
clock();
setInterval(() => {
    clock()
}, 1000);