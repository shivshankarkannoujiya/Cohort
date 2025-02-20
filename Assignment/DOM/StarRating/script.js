const bigStar = document.querySelector('.big-star i');
const stars = document.querySelectorAll('.star');
const ratingText = document.querySelector('.selected-rating');
const feedbackMessage = document.querySelector('.selected-rating');
const ratingButton = document.querySelector('.rating button');


// loop through each stars
stars.forEach(star => {
    star.addEventListener('mouseenter', handleHover);
    star.addEventListener('mouseleave', handleLeave);
    star.addEventListener('click', handleClick);
});


// variable to hold the rating value
let rating;


// function for highliight the stars
function highliightStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            // add css class for highlight
            star.classList.add('selected')
        } else {
            // remove the highlight class
            star.classList.remove('selected')
        }
    } )
}



// function for the mouseenter (hover) event
function handleHover(e) {
    // seprate rating variables for the mouseenter event
    const rating = e.currentTarget.getAttribute("data-value");
    highliightStars(rating);

}

// function for the mouseLeave event
function handleLeave() {
    // run the star highlight function
    highliightStars(rating)
}

// function to handleClick
function handleClick(e) {
    ratingButton.style.display = "block";
    // set the rating to the clicked star data value
    rating = e.currentTarget.getAttribute('data-value');
    bigStar.style.fontSize = `${1 + rating * 0.1}em`;
    ratingText.textContent = rating;    
}