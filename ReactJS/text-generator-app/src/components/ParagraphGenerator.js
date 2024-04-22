import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ParagraphGenerator.css";

const ParagraphGenerator = () => {
  const [paragraphs, setParagraphs] = useState(4);
  const [contentType, setContentType] = useState("text");
  const [generatedText, setGeneratedText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    generateParagraphs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paragraphs]); // Bağımlılık eklendi

  const generateParagraphs = async () => {
    try {
      const response = await axios.get(
        `https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&format=${contentType}`
      );
      setGeneratedText(response.data);
      setError(null); // Hata olmadığında error state'ini temizle
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Veri alınamadı. Lütfen daha sonra tekrar deneyin.");
    }
  };

  const handleParagraphChange = (e) => {
    setParagraphs(e.target.value);
  };

  const handleContentTypeChange = (e) => {
    setContentType(e.target.value);
  };

  return (
    <div className="container">
      <label>
        Paragraf Sayısı:
        <input
          type="number"
          value={paragraphs}
          onChange={handleParagraphChange}
          min="1"
        />
      </label>
      <br />
      <label>
        İçerik Türü:
        <select value={contentType} onChange={handleContentTypeChange}>
          <option value="text">Text</option>
          <option value="html">HTML</option>
        </select>
      </label>
      <br />
      <div>
        {contentType === "text" ? (
          <textarea readOnly rows="10" value={generatedText} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: generatedText }} />
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ParagraphGenerator;
