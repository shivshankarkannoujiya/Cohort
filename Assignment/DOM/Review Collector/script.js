const textArea = document.getElementById('textBox');
const submitButton = document.getElementById('submitReviewBtn');
const reviewContainer = document.getElementById('reviewContainer');


let reviews = [];

submitButton.addEventListener('click', function () {

    const textAreaValue = textArea.value.trim();
    if (!textAreaValue) return; 

    const newReview = {
        id: Date.now(),
        text: textAreaValue,
        date: new Date().toISOString()
    }

    reviews.push(newReview)
    console.log(reviews);

    const reviewCard = document.createElement('div');
    reviewCard.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = `Client Review`;

    const reviewText = document.createElement('p');
    reviewText.textContent = newReview.text;

    reviewCard.appendChild(h2);
    reviewCard.appendChild(reviewText);

    reviewContainer.prepend(reviewCard);
    
    textArea.value = ''
})