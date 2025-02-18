const textArea = document.getElementById('textBox');
const submitButton = document.getElementById('submitReviewBtn');
const reviewContainer = document.getElementById('reviewContainer');


let reviews = [];

submitButton.addEventListener('click', function () {

    const textAreaValue = textArea.value.trim();
    if (!textAreaValue) return; 

    const newReview = {
        id: Date.now(),
        heading: `Client Review`,
        text: textAreaValue,
        date: new Date().toISOString()
    }

    reviews.push(newReview);
    saveReview();
    console.log(reviews);

    const reviewCard = document.createElement('div');
    reviewCard.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = newReview.heading;

    const reviewText = document.createElement('p');
    reviewText.textContent = newReview.text;

    reviewCard.appendChild(h2);
    reviewCard.appendChild(reviewText);

    reviewContainer.prepend(reviewCard);
    
    textArea.value = ''
})

function renderReview(review) {
    console.log(review)
}

function saveReview() {
    localStorage.setItem("review", JSON.stringify(reviews));
}