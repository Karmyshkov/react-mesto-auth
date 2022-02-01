import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="footer">
      {location.pathname === "/" && (
        <p className="footer__copyright">2021 Mesto Russia</p>
      )}
    </footer>
  );
};

export default Footer;
