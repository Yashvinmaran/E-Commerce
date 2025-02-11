import { useState } from "react";
import LoaderComp from "./LoaderComp";

const PayComplete = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  const containerStyle = {
    backgroundColor: '#f8f9fa',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Arial', sans-serif",
  };

  const loaderContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const paymentMessageStyle = {
    textAlign: 'center',
    backgroundColor: '#4caf50',
    color: 'white',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 1s ease-in-out',
  };

  const paymentTitleStyle = {
    fontSize: '2.5rem',
    marginBottom: '10px',
  };

  const paymentSubtitleStyle = {
    fontSize: '1.2rem',
    color: '#f1f1f1',
  };

  return (
    <div style={containerStyle}>
      <center>
        {isLoading ? (
          <div style={loaderContainerStyle}>
            <LoaderComp />
          </div>
        ) : (
          <div style={paymentMessageStyle}>
            <h1 style={paymentTitleStyle}>🎉 Payment Complete! 🎉</h1>
            <p style={paymentSubtitleStyle}>Thank you for your purchase. Your payment was successful!</p>
          </div>
        )}
      </center>
    </div>
  );
};

export default PayComplete;
