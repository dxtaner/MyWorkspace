import React from "react";

const customStyle = {
  aboutSection: {
    background: "linear-gradient(to right, #ff3366, #33ccff)",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginTop: "25px",
    borderRadius: "5px",
    marginBottom: "40px",
  },
  aboutTitle: {
    fontSize: "24px",
    fontWeight: "800",
    color: "black",
  },
  aboutText: {
    fontSize: "16px",
    color: "#fff",
    fontWeight: "500",
  },
  githubLink: {
    color: "gold",
    textDecoration: "none",
    fontWeight: "700",
  },
};

function About() {
  return (
    <div style={customStyle.aboutSection}>
      <div style={customStyle.aboutTitle}> Bu Proje Hakkında</div>
      <div style={customStyle.aboutText}>
        Bu uygulama, kullanıcıların ürünleri kategorilere göre kolayca
        listeleyebilmesini, istedikleri ürünleri sepete ekleyebilmesini ve
        sepetlerinden çıkarabilmesini sağlayan kullanıcı dostu bir alışveriş
        deneyimi sunar. Ürünlerinizi kategorilere ayırarak daha kolay bir
        şekilde bulabilir ve istediğiniz ürünleri sepetinize ekleyerek
        alışverişinizi hızlandırabilirsiniz. Ayrıca, bu projenin kaynak kodları
        GitHub'da bulunmaktadır. Daha fazla detaylı bilgiye ulaşmak ve projenin
        gelişimine katkıda bulunmak için:
        <br></br>
        <a
          href="https://github.com/dxtaner"
          target="_blank"
          rel="noopener noreferrer"
          style={customStyle.githubLink}>
          GitHub sayfamı ziyaret edin dxtaner
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
