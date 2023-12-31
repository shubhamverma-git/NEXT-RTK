import React from "react";
import classes from "./Footer.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.upper_container}>
        <label htmlFor="search">Search</label>
        <input type="text" id="search" />
      </div>
      <div className={classes.lower_container}>
        <div className={classes.page_link}>
          <h1>Get to Know Us</h1>
          <ul>
            {pageLink.map((item, index) => (
              <li key={index}>
                <Link className={classes.links} href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.social_media_link}>
          <h1>Connect With Us</h1>
          <ul>
            {socialLink.map((i, idx) => (
              <li key={idx}>
                <Link className={classes.links} href={i.link}>
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className={classes.work}>
          <h1>Make Money with Us</h1>
          <ul>
            {workDetails.map((title, desc) => (
              <li key={desc}>
                <Link href={title.li}>{title.me}</Link>
              </li>
            ))}
          </ul>
        </div> */}
        <div className={classes.tncs}>
          <h1>Terms and Conditions</h1>
          <ul>
            {termPolicies.map((more, none) => (
              <li key={none}>
                <Link className={classes.links} href={more.detail}>
                  {more.chole}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const pageLink = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Cart",
    link: "/cart",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const socialLink = [
  {
    name: "Facebook",
    link: "https://www.facebook.com",
  },
  {
    name: "Snapchat",
    link: "https://www.snapchat.com",
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com",
  },
];

const termPolicies = [
  {
    chole: "Term and Conditions",
    detail: "/tnc",
  },
  {
    chole: "Private Policies",
    detail: "/pvc_policy",
  },
  {
    chole: "Public Policies",
    detail: "/public_policy",
  },
  {
    chole: "More",
    detail: "/more",
  },
];
