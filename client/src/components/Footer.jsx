 
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Madhan Estate</h2>
            <p>Leading the digital real estate market. Find your dream property today!</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p><span className="font-semibold">Address:</span> 1234 Real Estate St, Chennai, TN</p>
            <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
            <p><span className="font-semibold">Email:</span> contact@madhanestate.com</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          &copy; 2024 Madhan Estate. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
