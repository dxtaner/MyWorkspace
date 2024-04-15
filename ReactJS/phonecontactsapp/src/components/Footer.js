// Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  const githubUrl = "https://github.com/dxtaner";

  return (
    <footer>
      <p>
        &copy; 2023 Your Company. All rights reserved. |{" "}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
