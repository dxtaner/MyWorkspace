import React, { useState, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import { nanoid } from "nanoid";
import axios from "axios";
import "./Home.css";

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image:
    "https://cro.hype.com.tr/image-api/b2uzjd9KprH4YakyiAnWf4a01c217be626de074d0a2b544cc24d.png",
  dotsOptions: {
    color: "#230a4a",
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 5,
  },
});

function Home() {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [showQrButton, setShowQrButton] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  const handleLogin = async () => {
    try {
      const { data } = await axios.get(
        `https://marineadvisor.xyz/admin/${inputVal}`
      );

      if (data.success) {
        setShowQrButton(true);
        setError("");
      } else {
        setError("Hatalı Parola! Lütfen tekrar deneyin.");
      }
    } catch (error) {
      setError("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const code = nanoid();
      const { data } = await axios.post("https://marineadvisor.xyz/qrcodes", {
        code: code,
      });

      if (data.success) {
        const url = `https://hypeinvitation.netlify.app/qrcode/${code}`;
        qrCode.append(ref.current);
        qrCode.update({
          data: url,
        });
        setShowDownload(true);
      } else {
        setError("QR kod oluşturulurken bir hata oluştu.");
      }
    } catch (error) {
      setError("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }

    setLoading(false);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: "png",
    });
  };

  return (
    <div className="app-container">
      <div className="qr-container">
        <h1>Hype QR Kod Oluşturucu</h1>
        <p>Her tıklamada yeni bir QR kod oluşturulur.</p>
        <ul>
          <li>QR Kodlar tek kullanımlıktır.</li>
          <li>İlk okunduğunda "Davetli" mesajı görüntülenir.</li>
          <li>
            İkinci okuma veya sistemde olmayan bir kod okunduğunda "Kayıt
            bulunamadı" mesajı görüntülenir.
          </li>
        </ul>

        {loading && <div className="loading">QR kod oluşturuluyor...</div>}
        {error && <div className="error">{error}</div>}

        {showQrButton ? (
          <button className="generate-button" onClick={handleGenerate}>
            Qr Code Oluştur
          </button>
        ) : (
          <>
            <input
              className="wide-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Admin Parolası"
            />

            <button className="login-button" onClick={handleLogin}>
              Giriş Yap
            </button>
          </>
        )}

        <div className="qr-code">
          <div ref={ref} />
        </div>

        {showQrButton && showDownload && (
          <button className="download-button" onClick={onDownloadClick}>
            İndir
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
