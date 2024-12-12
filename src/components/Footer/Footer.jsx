import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Sip 'N' Soak Community</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Shipping & Delivery</a>
                </li>
                <li>
                  <a href="#">Payment & Security</a>
                </li>
                <li>
                  <a href="#">Online Orders</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">sipnsoak@admin.com</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Social</h4>
              <div className="social-links">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2xl"
                    style={{ color: "#4a4947" }}
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2xl"
                    style={{ color: "#4a4947" }}
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    size="2xl"
                    style={{ color: "#4a4947" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <div className="footer-mobile"></div>
      </footer>
    </div>
  );
}
