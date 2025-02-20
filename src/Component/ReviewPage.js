import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style.css";

export default function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const loggedInUser = localStorage.getItem("loggedInUser");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("You need to log in to submit a review.");
      return;
    }
    if (newReview.trim() === "") {
      alert("Review cannot be empty.");
      return;
    }
    const updatedReviews = [...reviews, { user: loggedInUser, text: newReview }];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setNewReview("");
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(reviews[index].text);
  };
  
  const saveEditedReview = () => {
    if (editText.trim() === "") {
      alert("Review cannot be empty.");
      return;
    }
    const updatedReviews = reviews.map((review, index) =>
      index === editIndex ? { ...review, text: editText } : review
    );
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setEditIndex(null);
  };

  const deleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="review_section container">
      <h2>User Reviews</h2>
      
      {isAuthenticated ? (
        <form onSubmit={handleReviewSubmit} className="review_form">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here..."
          />
          <button type="submit" className="submit_btn">Submit Review</button>
        </form>
      ) : (
        <p>Please log in to submit a review.</p>
      )}

      {reviews.length > 0 ? (
        <Slider {...sliderSettings} className="review_slider">
          {reviews.map((review, index) => (
            <div key={index} className="review_card">
              <h4>{review.user}</h4>

              {editIndex === index ? (
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <p>{review.text}</p>
              )}

              {review.user === loggedInUser && (
                <div className="review_actions">
                  {editIndex === index ? (
                    <button className="save_btn" onClick={saveEditedReview}>Save</button>
                  ) : (
                    <button className="edit_btn" onClick={() => startEditing(index)}>Edit</button>
                  )}
                  <button className="delete_btn" onClick={() => deleteReview(index)}>Delete</button>
                </div>
              )}
            </div>
          ))}
        </Slider>
      ) : (
        <p>No reviews yet. Be the first to leave one!</p>
      )}
    </div>
  );
}
