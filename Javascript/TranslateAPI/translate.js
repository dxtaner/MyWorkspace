// translate.js
export async function translateText(text, targetLanguage) {
  const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  const apiKey = "1ca3bde1e2msh1d5de7bf0a8408cp1f96d9jsn98cbe6024677";

  const data = new URLSearchParams();
  data.append("q", text);
  data.append("target", targetLanguage);

  const requestOptions = {
    method: "POST",
    headers: {
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      "X-RapidAPI-Key": apiKey,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();

    return result.data.translations[0].translatedText;
  } catch (error) {
    return "Çeviri yapılamadı. Hata: " + error.message;
  }
}
