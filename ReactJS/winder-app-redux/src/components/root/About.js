import React from "react";

const aboutStyles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
    background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "800",
    color: "white",
  },
  description: {
    fontSize: "16px",
    color: "white",
    marginTop: "10px",
  },
};

function About() {
  return (
    <div style={aboutStyles.container}>
      <h2 style={aboutStyles.title}>Uygulama Hakkında</h2>
      <p style={aboutStyles.description}>
        Bu uygulama, ürün yönetimi ve alışveriş sepeti özelliklerini içeren bir
        örnek uygulamadır. Uygulama, React ve Redux gibi teknolojileri
        kullanarak geliştirilmiştir.
      </p>
      <p style={aboutStyles.description}>
        Uygulama içeriği, ürünlerin eklenmesi, güncellenmesi, silinmesi ve
        sepete eklenmesi gibi temel eylemleri simüle eder. Ayrıca, ürün
        kategorileri ve stok durumu gibi bilgileri yönetme yeteneği sunar.
      </p>
      <p style={aboutStyles.description}>
        Bu uygulama, React ve Redux'u kullanarak bir web uygulaması
        geliştirmenin temel konseptlerini anlamak için bir öğrenme aracı olarak
        kullanılabilir. İhtiyacınıza göre uygulamayı özelleştirebilir veya
        genişletebilirsiniz.
      </p>
    </div>
  );
}

export default About;
