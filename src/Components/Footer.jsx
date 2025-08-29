// src/components/Footer.js
import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] text-gray-700 px-16 py-12">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
        {/* Logo Section */}
        <div className="col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
              alt="Swiggy"
              className="w-8 h-8"
            />
            <span className="text-orange-500 font-bold text-xl">Swiggy</span>
          </div>
          <p className="text-sm">© 2025 Swiggy Limited</p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-bold mb-3">Contact us</h4>
          <ul className="space-y-2 text-sm">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        {/* Available in */}
        <div>
          <h4 className="font-bold mb-3">Available in:</h4>
          <ul className="space-y-2 text-sm">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
          <select className="mt-3 border border-gray-300 rounded-md p-1 text-sm">
            <option>679 cities</option>
          </select>
        </div>

        {/* Life at Swiggy */}
        <div>
          <h4 className="font-bold mb-3">Life at Swiggy</h4>
          <ul className="space-y-2 text-sm">
            <li>Explore with Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 md:grid-cols-6 mt-12 gap-8">
        {/* Legal */}
        <div>
          <h4 className="font-bold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-bold mb-3">Social Links</h4>
          <div className="flex space-x-4 text-xl text-gray-700">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaPinterest />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
