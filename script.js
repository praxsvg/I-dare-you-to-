const dareList = [
    "Describe me in 3 emojis.",
    "Sit forehead to forehead and don't talk for 15 seconds.",
    "Let me mess up your hair and take a photo.",
    "Tell me your dumbest childhood fear.",
    "Stare at me like you’re about to say something — then don’t.",
    "Hug me like you mean it, no jokes.",
    "Try to seduce me using pickup lines from Google.",
    "Blow smoke in my face and make it cinematic.",
    "Give me a piggyback ride for 10 seconds.",
    "Show me your last 5 selfies — no deleting.",
    "Compliment me like you’re trying to flirt — but use bad pickup lines only.",
    "Whisper something and don’t let me repeat it.",
    "Spin around 10 times and try to walk in a straight line.",
    "Do an impression of a celebrity drunk at a party.",
    "Describe your 'ideal type' but pretend it’s not me.",
    "What’s the weirdest dream you’ve had about someone?",
    "Pretend to confess your love for me, but end it stupidly.",
    "Hold eye contact with me until someone laughs.",
    "Swap shirts or hoodies for 15 minutes.",
    "Draw a 'tattoo' on my arm blindfolded.",
    "Act like a dramatic soap opera character for 1 minute.",
    "Make a playlist name that describes our situationship.",
    "Take a fake couple selfie and make it look real.",
    "Imitate the way I act when I’m mad or clingy.",
    "Call someone and tell them we’re engaged — act serious.",
    "Tell me something you’ve never admitted out loud.",
    "Let me sit in your lap for 30 seconds.",
    "Let me rest my head on your chest — just vibes.",
    "Say one thing you’d miss about me if I disappeared.",
    "Play 'truth or dare' rapid fire — 3 rounds, no backing out.",
    "Do a weird couple pose with me for the camera.",
    "Post 'I miss you' on your story — for 5 minutes only.",
    "Act like we’re a couple fighting in public.",
    "Draw a mustache on your face with eyeliner.",
    "Write a note to your future self about tonight.",
    "Let’s try to sing a duet while holding smoke in.",
    "What would you do if we kissed — hypothetically?",
    "Attempt to moonwalk — winner gets a reward.",
    "Create a handshake for us in 30 seconds.",
    "Give me a forehead kiss — no words.",
    "Make up a nickname for me and use it all night.",
    "Show me how you’d pose with your partner.",
    "What would you do if this night never ended?",
    "Prank call someone and say we’re in jail.",
    "Make a dramatic toast about our friendship.",
    "Whisper a fake confession in my ear… make it believable.",
    "Dance with me like it’s our first slow dance.",
    "If you had to date someone in this room (me), what would be your dealbreaker?",
    "Let me draw something small on your face — I swear it’ll be cute.",
    "Let’s slow dance to the dumbest song we can find.",
    "What’s something flirty you’ve done 'by accident'?",
    "Try to guess what I’m thinking — 3 chances.",
    "Say your full name like you’re a villain in a drama.",
    "Make up a fake talent and show it off.",
    "Hug me from behind — don’t let go until I laugh.",
    "Take a deep breath and say the first word that comes to mind about me.",
    "Try to touch your nose with your tongue.",
    "Post an ugly selfie to close friends — right now.",
    "Tell me your most embarrassing school moment.",
    "If I were a stranger at a party, would you hit on me?",
    "Let me wear your chain/cap for a while.",
    "Describe me like I’m your secret celebrity crush.",
    "Say something bold to me — right now.",
    "Let’s do 'never have I ever' — spicy or embarrassing only.",
    "Do a fake drunk confession — don’t say if it’s real.",
    "Pretend your hand is a puppet and tell me a secret.",
    "Pick a song and say what scene it would fit if we were a movie.",
    "Make a cocktail using 3 random things nearby.",
    "Give me a name in your contacts you’d never want me to call.",
    "Tell me one thing you find attractive about me — platonic or not.",
    "What’s the weirdest thing that turns you on?",
    "Speak only in movie quotes for the next 3 rounds.",
    "Act like we’re strangers flirting at a bar.",
    "Attempt a cartwheel or your worst dance move.",
    "Describe our 'vibe' in one word.",
    "Read a romantic line like you’re confessing it to me.",
    "Let me draw a small heart on your wrist or neck.",
    "What’s a lie you’ve told me before?",
    "Do the Titanic pose with me seriously.",
    "Take a slow-mo video of me — but make it romantic.",
    "Sing a song that reminds you of me.",
    "Make a joint playlist we’d name 'us but not really.'",
    "Dance like you’re in a cringe TikTok — 30 seconds.",
    "Blow smoke in my direction like you’re in a movie.",
    "Text a friend saying 'I think I caught feelings.' No clarification.",
    "Play 'this or that' but say the opposite of what you really choose.",
    "Imitate me when I’m high or drunk.",
    "Play air guitar with full passion for 10 seconds.",
    "If you woke up next to me tomorrow, what would you say?",
    "Teach me a weird dance move right now.",
    "What’s the most romantic thing you’ve ever done?",
    "Tell me your guilty pleasure song or show.",
    "Let me look through your old texts for 30 seconds.",
    "Let me rate your past crushes — brutally.",
    "Take a shot with no hands.",
    "Pretend we’re on a reality show and you’re getting eliminated.",
    "Try to make me blush — 1 sentence only.",
    "Compliment me like you’re in love — just once.",
    "Tell me one truth and one lie — I’ll guess which is which.",
    "End the night with one sentence that leaves me overthinking."
];

let currentDareIndex = -1;

document.getElementById('startButton').onclick = startGame;

function startGame() {
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    shuffleDeck();
    nextDare();
}

function flipCard() {
    const card = document.getElementById('card');
    card.classList.toggle('flipped');
}

function nextDare() {
    currentDareIndex = (currentDareIndex + 1) % dareList.length;
    const dareContent = document.getElementById('dareContent');
    if (currentDareIndex < dareList.length) {
        dareContent.innerText = dareList[currentDareIndex];
    } else {
        alert("You've completed all your dares! Generate 50 additional spicier dares?");
        // Placeholder for additional functionality later.
    }
    flipCard();
}

// Swiping functionality
let touchStartX = 0;

const card = document.getElementById('card');

card.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
});

card.addEventListener('touchmove', (event) => {
    const touchEndX = event.touches[0].clientX;
    
    if (touchStartX - touchEndX > 30) { // Swipe left threshold
        nextDare();
    }
});

function shuffleDeck() {
    for (let i = dareList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [dareList[i], dareList[j]] = [dareList[j], dareList[i]];
    }
    currentDareIndex = -1;
    nextDare();
}

function endGame() {
    alert("Thank you for playing! Goodbye.");
    window.location.reload();  // Reloads the page to restart the game
}
