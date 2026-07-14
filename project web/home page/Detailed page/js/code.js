document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star-rating span');
    const reviewForm = document.getElementById('review-form');
    const reviewsList = document.getElementById('reviews-list');
    let selectedRating = 0;


    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-value')); 
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            
            
            let previousSibling = star.previousElementSibling;
            while (previousSibling) {
                previousSibling.classList.add('selected');
                previousSibling = previousSibling.previousElementSibling;
            }
        });
    });

    
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const reviewText = document.getElementById('review-text').value;

        if (selectedRating && reviewText.trim()) {
            const newReview = document.createElement('li');
            newReview.innerHTML = `<strong>Rating:</strong> ${'★'.repeat(selectedRating)}<br><strong>Review:</strong> ${reviewText}`;
            reviewsList.appendChild(newReview);

            
            selectedRating = 0;
            stars.forEach(s => s.classList.remove('selected'));
            reviewForm.reset();
        } else {
            alert('Please provide a rating and a review.');
        }
    });
});