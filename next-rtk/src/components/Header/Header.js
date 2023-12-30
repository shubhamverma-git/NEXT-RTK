import React from "react";
import classes from "./Header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <div className={`flex ${classes.container}`}>
      <div className={classes.logo_container}>
        <Link className={classes.page_link} href="/">
          <h1>RTK</h1>
        </Link>
      </div>
      <div className={`flex justify-between ${classes.page_links}`}>
        <ul className={classes.mob_links}>
          {pageLinks.map((item, index) => (
            <li key={index}>
              <Link
                className={classes.page_link}
                style={{ color: "black" }}
                href={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;

const pageLinks = [
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/cart" },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];
