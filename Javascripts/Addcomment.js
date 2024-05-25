import reviews from "../database/reviews.js";
// console.log(reviews)
reviews.forEach(review => {
    const section = document.getElementById('comment_box');
    const comment = document.createElement('div');
    comment.classList.add('comments-list');
    comment.innerHTML = `
        <span>${review.user_name}</span>
        <p>${review.review_text}</p>
        <span class='date_time'>${review.created_at}</span>
    `;

    section.appendChild(comment);
});
