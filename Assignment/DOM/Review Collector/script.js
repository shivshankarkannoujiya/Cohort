const textArea = document.getElementById('textBox');
const submitButton = document.getElementById('submitReviewBtn');
const reviewContainer = document.getElementById('reviewContainer');

submitButton.addEventListener('click', function () {

    const textAreaValue = textArea.value;

    if (!textAreaValue.trim()) return; 

    const reviewCard = document.createElement('div');
    reviewCard.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = `Client Review`;

    const review = document.createElement('p');
    review.textContent = textAreaValue;
    
    reviewCard.appendChild(h2);
    reviewCard.appendChild(review);

    reviewContainer.prepend(reviewCard);

    textArea.value = ''
})