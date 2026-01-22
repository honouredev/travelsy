import icon1 from "../Assets/images/Bitmap.png";
import icon2 from "../Assets/images/Bitmap (2).png";
import icon3 from "../Assets/images/Bitmap (1).png";
import icon4 from "../Assets/images/Bitmap (3).png";
import icon5 from "../Assets/images/Bitmap (4).png";
import icon6 from "../Assets/images/Bitmap (5).png";
import side1 from "../Assets/images/down-arrow (1) copy 5.png";
import oval from "../Assets/images/Group 10.png";
import tw from "../Assets/images/Group 11.png";
import you from "../Assets/images/Group 12.png";
import tube from "../Assets/images/Group 13.png";

const Footer = () => {
  return (
    <footer >
      <div className="foot">
      <section className="help">
        <div>
          <h3>Need Travelsy Help?</h3>
          <p>Got Questions? Call us 24/7!</p>
          <p>Call Us: +254 716909 815</p>
          <p>Email Us: <a href="mailto:info@travelsy.com">info@travelsy.com </a></p>
        </div>
        <div>
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Terms Of Use</p>
          <p>Privacy Statement</p>
          <p>Give Us Feedback</p>
          <p>Partner With Us</p>
        </div>
        <div>
          <h3>Other Services & Support</h3>
          <p>Rewards Program</p>
          <p>Partners</p>
          <p>Legal</p>
          <p>Privacy Policy</p>
          <p>Customer Service Help</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p>Your Account</p>
          <p>Activities</p>
          <p>Hire Equipment</p>
          <p>Blogs</p>
        </div>
        <div>
          <h3>Mailing List</h3>
          <p>Sign Up for our mailing lists and get the latest
        offers and promotions straight in your inbox.</p>
        <div className="flex">
          <input type="email" placeholder="Your Email"/>
          <button className="btn">Subscribe</button>
          </div>
        </div>
        <div>
          <h3>Contact Info:</h3>
          <p>2nd Floor, Fedha Plaza, <br/>Westlands,<br/> Nairobi, Kenya.</p>
          <p>P.O Box 7231-00300 <br/> Nairobi, Kenya</p>
        <span>
          <img src={oval} alt="mapesa" />
          <img src={tw} alt="" />
          <img src={you} alt="" />
          <img src={tube} alt="" />
        </span>
        </div>
      </section>

        <div className="flex cards">
          <h3>Travelsy</h3>
          <nav className="flex">
            <a href="#mapesa"><img src={icon1} alt="mapesa" width={"50px"} height={"25px"} /> </a>
            <a href="#discover"><img src={icon3} alt="discover" width={"76px"} height={"16px"} /> </a>
            <a href="#visa"><img src={icon2} alt="visa" /> </a>
            <a href="#paypal"><img src={icon4} alt="paypal" /> </a>
            <a href="#mastercard"><img src={icon5} alt="mastercard" /> </a>


         <span id="usa">
          <img src={icon6} alt="USA" />
          <p>English (United States) </p>
          <img src={side1} alt="side arrow" />
          </span>
          <span id="kes">
          <p>KES</p>
          <img src={side1} alt="side arrow2" />
          </span>
          </nav>
        </div>

      <span id="copy">
      <p>&copy; 2019 Travelsy Ltd. All rights reserved.</p>
      <p>Made in Kenya by Ralak</p> 
      </span>

      </div>
    </footer>
  );
};

export default Footer;