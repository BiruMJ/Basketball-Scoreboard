let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");

let homeCount = 0;
let guestCount = 0;

homePoints.textContent = homeCount;
guestPoints.textContent = guestCount;

function updateScore() {
    homePoints.textContent = homeCount;
    guestPoints.textContent = guestCount;

    // Reset Font Color
    homePoints.style.color = "#F94F6D";
    guestPoints.style.color = "#F94F6D";

    // Highlight Leader
    if(homeCount > guestCount) {
        homePoints.style.color = "limegreen";
    } else if(guestCount > homeCount) {
        guestPoints.style.color = "gold";
    }
}

// HOME SCOREBOARD
function homeIncrementBy1() {
    homeCount += 1;
    updateScore();
}

function homeIncrementBy2() {
    homeCount += 2;
    updateScore();
}

function homeIncrementBy3() {
    homeCount += 3;
    updateScore();
}

// GUEST SCOREBOARD
function guestIncrementBy1() {
    guestCount += 1;
    updateScore();
}

function guestIncrementBy2() {
    guestCount += 2;
    updateScore();
}

function guestIncrementBy3() {
    guestCount += 3;
    updateScore();
}

let resetBtn = document.querySelector(".newgame-btn");

resetBtn.addEventListener("click", function() {
    homeCount = 0;
    guestCount = 0;
    updateScore();
});
