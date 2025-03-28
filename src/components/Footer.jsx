import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-6 mt-auto border-t border-strokegray w-full">
      <div className="container mx-auto px-4 text-center md:text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 - About */}
          <div>
            <h2 className="text-lemon text-lg font-semibold">About</h2>
            <p className="text-eggshell mt-2 text-sm">
              Helping individuals and businesses connect through meaningful
              collaborations.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h2 className="text-lemon text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 text-sm">
              <li>
                <a href="/about" className="text-eggshell hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-eggshell hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-eggshell hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h2 className="text-lemon text-lg font-semibold">Contact</h2>
            <p className="text-eggshell mt-2 text-sm">
              📞{" "}
              <a href="tel:+233504101838" className="hover:text-white">
                +233 504 101 838
              </a>
            </p>
            <p className="text-eggshell text-sm">
              ✉️{" "}
              <a href="mailto:info@example.com" className="hover:text-white">
                joshuawuro@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-strokegray mt-6 pt-4 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AUROVA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
