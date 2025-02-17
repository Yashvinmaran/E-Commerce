import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addtoCart } from "../../cartSlice";

const Womens = () => {
  const [womensData, setWomensData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/womens")
      .then((response) => response.json())
      .then((data) => setWomensData(data))
      .catch((error) => console.error("Error fetching womens data:", error));
  }, []);

  const addToCart = async (product, e) => {
    e.stopPropagation();
    dispatch(addtoCart({
      id: product.id,
      name: product.name,
      desc: product.description,
      price: product.price,
      image: product.image,
      qnty: 1,
    }));
    await axios.post("http://localhost:3000/cart", product);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Womens Wear</h1>
      <div style={styles.productList}>
        {womensData.map((item) => (
          <div key={item.id} style={styles.productItem}>
            <img src={item.image} alt={item.name} style={styles.productImage} />
            <h3 style={styles.productTitle}>{item.name}</h3>
            <p style={styles.productDescription}>{item.description}</p>
            <p style={styles.productPrice}>${item.price}</p>
            <button style={styles.button} onClick={(e) => addToCart(item, e)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: "40px",
    color: "#333",
  },
  productList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "30px",
    justifyItems: "center",
  },
  productItem: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
  },
  productImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  productTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  productDescription: {
    fontSize: "1.1rem",
    color: "#777",
    marginBottom: "20px",
  },
  productPrice: {
    fontSize: "1.4rem",
    color: "#333",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "15px 25px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.2rem",
    transition: "background-color 0.3s ease",
  },
};

export default Womens;
