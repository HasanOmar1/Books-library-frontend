import React from "react";
import "./Footer.css";
import MarkunreadTwoToneIcon from "@mui/icons-material/MarkunreadTwoTone";

export default function Footer() {
  return (
    <section className="Footer">
      <div className="footer-container">
        <div className="used">
          <p>Frameworks & Packages</p>
          <ul>
            <li>Material UI</li>
            <li>Bootstrap</li>
            <li>React page-flip</li>
            <li>Puppeteer</li>
          </ul>
        </div>
        <div className="contact">
          <MarkunreadTwoToneIcon className="icon" />
          <p>Hasanromar2002@gmail.com</p>
        </div>
        <p>© 2024, Hasan Omar, All rights reserved</p>
      </div>
    </section>
  );
}
