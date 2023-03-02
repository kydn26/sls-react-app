import React from "react";
import menuLinksData from "./data/menu-links.json";

const Header = () => {
  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p>
            <a href="#welcome">
              <img
                src="https://landonhotel.com/images/misc/arrow.png"
                alt="down arrow"
              />
            </a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">
              Landon <span>Hotel</span>
            </a>
          </div>
          <ul>
            {
              // map over menuLinksData and return a list item for each link
              menuLinksData.map((link, index) => (
                <li key={index}>
                  <a className={`icon ${link.class}`} href={link.href}>
                    <span>{link.text}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
