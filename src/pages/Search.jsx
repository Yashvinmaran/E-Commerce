import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const Search = () => {
  const [mypro, setMypro] = useState("");
  const [prodata, setProData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async (e) => {
    setMypro(e.target.value);
    setLoading(true);

    const apis = [
      "http://localhost:3000/product",
      "http://localhost:3000/mens",
      "http://localhost:3000/womens",
      "http://localhost:3000/children",
      "http://localhost:3000/partywear"
    ];

    try {
      const responses = await Promise.all(apis.map(api => axios.get(api)));
      
      const allData = responses.flatMap(response => response.data);
      setProData(allData);
    } catch (error) {
      console.error("Error fetching data from APIs:", error);
    }
    
    setLoading(false);
  };

  const filteredData = prodata.filter((key) => {
    const mystr = key.name.toLowerCase();
    const myproduct = mypro.toLowerCase();
    return mystr.includes(myproduct);
  });

  return (
    <>
      <Container>
        <h1 className="text-center my-4">Search Product</h1>
        <Form>
          <Form.Group className="mb-4" controlId="searchProduct">
            <Form.Control
              type="text"
              value={mypro}
              onChange={loadData}
              placeholder="Enter product name"
              style={{ padding: "10px", fontSize: "16px" }}
            />
          </Form.Group>
        </Form>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {filteredData.length > 0 ? (
                filteredData.map((key) => (
                  <Col key={key.id}>
                    <Card style={{ width: '18rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                      <Card.Img variant="top" src={key.image} style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                      <Card.Body>
                        <Card.Title>{key.name}</Card.Title>
                        <Card.Text>{key.description}</Card.Text>
                        <h4>Price: ₹{key.price}</h4>
                        <Button
                          variant="primary"
                          onClick={() => {
                            dispatch(addtoCart({ id: key.id, name: key.name, desc: key.description, price: key.price, image: key.image, qnty: 1 }));
                          }}
                          style={{ width: '100%', borderRadius: '5px' }}
                        >
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col>
                  <h5>No products found</h5>
                </Col>
              )}
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default Search;
