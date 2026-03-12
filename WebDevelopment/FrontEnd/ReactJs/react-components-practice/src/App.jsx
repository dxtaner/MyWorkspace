import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <Card
        name="Taner Özer"
        job="Frontend Developer"
        email="tanerozer16@gmail.com"
      />

      <Card
        name="Ahmet Yılmaz"
        job="Backend Developer"
        email="ahmet@gmail.com"
      />

      <Card name="Ayşe Demir" job="UI Designer" email="ayse@gmail.com" />

      <Footer />
    </div>
  );
}

export default App;
