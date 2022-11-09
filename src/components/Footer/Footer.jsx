import React from 'react'
import './footer.css'

// import logo from '../../assets/images/bullet2.png'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear();
  return (
  <footer className="footer">
    <Container className="">
      <Row>
        <Col lg="4" className='mb-4' md='6'>
          <div className="logo">
            <div>
              <h1 className='text-white'>gear5 Automobiles</h1>
            </div>
          </div>
          <p className='footer__text mt-4'>
              Trusted as promised.
            </p>
        </Col>

        <Col lg="3" md='3' className="mb-4">
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Top Categories</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to=''>Spares</Link>
              </ListGroupItem> 

              <ListGroupItem className='ps-0 border-0'>
                <Link to=''>Accessories</Link>
              </ListGroupItem> 

              <ListGroupItem className='ps-0 border-0'>
                <Link to=''>Services</Link>
              </ListGroupItem> 

              <ListGroupItem className='ps-0 border-0'>
                <Link to=''>Other Parts</Link>
              </ListGroupItem> 
            </ListGroup>
          </div>
        </Col>

        <Col lg="2" md='3' className='mb-4'>
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem> 

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem> 

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Login</Link>
              </ListGroupItem> 

              <ListGroupItem className='ps-0 border-0'>
                <Link to=''>Privacy Policy</Link>
              </ListGroupItem> 
            </ListGroup>
          </div>
        </Col>

        <Col lg="3" md="4">
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Contact</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-fill"></i></span>
                <p>Nehru Nagar, Pune, 411015</p>
              </ListGroupItem> 

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-fill"></i></span>
                <p>+91 9175716389</p>
              </ListGroupItem> 

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-fill"></i></span>
                <p>dhananjayanpramod1@gmail.com</p>
              </ListGroupItem> 
            </ListGroup>
          </div>
        </Col>

        <Col lg="12" className='mb-4'>
          <p className='footer__copyright'>gear5 &copy; {year} <br/> Developed by Prem Dhananjayan.<br/>All Rights Reserved.</p> 
        </Col>

      </Row>
    </Container>
  </footer>
)}

export default Footer
