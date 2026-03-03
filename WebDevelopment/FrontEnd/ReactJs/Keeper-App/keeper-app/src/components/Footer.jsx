function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  padding: "20px",
  color: "gray",
};

export default Footer;
