import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 ">
      <div className="mx-auto max-w-screen-xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-12">
        {/* Logo - Left */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4 flex items-center justify-center md:justify-start space-x-2">
            <img src='/logo.png' className='h-20 w-auto' alt="Logo" />
          </div>
          <div className="text-gray-500 text-sm text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!
          </div>
        </div>

        {/* Address - Center */}
        <div className="flex flex-col items-center md:items-center">
          <div className="text-lg font-semibold mb-4">Address</div>
          <div className="text-gray-500 text-sm text-center md:text-center">
            Sec-81 Gurugram <br />
            Haryana <br />
            INDIA,Asia
          </div>
        </div>

        {/* Newsletter Subscription - Right */}
        <div className="flex flex-col items-center md:items-end">
          <div className="text-lg font-semibold mb-4">Subscribe to our Newsletter</div>
          <div className="w-full max-w-xs">
            <input
              type="email"
              className="mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Enter your email"
            />
            <button className="w-full mt-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright */}
      <div className="bg-gray-100 py-4">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-y-4 px-6 text-gray-500 sm:flex-row sm:text-left">
          <div className="text-sm">© 2024 Adrenix | All Rights Reserved</div>
          <div className="flex space-x-6 text-sm">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>

          {/* Social media icons */}
          <div className="flex space-x-6 text-2xl text-gray-500">
            <FaFacebook className="hover:text-blue-600" />
            <FaTwitter className="hover:text-blue-600" />
            <FaInstagram className="hover:text-blue-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
