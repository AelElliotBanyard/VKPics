"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const current = usePathname().split("/")[1];
  return (
    <div className="navigation">
      <h1 className="navigation__title">
        <Link href="/">VKPics</Link>
      </h1>
      <div className="navigation__links">
        <Link
          href="/"
          className={"navigation__link " + (current === "" ? "active" : "")}
        >
          Home
        </Link>
        <Link
          href="/offers"
          className={
            "navigation__link " + (current === "offers" ? "active" : "")
          }
        >
          Offers
        </Link>
        <Link
          href="/about"
          className={
            "navigation__link " + (current === "about" ? "active" : "")
          }
        >
          About Us
        </Link>
        <Link
          href="/work"
          className={"navigation__link " + (current === "work" ? "active" : "")}
        >
          My Work
        </Link>
        <Link
          href="/contact"
          className={
            "navigation__link__button" +
            (current === "contact" ? " active" : "")
          }
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
