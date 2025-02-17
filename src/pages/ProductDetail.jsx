import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [mydata, setMydata] = useState({});
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ email: "", rating: 5, comment: "" });
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      let productApi = `http://localhost:3000/product/${id}`;
      const res = await axios.get(productApi);
      setMydata(res.data);

      let reviewsApi = `http://localhost:3000/reviews?productId=${id}`;
      const reviewRes = await axios.get(reviewsApi);
      setReviews(reviewRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);

  const renderStars = (rating) => {
    const fullStars = "★".repeat(Math.floor(rating));
    const emptyStars = "☆".repeat(5 - Math.floor(rating));
    return <span style={{ color: "#FFD700", fontSize: "1.5rem" }}>{fullStars}{emptyStars}</span>;
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!newReview.email || !newReview.comment) {
      alert("Please enter email and comment.");
      return;
    }

    const reviewData = { ...newReview, productId: id };
    try {
      const res = await axios.post(`http://localhost:3000/reviews`, reviewData);
      setReviews([...reviews, res.data]);
      setNewReview({ email: "", rating: 5, comment: "" });
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>Product Detail</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", fontFamily: "'Arial', sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "80%", backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <div>
            <img src={mydata.image} alt={mydata.name} style={{ width: "600px", height: "600px", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }} />
          </div>
          <div style={{ marginLeft: "20px", maxWidth: "60%" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>Product Name: {mydata.name}</h2>
            <h3 style={{ color: "#ff3b30", fontSize: "1.5rem", margin: "15px 0" }}>Price: ${mydata.price}</h3>
            <p style={{ fontSize: "1.1rem", color: "#666" }}>Description: {mydata.description}</p>

            <div>
              <h4>Overall Rating: {calculateAverageRating()} ⭐</h4>
              {renderStars(calculateAverageRating())}
            </div>

            <Button
              variant="primary"
              style={{ marginTop: "20px", backgroundColor: "#007bff", borderColor: "#007bff", padding: "10px 20px", fontSize: "1rem", borderRadius: "5px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
              onClick={() => {
                dispatch(addtoCart({
                  id: mydata.id,
                  name: mydata.name,
                  desc: mydata.description,
                  price: mydata.price,
                  image: mydata.image,
                  qnty: 1,
                }));
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div style={{ width: "80%", margin: "50px auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>User Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} style={{ marginBottom: "15px", padding: "15px", borderBottom: "1px solid #ddd" }}>
              <h4 style={{ marginBottom: "5px" }}>{review.email}</h4>
              {renderStars(review.rating)}
              <p style={{ fontSize: "1rem", color: "#555" }}>{review.comment}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#777" }}>No reviews yet.</p>
        )}

        {/* Submit Review Form */}
        <div style={{ marginTop: "30px" }}>
          <h3>Leave a Review</h3>
          <Form onSubmit={handleReviewSubmit}>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={newReview.email}
                onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Rating:</Form.Label>
              <Form.Control
                as="select"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num} Stars</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Comment:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" style={{ marginTop: "10px" }}>
              Submit Review
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
