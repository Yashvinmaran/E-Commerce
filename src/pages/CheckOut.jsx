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

            {/* Custom Styling */}
            <style>
                {`
                    .checkout-container {
                        padding: 20px;
                        max-width: 800px;
                        margin: auto;
                        background: white;
                        border-radius: 10px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    }

                    .checkout-title {
                        text-align: center;
                        font-weight: bold;
                        color: #003366;
                        margin-bottom: 20px;
                    }

                    .checkout-form {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }

                    .customer-details, .payment-method {
                        padding: 15px;
                        border-radius: 8px;
                        background: #f9f9f9;
                    }

                    .section-title {
                        font-size: 20px;
                        font-weight: bold;
                        color: #ff6600;
                        margin-bottom: 15px;
                    }

                    .payment-options {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }

                    .submit-btn {
                        width: 100%;
                        font-size: 18px;
                        font-weight: bold;
                        padding: 10px;
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
