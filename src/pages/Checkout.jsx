import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name." />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your Email ID." />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Enter your Phone Number." />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your Street Address." />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Quantity: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>{totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Service Charges:
                    <br />
                    Will be calculated after customization/installation of
                    spares.
                  </span>
                </h6>
                <h4>
                  Total Cost: <span>{totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Place your order!
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
