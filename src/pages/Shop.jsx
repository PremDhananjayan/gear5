import React, { useState } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "spares") {
      const filteredProducts = products.filter(
        (item) => item.category === "spares"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "accessories") {
      const filteredProducts = products.filter(
        (item) => item.category === "accessories"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "services") {
      const filteredProducts = products.filter(
        (item) => item.category === "services"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "customization") {
      const filteredProducts = products.filter(
        (item) => item.category === "customization"
      );

      setProductsData(filteredProducts);
    }

    /*if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );

      setProductsData(filteredProducts);
    }*/
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="spares">Spares</option>
                  <option value="accessories">Accessories</option>
                  <option value="services">Services</option>
                  <option value="customization">Customiztion</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-eye-fill"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
