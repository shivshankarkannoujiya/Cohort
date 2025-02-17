function chnageBackgroundBlack() {
    document.body.style.backgroundColor = "#1a1a1a"
}

function chnageBackgroundWhite() {
    document.body.style.backgroundColor = "#fff"
}

// Voilating DRY
// ------------------------------------------------------------------------------
// Solution



function chnageBackgroundColor(color) {
    document.body.style.backgroundColor = color
}

// Single button single work kr pa raha hai.
// SIngle click pr single fn call ho rha hai.
// __________________________________________________________________________________
// Solution: Use Event Listeners




