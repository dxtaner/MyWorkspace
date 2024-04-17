import React from "react";
import "./Header.css"; // Ekstra stil dosyası

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-title">Welcome to Hype QR Code Generator</h1>
      <p className="header-subtitle">
        Generate stylish QR codes for your trendy content
      </p>
      <p className="header-description">
        Elevate your brand with unique and eye-catching QR codes that stand out
        from the crowd. Whether it's for your website, social media, or product
        packaging, Hype QR Code Generator has you covered.
      </p>
    </div>
  );
}

export default Header;
