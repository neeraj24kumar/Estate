/* eslint-disable jsx-a11y/anchor-is-valid */

import { BiBuildingHouse } from "react-icons/bi";
// import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";
import SubscribeButton from './SubscribeButton';

const Footer = () => {
  return (
    <div className="text-slate-200">
      <footer>
        <div className="flex flex-wrap gap-2 max-w-7xl mx-auto px-4">
          <div className="flex-1 basis-[10rem]">
            <Link to="/" className="flex-shrink-0 flex-align-center gap-x-1">
              <BiBuildingHouse className="text-3xl text-primary" />
              <h1 className="hidden md:block">MartVilla</h1>
            </Link>
            <div className="mt-3">
              <p className="text-sm">
              Your real estate journey, simplified and successful with modern technology.<br></br>
              We provide a seamless, satisfying experience with a personal touch from start to finish
              </p>
             
            </div>
          </div>


          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="/about-us"> About Us</a>
              </li>
              <li className="my-3 text-muted">
                <a href="/services">Services</a>
              </li>
              <li className="my-3 text-muted">
                <a href="/faqs">FAQ</a>
              </li>
              <li className="my-3 text-muted">
                <a href="/portifolio">Portifolio</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Business</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="/contact">Contact</a>
              </li>
              <li className="my-3 text-muted">
                <a href="https://www.realestateindia.com/advertise/">Advertise with us</a>
              </li>
              <li className="my-3 text-muted">
                <a href="https://www.realestateindia.com/terms-conditions.htm">Terms & Conditions</a>
              </li>
              <li className="my-3 text-muted">
                <a href="https://www.realestateindia.com/terms-conditions.htm">Pricacy Policy</a>
              </li>
            </ul>
          </div>

          {/* <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-muted">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="justify-center my-3 flex-align-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark"
                placeholder="Email Address.."
              />
              <a href="/" class="-ml-2 btn btn-primary" role="button">Subscribe</a>
              <button href="/" className="-ml-2 btn btn-primary">subscribe</button>
            </div>
          </div> */}
      <div className="flex-1 basis-[10rem] text-center md:text-left">
  <h2 className="text-xl font-semibold">Subscribe to our YouTube Channel</h2>
  <p className="text-sm text-muted">
    Stay updated! Subscribe to our YouTube channel. Visit the channel below.
  </p>
  <div className="my-3"> {/* Removed justify-center and flex-align-center */}
    {/* <a
      href="https://www.youtube.com/@wabwenibrian66" // Replace with dynamic URL if needed
      className="btn btn-secondary" // Removed -ml-2 and added to className
      style={{ marginLeft: 0 }} // added inline styling to remove the margin
      role="button"
      target="_blank" // Opens in a new tab
      rel="noopener noreferrer" // Security best practice for target="_blank"
    >
      Subscribe
    </a> */}
    <SubscribeButton />
  </div>
</div>


        </div>
      </footer>
      <div className="py-2 mt-3 text-center border-t text-muted border-dark">
        {/* <p>
          Created By <span className="text-primary">Kisakye Martha</span> | All
          Rights Reserved
        </p> */}
      </div>
    </div>
  );
};


export default Footer;

