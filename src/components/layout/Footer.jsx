import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Hammy's Hamburgers</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://hammyburgers.com">
          <AiFillYoutube />
        </a>
        <a href="https://hammyburgers.com">
          <AiFillInstagram />
        </a>
        
        
      </aside>
    </footer>
  );
};

export default Footer;
