import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container } from "reactstrap";
const Cart = () => {
  return (
    <Helmet title="Cart">
      <CommonSection title="Checkout" />
    </Helmet>
  );
};

export default Cart;
