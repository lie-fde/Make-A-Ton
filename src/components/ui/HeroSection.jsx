import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css";

// Import the video file
import heroVideo from "../../assets/videos/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
            <h2>
                <h3>Welcome to TRUDO</h3>
                
                <span>True <i class="ri-hand-heart-line"></i>Donations !</span> NFTs
              </h2>

              <p>
                Trudo is a free, blockchain-powered donation platform designed to
                transform the world of online giving. With Trudo, donors can
                securely support verified charitable campaigns while receiving unique NFTs
                as rewards.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2">
                  <i className="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              {/* Replace the image with a video element */}
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                className="w-100" 
                style={{ objectFit: "cover", height: "100%" }} // Ensuring the video behaves like the image
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
