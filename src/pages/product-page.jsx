import React, { useEffect,useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice"; 
import { Modal, Button } from "react-bootstrap"; 

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, data.length]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-primary">Loading product...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Error</h2>
        <p className="text-muted">{error}</p>
      </div>
    );
  }
  const product = data.find((p) => p.id === parseInt(id));
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Product Not Found</h2>
        <p className="text-muted">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleGoToCart = () => {
    navigate("/cart"); 
    handleCloseModal(); 
  };

  const handleGoBack = () => {
    navigate(-1); 
    handleCloseModal(); 
  };


  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "contain", width: "100%" }}
          />
        </div>

        <div className="col-md-6">
          <h1 className="fw-bold text-primary">{product.title}</h1>
          <p className="text-muted">{product.description}</p>

          <h4 className="text-success fw-bold">${product.price}</h4>

          <div className="mb-3">
            <span className="badge bg-warning text-dark fs-6">
              {product.rating.rate} ★ ({product.rating.count} reviews)
            </span>
          </div>

          <button
            className="btn btn-dark btn-lg w-100"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Added to Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Your item has been successfully added to the cart!</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleGoBack}>
                Go Back
              </Button>
              <Button variant="primary" onClick={handleGoToCart}>
                Go to Cart
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
