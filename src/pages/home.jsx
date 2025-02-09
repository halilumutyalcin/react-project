import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/product-card.jsx";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const randomProducts = products
    .slice(0, 20)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div>
      <section className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to MyStore</h1>
          <p className="lead">
            Your one-stop shop for the best products at amazing prices!
          </p>
          <Link to="/products" className="btn btn-light btn-lg">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="featured-products py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            {randomProducts.length > 0 ? (
              randomProducts.map((product) => (
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
      </section>
      <section className="cta bg-dark text-white text-center py-5">
        <div className="container">
          <h2>Don't miss out on the best deals!</h2>
          <Link to="/products" className="btn btn-light btn-lg">
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
