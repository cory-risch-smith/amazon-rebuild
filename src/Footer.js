import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* Get to Know Us */}
      <div className="footer__containerOne">
        <h4>Get To Know Us</h4>
        <div className="footer__subContainerOne">
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Sustainability</p>
          <p>Press Center</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Tours</p>
        </div>
      </div>

      <div className="footer__containerTwo">
        <h4>Make Money With Us</h4>
        <div className="footer__subContainerTwo">
          <p>Sell on Amazon</p>
          <p>Sell Under Amazon Accelerator</p>
          <p>Sell on Amazon Homemade</p>
          <p>Sell on Amazon Business</p>
          <p>Sell Your Apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hub</p>
        </div>
      </div>

      <div className="footer__containerThree">
        <h4>Amazon Payment Products</h4>
        <div className="footer__subContainerThree">
          <p>Amazon Rewards Visa Signature Cards</p>
          <p>Amazon.com Store Card</p>
          <p>Amazon Business Card</p>
          <p>Amazon Business Line of Credit</p>
          <p>Shop With Points</p>
          <p>Credit Card Market Place</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
      </div>

      <div className="footer__containerFour">
        <h4>Let Us Help You</h4>
        <div className="footer__subContainerFour">
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Amazon Prime</p>
          <p>Returns and Replacements</p>
          <p>Manage Your Content & Devices</p>
          <p>Amazon Assistance</p>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
