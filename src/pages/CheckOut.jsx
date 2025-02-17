import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/paycomplete");
    };

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">🛍️ User Checkout</h1>

            <div className="checkout-form">
                <div className="customer-details">
                    <h2 className="section-title">📌 Enter Customer Details</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>🏠 Shipping Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter your address" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>🏙️ City</Form.Label>
                            <Form.Control type="text" placeholder="Enter city" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>📞 Contact Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter contact number" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>📧 Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>📌 Pin Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter pin code" required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="submit-btn">
                            Proceed to Payment
                        </Button>
                    </Form>
                </div>

                <div className="payment-method">
                    <h2 className="section-title">💳 Select Payment Method</h2>
                    <div className="payment-options">
                        <Form.Check type="radio" name="payment" label="Cash On Delivery" required />
                        <Form.Check type="radio" name="payment" label="Debit/Credit Card" required />
                        <Form.Check type="radio" name="payment" label="Internet Banking" required />
                        <Form.Check type="radio" name="payment" label="UPI" required />
                        <Form.Check type="radio" name="payment" label="PhonePe / Google Pay" required />
                    </div>
                </div>
            </div>

            <style>
                {`
                    .checkout-container {
                        padding: 20px;
                        max-width: 800px;
                        margin: auto;
                        background: #f8f9fa; /* Light gray background */
                        border-radius: 10px;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Softer shadow */
                        font-family: 'Arial', sans-serif; /* Modern font */
                    }

                    .checkout-title {
                        text-align: center;
                        font-weight: bold;
                        color: #212529; /* Dark gray title */
                        margin-bottom: 20px;
                    }

                    .checkout-form {
                        display: flex;
                        flex-direction: column; /* Stack sections vertically */
                        gap: 20px;
                    }

                    .customer-details, .payment-method {
                        padding: 20px; /* Increased padding */
                        border-radius: 10px;
                        background: #ffffff; /* White background for sections */
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle inner shadow */
                    }

                    .section-title {
                        font-size: 1.2rem; /* Slightly larger title */
                        font-weight: 600; /* Semi-bold */
                        color: #007bff; /* Blue title */
                        margin-bottom: 15px;
                        border-bottom: 1px solid #dee2e6; /* Add a subtle line */
                        padding-bottom: 5px;
                    }

                    .payment-options {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }
                    .payment-options .form-check-label{
                        cursor: pointer;
                    }

                    .submit-btn {
                        width: 100%;
                        font-size: 1rem;
                        font-weight: 500; /* Slightly less bold */
                        padding: 12px; /* Increased padding */
                        background-color: #007bff; /* Blue button */
                        border-color: #007bff;
                        transition: all 0.2s ease-in-out; /* Smooth transitions */
                    }
                    .submit-btn:hover{
                        background-color: #0056b3;
                        border-color: #0056b3;
                    }

                    @media (max-width: 768px) {
                        .checkout-form {
                            flex-direction: column;
                        }

                        .checkout-container {
                            padding: 15px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default CheckOut;