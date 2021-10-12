import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Col, Row, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaWhatsapp, } from 'react-icons/fa';
import Card1 from '../assets/images/card1.png'
import Card2 from '../assets/images/card2.png'
import { useState } from 'react';
const NavbarComp = (props) => {

  return (
    <Row className="nav-footer">
      <Col md={3} sm={6}>
        <ul className="footer-links">
          <li className="header-link">Navigation Links</li>
          <li><a>Home Menu</a></li>
          <li><a>About Menu</a></li>
          <li><a>Tour Menu</a></li>
          <li><a>SignIn Menu</a></li>
          <li><a>Company Policies Menu</a></li>
          <li><a>Contact Menu</a></li>
          <li><a>Organization Control Menu</a></li>
        </ul>
      </Col>
      <Col md={3} sm={6}>

        <ul className="footer-links">
          <li className="header-link">FAQs</li>
          <li><a>Company Policies</a></li>
          <li><a>Book Ticket</a></li>
          <li><a>Status Report</a></li>
          <li><a>Cancelation Status </a></li>
          <li><a>Confimation Status</a></li>
        </ul>
      </Col>
      <Col md={3} sm={6}>
        <ul className="footer-links">
          <li className="header-link">Company Registration Number</li>
          <li><a>0011946</a></li>
          <li className="header-link">Social Media Contact</li>
          <li>
            <ul className="social-links">
              <li >
                <a className="fb">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a className="twitter">
                  <FaTwitter />
                </a>
              </li>
              <li >
                <a className="whatsapp">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </li>

        </ul>
      </Col>
      <Col md={3} sm={6}>

        <ul className="footer-links ">
          <li className="header-link">Available Card Payment Options</li>
          <li className="cards"><a className="card-1 " ><img src={Card1} /></a></li>
          <li className="cards"><a className="card-2" ><img src={Card2} /></a></li>
        </ul>
      </Col>
      <Col md={12} className="rights" >
        <div  >
          Copyright © 2021 ABC Travel Agency
        </div>
      </Col>
    </Row>

  );
}

export default NavbarComp;