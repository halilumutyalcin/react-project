import React from "react";
import logo from "../assets/react.svg";

function About() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold text-primary">About Us</h1>
          <p className="lead text-muted">
            We are passionate about providing top-quality products to our
            customers. Our store is built with the aim of making shopping
            effortless and enjoyable. Whether you're looking for fashion,
            gadgets, or home goods, we have it all!
          </p>
          <p>
            Our mission is to deliver excellent customer service and a smooth
            shopping experience. We constantly strive to keep our offerings
            updated with the latest trends and best deals.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={logo}
            width="500px"
            height="500px"
            alt="About Us"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
      <div className="mt-5 text-center">
        <h2>Get in Touch</h2>
        <p className="lead">
          Have any questions or need assistance? Feel free to{" "}
          <a href="/contact" className="text-decoration-none text-primary">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
