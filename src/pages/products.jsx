import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/product-card.jsx";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-primary">Our Products</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>Loading products...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
