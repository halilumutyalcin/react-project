import React from "react";

function Contact() {
  return (
    <div>
      <div className="container py-5" style={{ minHeight: "100vh" }}>
        <div className="row align-items-center" style={{ minHeight: "80vh" }}>
          <div className="col-md-6">
            <h2 className="display-4 fw-bold text-primary">Contact Us</h2>
            <p className="lead text-muted">We would love to hear from you!</p>

            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <h3 className="text-center text-primary">Our Location</h3>
            <p className="text-center">34100 Pendik, Istanbul, Turkey</p>

            <div className="d-flex justify-content-center my-4">
              <div>
                <h4 className="text-muted">Contact Information</h4>
                <p>Email: info@hystore.com</p>
                <p>Phone: +123 456 7890</p>
              </div>
            </div>

            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192839.82688612174!2d29.19616137608721!3d40.956899670615655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad70fd26705e3%3A0xcbd4c281a7b18cea!2sPendik%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1739134767179!5m2!1str!2str"
                allowfullscreen=""
                loading="lazy"
                title="Our Location"
                style={{ width: "100%", height: "250px", border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white py-4" style={{ marginTop: "auto" }}>
        <div className="container text-center">
          <p>&copy; 2025 HyStore. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
