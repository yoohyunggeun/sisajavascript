export const makeReview = (star, review) => `
            <div class="review">
                <div class="stars">${"★".repeat(star) + "☆".repeat(5 - star)}</div>
                <div class="evaluation">${review}</div>
            </div>`;
export const makeContents = (contents) => `<p>${contents}</p>`;

export const makeReviewList = () => {
  const reviewList = document.createElement("div");
  reviewList.classList.add("reviewList");
  return reviewList;
};