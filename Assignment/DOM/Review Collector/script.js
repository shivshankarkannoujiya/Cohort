document.addEventListener('DOMContentLoaded', () => {

    const textArea = document.getElementById('textBox');
    const submitButton = document.getElementById('submitReviewBtn');
    const reviewContainer = document.getElementById('reviewContainer');


    let reviews = JSON.parse(localStorage.getItem("review")) || [];
    reviews.forEach(review => renderReview(review));

    submitButton.addEventListener('click', function () {

        const textAreaValue = textArea.value.trim();
        if (!textAreaValue) return; 

        const newReview = {
            id: Date.now(),
            heading: `Review from a Learner`,
            text: textAreaValue,
            date: new Date().toISOString()
        }

        reviews.push(newReview);
        saveReview();
        renderReview(newReview);
        
        textArea.value = ''
        console.log(reviews);
    })


    function renderReview(review) {

        console.log(review)
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('card');

        const h2 = document.createElement('h2');
        h2.textContent = review.heading;

        const reviewText = document.createElement('p');
        reviewText.textContent = review.text;

        reviewCard.appendChild(h2);
        reviewCard.appendChild(reviewText);

        reviewContainer.prepend(reviewCard);
    }


    function saveReview() {
        localStorage.setItem("review", JSON.stringify(reviews));
    }
})