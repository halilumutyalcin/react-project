import React from "react";
import { useNavigate } from "react-router-dom"; 

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: "120px",
          fontWeight: "bold",
          color: "#ff4d4f",
          marginBottom: "20px",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "24px",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Oops! Page not found.
      </h2>
      <p
        style={{
          fontSize: "16px",
          color: "#666",
          marginBottom: "40px",
        }}
      >
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={handleGoHome}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#ff4d4f",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        Go Back to Home
      </button>
    </div>
  );
}

export default NotFound;
