import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [mydata, setMydata] = useState({});
  const dispatch = useDispatch();

  const loadData = async () => {
    let api = `http://localhost:3000/product/${id}`;
    const res = await axios.get(api);
    console.log(res.data);
    setMydata(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    fontFamily: "'Arial', sans-serif",
  };

  const productDetailStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const infoStyle = {
    marginLeft: '20px',
    maxWidth: '60%',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#333',
  };

  const priceStyle = {
    color: '#ff3b30',
    fontSize: '1.5rem',
    margin: '15px 0',
  };

  const descriptionStyle = {
    fontSize: '1.1rem',
    color: '#666',
  };

  const buttonStyle = {
    marginTop: '20px',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Product Detail</h1>
      <div style={containerStyle}>
        <div style={productDetailStyle}>
          <div>
            <img src={mydata.image} alt={mydata.name} style={imageStyle} />
          </div>
          <div style={infoStyle}>
            <h2 style={titleStyle}>Product Name: {mydata.name}</h2>
            <h3 style={priceStyle}>Price: ${mydata.price}</h3>
            <p style={descriptionStyle}>Description: {mydata.description}</p>
            <Button
              variant="primary"
              style={buttonStyle}
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
    </>
  );
};

export default ProductDetail;
