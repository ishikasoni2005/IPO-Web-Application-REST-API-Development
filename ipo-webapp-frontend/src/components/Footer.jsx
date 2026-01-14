import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-10">
      © {new Date().getFullYear()} IPO WebApp. All rights reserved.
    </footer>
  );
};

export default Footer;
