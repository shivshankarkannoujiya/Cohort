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


const darkButton = document.getElementById('theme-btn')
darkButton.addEventListener('click', function () {
    console.log(`I got Clicked`)
    chnageBackgroundColor(`#1a1a1a`)
})

/*
    In future the `New Developer` can put another `eventlisters` on the same button
*/
darkButton.addEventListener('click', function () {
    console.log(`Something New Added by another developer on same button`)
})



