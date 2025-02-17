function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color
}

const toggleButton = document.getElementById('toggle-btn');
toggleButton.addEventListener('click', function () {
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor
    if (!currentColor || currentColor == `white`) {
        changeBackgroundColor(`#1a1a1a`);
        toggleButton.textContent = `Turn to Light Mode`
    } else {
        changeBackgroundColor(`white`);
        toggleButton.textContent = `Turn to Dark Mode`
    }
})