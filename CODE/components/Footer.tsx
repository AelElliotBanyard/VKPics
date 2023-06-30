"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer__title">VKPics</h1>
      <div className="footer__links">
        <Link href="/">Home</Link>
        <Link href="/offers" className="footer__link">
          Offers
        </Link>
        <Link href="/about" className="footer__link">
          About Us
        </Link>
        <Link href="/work" className="footer__link">
          My Work
        </Link>
        <Link href="/contact" className="footer__link">
          Contact Us
        </Link>
        <Link href="/impressum" className="footer__link">
          Impressum
        </Link>
      </div>
    </div>
  );
};

export default Footer;
