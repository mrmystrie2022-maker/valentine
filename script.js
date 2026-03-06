const noButton = document.getElementById('no-btn');
const yesButton = document.getElementById('yes-btn');

// The sequence of phrases when they click "No"
const noPhrases = [
    "No",
    "Are you positive? 🤨",
    "Chlo please... 🥺",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "Please??? 😭",
    "Don't do this to me...",
    "Last chance!! 😡"
];

let clickCount = 0;

noButton.addEventListener('click', () => {
    clickCount++;
    
    // Change the text of the No button
    if (clickCount < noPhrases.length) {
        noButton.innerText = noPhrases[clickCount];
    } else {
        noButton.innerText = "Okay, you're breaking my heart 💔";
    }

    // Make the Yes button grow bigger
    const currentYesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const currentYesPadding = parseFloat(window.getComputedStyle(yesButton).padding);
    
    yesButton.style.fontSize = `${currentYesSize * 1.4}px`;
    yesButton.style.padding = `${currentYesPadding * 1.4}px`;

    // Make the No button shrink slightly
    const currentNoSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    noButton.style.fontSize = `${currentNoSize * 0.9}px`;
});