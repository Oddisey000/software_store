import React from "react";
import "./footer.component.scss";

const FooterComponent = () => {
  return (
    <span className="footer-text">
      &copy; 2022 &nbsp;
      <a
        className="link"
        href="https://www.facebook.com/oddisey000"
      >
        Vitalii Pertsovych
      </a>
    </span>
  );
};

export default FooterComponent;