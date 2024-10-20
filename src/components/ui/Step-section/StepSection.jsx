import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "Download MetaMask and follow the instructions to create a new wallet, and securely save your recovery phrase. ",
    icon: "ri-wallet-line",
  },

  {
    title: "Create your collection",
    desc: "Start by defining a unique theme or purpose for your collection. Then use our platoform to mint your NFTs..",
    icon: "ri-layout-masonry-line",
  },

  {
    title: "Add your NFTs",
    desc: "Contribute your own NFTs to verified fundraising campaigns, providing a unique way to support causes they care about.",
    icon: "ri-image-line",
  },

  {
    title: "List them for sale",
    desc: "Put your NFTs on a marketplace, where others can view and purchase them. Once listed, the NFT can be sold to a set price.",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
