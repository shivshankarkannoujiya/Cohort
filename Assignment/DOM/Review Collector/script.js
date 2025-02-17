const textarea = document.getElementById('textarea');
const submitButton = document.getElementById('btn');
const reviewDisplayContainer = document.getElementById('displayReview');

submitButton.addEventListener('click', function () {

    const textareaValue = textarea.value
    
    if (textareaValue !== '') {

        const review = document.createElement('div');
        review.textContent = textareaValue;
        review.classList.add('box')

        reviewDisplayContainer.prepend(review);

        textarea.value = '';
    }
})
