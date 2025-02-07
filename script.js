const messages = [
    "Kamu yakin!?",
    "Benerann??",
    "benar benar benar yakinnn?",
    "jangan please...",
    "Pikirin lagi dongg!",
    "kalo kamu bilang tidak aku sedih lho",
    "Beneran sedihhhh......",
    "Benar benar benar sedih",
    "Ok fine, I will stop asking...",
    "Becanda beb, teken yes dongg❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes.html";
}