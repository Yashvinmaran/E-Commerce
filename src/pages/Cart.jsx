import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { qntyInc, qntyDec, proDelete } from "../cartSlice";
import { PiCurrencyInrBold } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const Cart = useSelector(state => state.mycart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let totAmount = 0;

    const ans = Cart.map((key, index) => {
        totAmount += key.price * key.qnty;
        return (
            <tr key={index} className="cart-row">
                <td>{index + 1}</td>
                <td>
                    <img src={key.image} className="cart-img" alt={key.name} />
                </td>
                <td>{key.name}</td>
                <td>{key.desc}</td>
                <td>
                    <PiCurrencyInrBold /> {key.price}
                </td>
                <td className="quantity-control">
                    <FaMinusCircle className="icon minus" onClick={() => dispatch(qntyDec({ id: key.id }))} />
                    <span className="quantity">{key.qnty}</span>
                    <FaPlusCircle className="icon plus" onClick={() => dispatch(qntyInc({ id: key.id }))} />
                </td>
                <td>
                    <PiCurrencyInrBold /> {key.price * key.qnty}
                </td>
                <td>
                    <MdDelete className="icon delete" onClick={() => dispatch(proDelete(key.id))} />
                </td>
            </tr>
        );
    });

    return (
        <div className="cart-container">
            <h1 className="cart-title">🛒 My Cart</h1>
            <h3 className="total-amount">
                Total: <PiCurrencyInrBold /> {totAmount}
            </h3>
            <div className="checkout-btn">
                <Button variant="warning" onClick={() => navigate("/checkout")}>
                    Proceed to Checkout
                </Button>
            </div>

            <Table striped bordered hover className="cart-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </Table>

            {/* Custom Styles */}
            <style>
                {`
                    .cart-container {
                        padding: 20px;
                        max-width: 900px;
                        margin: auto;
                        background: white;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }

                    .cart-title {
                        text-align: center;
                        color: #003366;
                        font-weight: bold;
                        margin-bottom: 15px;
                    }

                    .total-amount {
                        text-align: center;
                        font-size: 22px;
                        font-weight: bold;
                        margin-bottom: 20px;
                        color: #ff6600;
                    }

                    .checkout-btn {
                        text-align: right;
                        margin-bottom: 20px;
                    }

                    .cart-table {
                        background: white;
                        border-radius: 10px;
                        overflow: hidden;
                    }

                    .cart-img {
                        width: 80px;
                        height: 80px;
                        border-radius: 8px;
                        object-fit: cover;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }

                    .cart-row {
                        transition: background 0.3s;
                    }

                    .cart-row:hover {
                        background: #f9f9f9;
                    }

                    .quantity-control {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }

                    .icon {
                        font-size: 22px;
                        cursor: pointer;
                        transition: transform 0.2s, color 0.3s;
                    }

                    .minus:hover {
                        color: red;
                        transform: scale(1.2);
                    }

                    .plus:hover {
                        color: green;
                        transform: scale(1.2);
                    }

                    .delete:hover {
                        color: crimson;
                        transform: scale(1.3);
                    }

                    .quantity {
                        font-size: 18px;
                        font-weight: bold;
                    }

                    @media (max-width: 768px) {
                        .cart-container {
                            padding: 15px;
                        }

                        .cart-img {
                            width: 60px;
                            height: 60px;
                        }

                        .icon {
                            font-size: 18px;
                        }

                        .quantity {
                            font-size: 16px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Cart;
