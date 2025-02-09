import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="card mb-4 shadow-lg rounded"
      style={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "250px",
          overflow: "hidden",
        }}
      >
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="card-body"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h5 className="card-title text-truncate" style={{ maxWidth: "100%" }}>
          {product.title}
        </h5>
        <p className="card-text text-muted" style={{ fontSize: "0.875rem" }}>
          {product.description.length > 100
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="text-success fs-5 fw-bold">${product.price}</span>
          <span className="badge bg-warning text-dark">
            {product.rating.rate} <i className="bi bi-star-fill"></i>
          </span>
        </div>
        <button
          className="btn btn-dark w-100 mt-3"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
