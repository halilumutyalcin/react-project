import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { data: cartProducts, total } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user); // Kullanıcı giriş durumu Redux'tan
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(isAuthenticated);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  if (!isAuthenticated) {
    return (
      <div className="container py-5">
        <h2 className="fw-bold text-primary">Your Cart</h2>
        <p>
          Please{" "}
          <button className="btn btn-primary" onClick={handleLoginRedirect}>
            Login
          </button>{" "}
          to view your cart.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-primary">Your Cart</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div key={product.id} className="col">
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
                  <h5
                    className="card-title text-truncate"
                    style={{ maxWidth: "100%" }}
                  >
                    {product.title}
                  </h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Quantity: {product.quantity}</p>
                  <p className="card-text">
                    Subtotal: ${product.price * product.quantity}
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      {cartProducts.length > 0 && (
        <div className="d-flex justify-content-between mt-4">
          <h4>Total Price: ${total}</h4>
          <div>
            <button
              className="btn btn-secondary me-2"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button className="btn btn-success">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
